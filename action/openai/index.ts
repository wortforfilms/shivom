import { create_res, find_res } from "@/action";
import { update_project_synopsis } from "./update_project_synopsis";


export const create_manuscript_comp = async (pmt:any , book: any, setSynopsis: any, setProcessing: any, setBook:any) => {

  const DEFAULT_PARAMS = {
    "model": "text-davinci-003",
    "prompt": pmt,
    "temperature": 0.8,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  };

  const params_ = { ...DEFAULT_PARAMS };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(process.env.Open_Ai_Key)
    },
    body: JSON.stringify(params_)
  };

  const fetch_open = async () => {
    await fetch('https://api.openai.com/v1/completions', requestOptions).then(res => res.json()).then(data => {
      create_res(pmt, data, "ad").then(res => {
        if (res && res.data && res.data[0].response) {
          console.log('created synopsis', res);
          setSynopsis(res.data[0].response.choices[0].text);
          if(res.data[0].response.choices[0].text && book?.id){
            const synopsis=res.data[0].response.choices[0].text
            update_project_synopsis(synopsis,book.id).then(res=>{
              if(res && res.data && res.data.length>0){
                setBook(res.data[0])
              }
            })
          }
          setProcessing(false);
          return res.data[0];
        }
      });
    }).catch(error => {
      console.log(error);
      setProcessing(false);
    });
  };

  await find_res(pmt).then(res => {
    if (res && res.existing_res && res.existing_res.length > 0 && res?.existing_res[0]?.response?.choices && res?.existing_res[0]?.response?.choices[0]?.text) {
      console.log('found synopsis', res);
      console.log('found synopsis play ext', res?.existing_res[0]?.response?.choices[0]?.text);

      setSynopsis(res.existing_res[0]?.response?.choices[0]?.text);
      const synopsis=res.existing_res[0]?.response?.choices[0]?.text
      if(book.project_synopsis!==synopsis){
        update_project_synopsis(synopsis,book.id).then(res=>{
          if(res && res.data && res.data.length>0){
            setBook(res.data[0])
          }
        })
      }
      setProcessing(false);
      return res.existing_res[0].response;
    } else {
      console.log("local not found");
      fetch_open();
    }
  });

};

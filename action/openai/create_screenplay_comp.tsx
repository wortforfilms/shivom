import { create_res, find_res } from "@/action";


export const create_screenplay_comp = async (characters: any, screenplay: any, setSceneScreenPlay1: any, setProcessing: any) => {

  const pmt = `write screenplay with ${characters.slice(0, -1)} and ${characters.slice(-1)} for a scene where ${screenplay}`;

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
        if (res && res.data) {
          console.log('created ext', res);
          setSceneScreenPlay1(res.data[0].response.choices[0].text);
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
      console.log('found ext', res);
      console.log('found screen play ext', res?.existing_res[0]?.response?.choices[0]?.text);

      setSceneScreenPlay1(res.existing_res[0]?.response?.choices[0]?.text);
      setProcessing(false);
      return res.existing_res[0].response;
    } else {
      console.log("local not found");
      fetch_open();
    }
  });

};



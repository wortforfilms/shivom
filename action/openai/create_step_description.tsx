import { create_res, find_res } from "@/action";


export const create_step_description = async (pmt: any, setProcessing: any, setMatter: any) => {


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
      console.log("start describing");
      create_res(pmt, data, "ad").then(res => {
        if (res && res.data && res.data[0].response) {
          console.log('created description', res);
          setMatter(res?.data[0]?.response?.choices[0]?.text);
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
      console.log('founddescription', res);
      console.log('found description ext', res?.existing_res[0]?.response?.choices[0]?.text);
      setMatter(res?.existing_res[0]?.response?.choices[0]?.text);
      setProcessing(false);
      return res.existing_res[0].response;
    } else {
      console.log("local not found");
      fetch_open();
    }
  });

};


export const create_step_list = async (pmt: any, setProcessing: any, setMatter: any) => {


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
      console.log("start describing");
      create_res(pmt, data, "ad").then(res => {
        if (res && res.data && res.data[0].response) {
          console.log('created description', res);
          setMatter(res?.data[0]?.response?.choices[0]?.text);
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
      console.log('founddescription', res);
      console.log('found description ext', res?.existing_res[0]?.response?.choices[0]?.text);
      setMatter(res?.existing_res[0]?.response?.choices[0]?.text);
      setProcessing(false);
      return res.existing_res[0].response;
    } else {
      console.log("local not found");
      fetch_open();
    }
  });

};


const india_ff=`
submission requirements
`

const usa_ff=`
1. Sundance Film Festival (Park City, Utah)
2. Tribeca Film Festival (New York City, New York)
3. South by Southwest (Austin, Texas)
4. Los Angeles Film Festival (Los Angeles, California)
5. Seattle International Film Festival (Seattle, Washington)
6. New York Film Festival (New York City, New York)
7. San Francisco International Film Festival (San Francisco, California)
8. Chicago International Film Festival (Chicago, Illinois)
9. Telluride Film Festival (Telluride, Colorado)
10. Miami International Film Festival (Miami, Florida)
11. AFI Fest (Los Angeles, California)
12. Hot Docs Canadian International Documentary Festival (Toronto, Ontario)
13. Heartland Film Festival (Indianapolis, Indiana)
14. Nashville Film Festival (Nashville, Tennessee)
15. Denver Film Festival (Denver, Colorado)
16. Florida Film Festival (Orlando, Florida)
17. Hawaii International Film Festival (Honolulu, Hawaii)
18. Hamptons International Film Festival (East Hampton, New York)
19. Slamdance Film Festival (Park City, Utah)
20. San Diego International Film Festival (San Diego, California)
`
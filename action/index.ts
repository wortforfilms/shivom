import { supabase } from "@/lib/Store"
import { onlyUnique } from "@/util/unique"
// import { supabase } from "@/lib/Store"

export const find_res=async(_pmt:any)=>{
    const {data:existing_res,error}=await supabase.from('openai').select('*').eq('prompt',_pmt).order('created_at',{ascending:false})

if(error){
    console.log(error,'error in fetching')
}
return {existing_res,error}
}


export const create_res=async(_pmt:any,res:any,type:any)=>{
    const{data,error}=await supabase.from('openai').insert([{
        prompt:_pmt,
        response:res,
        type:type
    }]).select('*')
    return{data,error}
}


export const get_q=async(role:any, setDescription:any)=> {
const pmt=`Create a list of 8 questions for my interview with a ${role}:`
    // const{role}=props
    const DEFAULT_PARAMS = {
        "model": "text-davinci-002",
        "prompt": pmt,
        "temperature": 0.7,
        "max_tokens": 256,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
      }
    const params_ = { ...DEFAULT_PARAMS };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(process.env.Open_Ai_Key)
      },
      body: JSON.stringify(params_)
    };

    const fetch_open=async()=>{
        await fetch('https://api.openai.com/v1/completions', requestOptions).then(res=>res.json()).then(data=>{
            create_res(pmt,data,"qa").then(res=>{
                if(res && res.data){
                    setDescription(res.data[0].response.choices[0].text)
                    return res.data[0]
                }
            })
    }).catch(error=>{console.log(error)})
    }

    await find_res(pmt).then(res=>{
        if(res && res.existing_res && res.existing_res.length>0 && res?.existing_res[0]?.response?.choices && res?.existing_res[0]?.response?.choices[0]?.text){
        // console.log(res,'found',res.existing_res[0].response.choices[0].text)
        const lis=res.existing_res[0].response.choices[0].text.split('\n').filter(onlyUnique)
        const _l=lis.map((ele:any)=>{
            return `<p>${ele}</p>`
        })
        // console.log(lis,'---=> lis',..._l)
        setDescription(res.existing_res[0].response.choices[0].text)
            return res.existing_res[0].response
        } else {
         const f=fetch_open()
         return f
        }
    })

}

export const get_department_notes=async(role:any, setRequirment:any)=> {
// const{role}=props
const pmt=`What are 8 key points I should know when working as ${role}:`

const DEFAULT_PARAMS = {
    "model": "text-davinci-002",
    "prompt": pmt,
    "temperature": 0.7,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  }
const params_ = { ...DEFAULT_PARAMS };
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + String(process.env.Open_Ai_Key)
  },
  body: JSON.stringify(params_)
};

const fetch_open=async()=>{
    await fetch('https://api.openai.com/v1/completions', requestOptions).then(res=>res.json()).then(data=>{
        create_res(pmt,data,"qa").then(res=>{
            if(res && res.data){
        // console.log('created',res)
        setRequirment(res.data[0].response.choices[0].text)
                return res.data[0]
            }
        })
                    }).catch(error=>{console.log(error)})
}

await find_res(pmt).then(res=>{
    if(res && res.existing_res && res.existing_res.length>0 && res?.existing_res[0]?.response?.choices && res?.existing_res[0]?.response?.choices[0]?.text){
        // console.log('found',res)
        // console.log('found requirment',res?.existing_res[0]?.response?.choices[0]?.text)

        setRequirment(res.existing_res[0].response.choices[0].text)
        return res.existing_res[0].response
    } else {
         fetch_open()
    }
})

}

export const create_section_ad=async(role:any, setAdPost:any)=>{

    const pmt= `Write a creative ad for the following product to run on Facebook aimed at ${role}:\n\nProduct: thelineproducer.com is an artificial intelligenge environment to help film makers from kindergarten to high school excel in film making.` 
    const DEFAULT_PARAMS = {
        "model": "text-davinci-003",
        "prompt": pmt,
        "temperature": 0.7,
        "max_tokens": 256,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
      }
    const params_ = { ...DEFAULT_PARAMS };
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(process.env.Open_Ai_Key)
      },
      body: JSON.stringify(params_)
    };
    
    const fetch_open=async()=>{
        await fetch('https://api.openai.com/v1/completions', requestOptions).then(res=>res.json()).then(data=>{
            create_res(pmt,data,"ad").then(res=>{
                if(res && res.data){
            // console.log('created',res)
            setAdPost(res.data[0].response.choices[0].text)
                    return res.data[0]
                }
            })
                        }).catch(error=>{console.log(error)})
    }
    
    await find_res(pmt).then(res=>{
        if(res && res.existing_res && res.existing_res.length>0 && res?.existing_res[0]?.response?.choices && res?.existing_res[0]?.response?.choices[0]?.text){
            // console.log('found',res)
            // console.log('found requirment',res?.existing_res[0]?.response?.choices[0]?.text)
    
            setAdPost(res.existing_res[0].response.choices[0].text)
            return res.existing_res[0].response
        } else {
             fetch_open()
        }
    })


}
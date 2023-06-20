
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnClickOutside from "@/hook/useOnClickOutside";
import { close_post_stat_panel } from "@/store/panels/action";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";

import {
  FacebookShareButton,
  TelegramShareButton,
WhatsappShareButton,
LinkedinShareButton,
EmailShareButton,
TwitterShareButton

} from 'next-share';
import { MdOutlineEmail } from "react-icons/md";
import { supabase } from "@/lib/Store";
import { onlyUnique } from "@/util/unique";
// import { supabase } from "@/util/supabase";
// import { onlyUnique } from "@/util/filter";

// @ stat like actions
const post_stat_like_actions=async(post_id:any,userId:any)=>{
  console.log(post_id,userId,'for update--->')

  const {data:post,error:err}=await supabase.from('post_related').select('*').eq('post_id',post_id)
  
  const t_v=post[0]?.total_likes?post[0].total_likes+1:1
  const l_b=post[0]?.liked_by?[userId,...post[0].liked_by]:[userId]

  const {data,error}=await supabase.from('post_related').update([
    {
      total_likes:t_v,
      liked_by:l_b?.filter(onlyUnique)
    }
  ]).eq('post_id',post_id).select('*')

  console.log("first like action", data)
  return {data,error}
  }
  
  // @ stat share actions
  
  const post_stat_share_actions=async(post_id:any,userId:any)=>{
      const {data,error}=await supabase.from('post_related').update([{
          shared_by:(s:any)=>s?[userId,...s]:[userId],
          shares:(s:any)=>s+1
      }])
      }
  
  // @ stat share actions
  
  const post_stat_rating_action=async(post_id:any,rating:any,userId:any)=>{
    console.log(post_id,userId,rating,'---=> rating')
    const {data:ra,error:re}=await supabase.from('post_related').select('*').eq('post_id',post_id)

    if(re){
      console.log(re,'-----=>error')
    }
    if(ra ){

      console.log(ra,'-----> see users',ra?.rating?.map((i:any)=>i.userId))
const raters=ra[0]?.rating?.map((i:any)=>i.userId)

var rat
      if(raters && raters.includes(userId)){
        console.log("already rated by user")
        rat=ra[0]?.rating?.map((usrating:any,index:number)=>{
          if(usrating.userId===userId){
            return {
              userId:userId,
              rating:rating
            }
          } else {
            return usrating
          }
        })
      } else {
        console.log('new rater--->')
     rat=ra[0].rating?[{userId:userId,
      rating:rating},...ra[0]?.rating]:[{userId:userId,
        rating:rating}]
      }

     
      const {data,error}=await supabase.from('post_related').update([{
        rating:rat?rat:[{
          userId:userId,
          rating:rating
        }]
      }]).eq('post_id',post_id).select('*')
      console.log(data,'after rating',rat)
      return {data,error}
    }
  }
    
  // pr_post_type
  //  
    
export const PostStatsPop = (props: any) => {
  const { initialReduxState } = props;
const earth:typeof initialReduxState=useSelector(state=>state)
const popRef=useRef<any>(null)
  const dispatch=useDispatch()

  const [user_rating,setUserRating]=useState<any>(0)
  // const [user_like,setUserLike]=useState<any>(0)

  useOnClickOutside(popRef,()=>dispatch(close_post_stat_panel()))
  return <div className="absolute bg-gray-700/50  w-full h-screen -ml-2 z-50">
      <div className=" flex grow w-[100vw]   sm:w-full h-[90vh]"
      >

<div className="bg-white w-full h-2 m-auto p-2" 
      ref={popRef}

>
 {earth?.panel?.post_stat?.pop_view==="like" && <div className="text-center flex flex-row gap-4 justify-around grow w-full   font-bold p-2 uppercase">
    {
      ['👍','😊','👌','😲','🔥'].map((st,index)=>{
        return <motion.div 
        whileHover={{scale:.95}}
        whileTap={{scale:1.5,opacity:0}}
        animate={{opacity:[0,100,0,100,0,100],y:[10*index,0], 
          // transition:{delay:.5*index}
        }}
        key={index} 
        onClick={()=>{
          // setUserLike(index+1)
          post_stat_like_actions(earth?.panel?.post_stat?.id,earth?.auth?.user?.id)
          dispatch(close_post_stat_panel())
        }}
        className={`text-3xl sm:text-5xl w-10 h-10 sm:w-12 sm:h-12 ring-4 -mt-6 p-1 sm:p-0 sm:-mt-8 ring-white 
        bg-rose-500
        rounded-full cursor-pointer`}>{st}</motion.div>
      })
    }
    </div>}
    {earth?.panel?.post_stat?.pop_view==="share" && <div className="text-center flex flex-row gap-4 justify-around grow w-full   font-bold p-2 uppercase">
    {
      [{icon:
        <EmailShareButton
        url={earth?.panel?.post_stat?.meta?.url}
        subject={earth?.panel?.post_stat?.meta?.title}
        body={`Suitable opening for ${earth?.panel?.post_stat?.meta?.description}`}
        >

          <MdOutlineEmail/>
        </EmailShareButton>
        },{icon:<FacebookShareButton
      url={earth?.panel?.post_stat?.meta?.url}
      quote={'tlp-the next generation film production..'}
      hashtag={'#tlp-share#opening'}
      >
      <FaFacebook/>
      </FacebookShareButton>
    },{icon:<WhatsappShareButton
      url={earth?.panel?.post_stat?.meta?.url}
      title={earth?.panel?.post_stat?.meta?.title}
      separator="::"
      // quote={'tlp-the next generation film production..'}
      // hashtag={'#tlp-share'}
    >
      <BsWhatsapp/>
      </WhatsappShareButton>
    },
    {icon:<TwitterShareButton 
      url={earth?.panel?.post_stat?.meta?.url}
      title={earth?.panel?.post_stat?.meta?.title}
    >
      <BsTwitter/>
      </TwitterShareButton>
    },
    {icon:<LinkedinShareButton
    url={earth?.panel?.post_stat?.meta?.url}
    title={earth?.panel?.post_stat?.meta?.title}
    >
    <BsLinkedin/>
    </LinkedinShareButton>
  
  }].map((st,index)=>{
        return <motion.div 
        whileHover={{scale:.95}}
        whileTap={{scale:1.5,opacity:0}}
        animate={{opacity:[0,100,0,100,0,100],y:[10*index,0], 
          // transition:{delay:.5*index}
        }}
        key={index} className="text-3xl sm:text-5xl w-10 h-10  sm:w-12 sm:h-12 ring-4 p-1 sm:p-0 -mt-8 ring-white  bg-sky-500 rounded-full cursor-pointer"
        onClick={()=>{
          dispatch(close_post_stat_panel())

        }}
        >{st.icon}</motion.div>
      })
    }
    </div>}
    {earth?.panel?.post_stat?.pop_view==="rate" && <div className="text-center flex flex-row gap-4 justify-around grow w-full   font-bold p-2 uppercase">
    {
      ['⭐','⭐','⭐','⭐','⭐'].map((st,index)=>{
        return <motion.div 
        whileHover={{scale:.95}}
        whileTap={{scale:1.5,opacity:0}}
        animate={{opacity:[0,100,0,100,0,100],y:[10*index,0], 
          // transition:{delay:.5*index}
        }}
        key={index} className={`text-3xl sm:text-5xl w-10 h-10 sm:w-12 sm:h-12 ring-4 p-1 sm:p-0 -mt-6 sm:-mt-8 ring-white  bg-white rounded-full cursor-pointer ${index>user_rating-1 ? "":"bg-rose-500"}`}
        onClick={()=>{
          post_stat_rating_action(earth?.panel?.post_stat?.id,index+1,earth?.auth?.user?.id)
          dispatch(close_post_stat_panel())

        }}
        >{st}</motion.div>
      })
    }
    </div>}

    </div>

  </div>

  </div>;
};


// aipl office 7982301305 mr. prashant

// create view test language
// ek nayi khidki kholain 
// labels: // create your menus
// selecter 
// options
// 
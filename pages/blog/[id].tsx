import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'
import { PostStat, PromotionalPost, RecentPost, RecommededPost } from '.'
import { useRouter } from 'next/router'
import { FaBackward } from 'react-icons/fa'
import { supabase } from '@/lib/Store'
import { errorT, notify } from '@/components/toast'
import { range } from '@/util/createRange'
import Image from 'next/image'


export default function Blog() {
  const [blog,setBlog]=useState({
    title:"Brahmi  Bam Bam",
    description:'How brahmi creates a path to quantum with its unique capabilities',
    content:`The ancient are rising from it's  soul`,
    image:`/blog/${faker.helpers.arrayElement(range(1,100))}.jpeg`
  })

  const router=useRouter()
  const {id}=router.query
  useEffect(() => {
    let mount=true
    if(mount){
      const get_blog=async()=>{
        const {data,error}=await supabase.from('post').select('*').eq('title',id).eq('type','blog')
console.log(data)
        if(error){
          errorT('Issue getting blog.')
        }
        if(data &&  data.length>0){
          setBlog(data[0])
        } else {
          notify('No yet processed.')
        }
      }

      get_blog()
    }
  
    return () => {
      mount=false
    }
  }, [id])
  
  return (
    <div className='flex flex-col mb-24'>

      <div className='h-12'></div>

      <div><FaBackward className='p-2 text-5xl'
      onClick={()=>router.back()}
      /></div>
    <div className="overflow-hidden flex flex-col sm:flex-row max-w-5xl bg-white px-6 mb-4 m-auto lg:px-0">
        <div className="  p-2 w-full overflow-hidden">
          <Image
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-100"
            src={blog.image}
            alt="blog im"
            width={100}
            height={100}
          />      
      </div>
      <div className='mt-4 sm:mt-12 m-auto'>

      <h1>{id}</h1>
      <div>Author: {"Hemant Kumar Dixit"}</div>
      <PostStat />
   
      </div>
      {/* <PromotionalPost/> */}

    </div>
    <div className='p-4 sm:p-12 flex flex-col max-w-5xl  m-auto gap-4 bg-white' 
    >
      {blog.content.split('\n\n').map((li,index)=>{
        return <div  key={index}>{li}<br/></div>
      })}
    </div>
    <div>

<Ask_me/>
<div className='p-2 text-xs m-auto text-center'>
  Unlock ChatGPT::Bard::Rudra::
  </div>

<div className='text-xs p-2 m-auto text-center'>
Host a live session on topic
</div>

<PostComment/>
    </div>

    <h1 className="p-2 mt-4">Recent</h1>
    <RecentPost/>

    <h1 className="p-2 mt-8">Most Popular</h1>
    <RecommededPost/>
    </div>

  )
  }

  export const btn="p-2 bg-pink-500 text-white shadow-lg m-auto w-100 px-2 rounded-lg  mt-2 mb-2"
  const Ask_me=()=>{

    const get_answser=()=>{
      // viberation  of vibyour
      // baijAihapiaalaa
      // test=>{}
      // take the test   
      // resolve on
      const pmt='text'

    }



    return <div  className='m-auto  flex flex-col '>
    <textarea rows={3} className='w-[90%] rounded-lg m-auto p-2 mt-12 text-xs border-2 border-gray-300 ' placeholder='Add Comment'/>
    <button className={btn}>Comment</button>
    </div>
  }


  const PostComment=()=>{

    const get_post_comments=()=>{
      // viberation  of vibyour
      // baijAihapiaalaa
      // test=>{}
      // take the test   
      // resolve on
      const pmt='text'

    }



    return <div  className='m-auto  flex flex-col '>
    <textarea rows={6} className='w-[90%] rounded-lg m-auto p-2 mt-12 text-xs border-2 border-gray-300 ' placeholder='Ask if curious'/>
    <button className={btn}>Ask</button>
    </div>
  }



 
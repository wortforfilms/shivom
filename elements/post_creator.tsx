import { useState } from "react"

export const PostCreator=()=>{
  const [preview,setPreview]=useState<any>({})
  const [list,setList]=useState<any>([
    {title:"title0",matter:"matter",created_at:""},
    {title:"title1",matter:"matter",created_at:""},
    {title:"title2",matter:"matter",created_at:""}

  ])
  const [view,setView]=useState<any>('list')
  return <div className="bg-white w-80 shadow-lg rounded-lg p-2">
    <div className="flex flex-row gap-2">{['edit','list','update'].map((vi,index)=>{
      return <div key={index}
      onClick={()=>{
        setView(vi)
      }}
      >{vi}</div>})}</div>
   {view==='create' && <div>
      <input placeholder="Enter Title"/>
      <textarea placeholder="Enter Matter"/>
      <div>
        post
      </div>
    </div>}

    {view==='list' && <div>
      {
        list.map((post:any,index:number)=>{
          return <div key={index} >
            {post.title} 
            <div className="flex flex-row gap-2">
              <div>Edit</div> 
              <div>Delete</div>
              <div>Report</div>
              </div>
          </div>
        })
      }
    </div>}
  </div>
}
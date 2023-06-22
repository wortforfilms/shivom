import { useRouter } from "next/router"
import { useState } from "react"

const Book=()=>{
  
  const router=useRouter()
  const {id}=router.query
const [book,setBook]=useState({
  book_id:0,
  sku:"a",
  book_title:"",
  book_category:"",
  book_collection:"",
  book_images:[],
  book_cover:[],
  book_introduction:"",
  book_manuscript:"",
  book_index:[],
  book_matter:[],
  book_meta:[],
  book_glossary:[]
})


  return <div>
{id}
<h1>{book.book_title}</h1>
<div className="flex flex-col gap-2">

<div>{book.book_index.map((bk,index)=>{
  return <div  key={index}>
    <div>{index+1}. {bk}</div></div>
})}</div>
</div>
  </div>
}

export default Book
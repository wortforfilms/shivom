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
  book_covers:[],
  book_introduction:"",
  book_manuscript:"",
  book_index:{},
  book_chapters:[],
  book_meta:[],
  book_glossary:[]
})


  return <div>
{id}
  </div>
}

export default Book
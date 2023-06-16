import { useRouter } from "next/router"
import { useState } from "react"

const Book=()=>{
  
  const router=useRouter()
  const {id}=router.query
const [book,setBook]=useState({
  book_id:0,
  sku:"a",
  book_title:"",
  book_images:[],
  book_description:"",
  book_technical:[],
  book_precautions:[]
})


  return <div>
{id}
  </div>
}

export default Book
import { useRouter } from "next/router"
import { useState } from "react"

const Product=()=>{
  
  const router=useRouter()
  const {id}=router.query
  const [product,setProduct]=useState({
  product_id:0,
  sku:"a",
  product_title:"",
  product_images:[],
  product_description:"",
  product_technical:[],
  product_precautions:[]
})


  return <div>
[id]
  </div>
}

export default Product
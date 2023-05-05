import { useState } from "react";

export const ProductForm = () => {
  return <div className="flex flex-col sm:flex-row gap-2">
        <video muted autoPlay controls={false} loop
            
            className=" z-10 w-full sm:w-96  p-2 mt-8
              min-w-96 min-h-full max-w-none mb-8"
            >
                
              <source src={"/mp4/flyer1.mp4"} type="video/mp4"
            //   autoplay={true}
            
              
              
              />
              Your browser does not support the video tag.
            </video>
<form onSubmit={()=>{
  console.log('data in form')
}}
className='p-2 text-xs shadow-lg flex w-full sm:w-80 flex-col gap-4 bg-white rounded-lg ring-2 ring-gray-400 mt-8 mb-8'
>
<div className='p-2 bg-white '>
      <label>Enter Product Type</label><br />
      <input className='bg-gray-300 p-2 w-full' type="text" placeholder='Enter Product Type' />
    </div>

    <div className='p-2 bg-white '>
      <label>Enter Product Name</label><br />
      <input className='bg-gray-300 p-2 w-full' type="text" placeholder='Enter Product Name' />
    </div>

    <div className='p-2 bg-white'>
      <label>Enter Product Description</label><br />
      <textarea className='bg-gray-300 p-2 w-full' rows={3} placeholder='Enter Product Description' />
    </div>

    <div className='p-2 bg-white'>
      <label>Enter Product Specifications</label><br />
      <textarea className='bg-gray-300 p-2 w-full' rows={3} placeholder='Enter Product Specifications' />
    </div>

    <div className='p-2 bg-white'>
      <label>Enter Product Price</label><br />
      <input className='bg-gray-300 p-2 w-full' type="number" placeholder='Enter Product Price' />
    </div>

    <div className='bg-pink-500 text-white p-2 text-center rounded-lg shadow-lg hover:bg-blue-500 cursor-pointer'>
      Register Product
      </div>
</form>


  </div>;
};


const product_form=[
  {
    type:"text",
    label:"Product Title",
    message:"Enter Product Title",
    name:"product_title",
    options:[],
    value:[],
  },
  {
    type:"textarea",
    label:"Product Description",
    message:"Enter Product Description",
    name:"product_description",
    options:[],
    value:[],
  },
  {
    type:"list",
    label:"Product Specifications",
    message:"Enter Product Specifications",
    name:"product_specifications",
    options:[],
    value:[],
  }
]


// dh ar ma
// k v |T|w
// ∂˙å®µå 
// ‰Â
// ‰Â
// ˚å®µå
// ‰Â
// ≠±
// µå






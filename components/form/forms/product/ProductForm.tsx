import { useState } from "react";

export const ProductForm = () => {
  return <div className="flex flex-col sm:flex-row gap-2">
        <video muted autoPlay controls={false} loop
            
            className=" z-10 w-full w-full sm:w-96  p-0 sm:p-2 mt-8
              min-w-96 min-h-full max-w-none mb-8"
            >
                
              <source src={"/mp4/flyer1.mp4"} type="video/mp4"
            //   autoplay={true}
            
              
              
              />
              Your browser does not support the video tag.
            </video>
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






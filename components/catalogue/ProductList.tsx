import { AddCartButtonAlpha } from '@/util/cart/AddCartButton';
import Image from 'next/image';
import { useState } from 'react';

// const Rounded=()=>{
//   return <div className='p-8 mt-24'>
//   <FancyCarousel 
//         images={zods.map(i=>i.sign)} 
//         carouselRadius={300}
//         peripheralImageRadius={50}
//         centralImageRadius={100}
//         focusElementStyling={{border: '2px solid #ba4949'}}
//         autoRotateTime={3}
//         borderWidth={4}
//         borderHexColor={'1c364f'}
//         />
//         </div>
// }
export const ProductList = () => {

  const [product_list, setPL] = useState<any>([
    {
      product_type: "t-shirt",
      product_title: "Cosmic T-shirts",
      product_description: "T-shirt for empovering your cosmos with mystical enrgies.",
      product_specification: "Dosh nivaran tshirts",
      product_price: "510.00",
      cureency: "INR",
      product_rating: "4.5",
      product_images: ["/img/tshirt/13.png"]
    },
    {
      product_type: "gems",
      product_title: "Navgrah Ear Rings",
      product_description: "Jewells for empovering your cosmos with mystical enrgies.",
      product_specification: "Dosh nivaran gems",
      product_price: "25600.00",
      cureency: "INR",
      product_rating: "4.5",
      product_images: ["/img/gems/37.jpeg"]
    },
    {
      product_type: "gems",
      product_title: "Graha Rings",
      product_description: "Rings with mystical energies.",
      product_specification: "Dosh nivaran gems",
      product_price: "7890.00",
      cureency: "INR",
      product_rating: "4.5",
      product_images: ["/img/gems/38.jpeg"]
    }
  ]);

  return <div>
    <div className='w-full  p-2 flex flex-col sm:flex-row gap-2 overflow-auto'>

      {product_list.map((product: any, index: number) => {
        const _item={
          id:index,
           title:product.product_title,
            images:product.product_images, pr_type:"physical goods", data:"data", variance:[{price:product.product_price}]
        }
        return <div key={index} className='bg-white p-4 flex flex-col justify-between'>
          <div>Rating: {product.product_rating}</div>
          <Image
            src={product.product_images[0]}
            alt="tshirt"
            width={100}
            height={100}
            className='w-96' />
          <div className='text-md font-bold py-4'>{product.product_title}</div>
          <div className='text-md font-thin py-4'>{product.product_description}</div>
          <div className='flex flex-col sm:flex-row gap-8  p-1 m-auto rounded-lg justify-between'>
            <div className='text-md text-center font-bold py-4'>INR. {product.product_price}</div>
            <div className='bg-blue-500 text-white m-auto text-center font-bold p-2 rounded-lg shadow-lg hover:bg-pink-500 cursor-pointer '>Add to Cart
            {/* <AddCartButtonAlpha item={_item}/> */}
            </div>
          </div>
        </div>;
      })}

    </div>
  </div>;
};



// buyer seller
// 
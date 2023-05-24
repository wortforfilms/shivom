import { add_to_cart } from '@/store/cart/action';
import { AddCartButtonAlpha } from '@/util/cart/AddCartButton';
import { dispatch } from 'd3';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const ProductList = (props:any) => {

  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
    const router=useRouter()
  const [product_list, setPL] = useState<any>([
    {
      product_type: "t-shirt",
      product_title: "Cosmic T-shirts",
      product_description: "T-shirt for empovering your cosmos with mystical enrgies.",
      product_specification: "Dosh nivaran tshirts",
      product_price: "510.00",
      curency: "INR",
      product_rating: "4.5",
      product_images: ["/img/tshirt/13.png"]
    },
    {
      product_type: "gem",
      product_title: "Navgrah Ear Rings",
      product_description: "Jewells for empovering your cosmos with mystical enrgies.",
      product_specification: "Dosh nivaran gems",
      product_price: "25600.00",
      curency: "INR",
      product_rating: "4.5",
      product_images: ["/img/gems/37.jpeg"]
    },
    {
      product_type: "gem",
      product_title: "Graha Rings",
      product_description: "Rings with mystical energies.",
      product_specification: "Dosh nivaran gems",
      product_price: "7890.00",
      curency: "INR",
      product_rating: "4.5",
      product_images: ["/img/gems/38.jpeg"]
    },
    {
      product_type: "yantra",
      product_title: "Doshmukti Yantra",
      product_description: "Rings with mystical energies balancers.",
      product_specification: "Dosh nivaran yantra",
      product_price: "999.00",
      curency: "INR",
      product_rating: "4.5",
      product_images: ["/img/gems/03.jpeg"]
    },
    {
      product_type: "gem",
      product_title: "Ennhancer Dixiom Gem",
      product_description: "Rings with mystical energies enhancer.",
      product_specification: "Laxmi pradanak yantra",
      product_price: "4999.00",
      curency: "INR",
      product_rating: "4.5",
      product_images: ["/img/gems/21.jpeg"]
    },

  ]);

  const dispatch=useDispatch()

  return <div>
    <div className='w-full  p-2 flex flex-col sm:flex-row flex-wrap justify-around  gap-2 overflow-auto'>

      {product_list.map((product: any, index: number) => {
        const _item={
          id:index,
           title:product.product_title,
            images:product.product_images, pr_type:"physical goods", data:"data", variance:[{price:product.product_price}]
        }
        return <div key={index} className='bg-white p-4 w-full sm:w-72 flex flex-col justify-between'>
          <div>Rating: {product.product_rating}</div>
          <div className='bg-black w-full'>
          <Image
            src={product.product_images[0]}
            alt="tshirt"
            width={100}
            height={100}
            className='w-96 invert m-auto ' /></div>
          <div className='text-md font-bold py-4'>{product.product_title}</div>
          <div className='text-md font-thin py-4'>{product.product_description}</div>
          <div className='flex flex-col sm:flex-col gap-2  p-1  rounded-lg justify-between'>
            <div className='text-md text-center font-bold py-1'>INR. {product.product_price}</div>
            <div className='bg-blue-500 text-white m-auto text-center font-bold p-2 rounded-lg shadow-lg hover:bg-pink-500 cursor-pointer '
            onClick={()=>{
              const id=index
              const title=product.product_title
              const price=product.product_price
              const images=product.product_images
              const pr_type="physical"

              if(earth?.auth?.autheticated){

                dispatch(add_to_cart(id,title,price,images,pr_type))
              } else {
                router.push('/auth/login')
              }
            }
            }
            >Add to Cart
            </div>
          </div>
        </div>;
      })}

    </div>
  </div>;
};





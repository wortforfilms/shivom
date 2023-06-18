import { faker } from '@faker-js/faker'
import { useState } from 'react'


export default function Blog() {
  const [blog,setBlog]=useState({
    title:"Brahmi  Bam Bam",
    description:'How brahmi creates a path to quantum with its unique capabilities',
    matter:`The ancient are rising from it's  soul`,
    image:`/blog/${faker.helpers.arrayElement([1,2,3,4,5,6])}.jpeg`
  })
  return (
    <div className=" overflow-hidden flex flex-col sm:flex-row  bg-white px-6  lg:overflow-visible lg:px-0">
      <div className='h-24'></div>
        <div className="  p-12  overflow-hidden">
          <img
            className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-100"
            src={blog.image}
            alt="blog im"
          />      
      </div>
      <div className='mt-12'>

      <h1>{blog?.title}</h1>
      <h3>{blog?.description}</h3>
      <div>{blog?.matter}</div>
      </div>
    </div>
  )
  }
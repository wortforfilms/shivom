import { BiSupport } from "react-icons/bi"
import { GrNew } from "react-icons/gr"
import { MdPropane } from "react-icons/md"


const Blog=()=>{

  return <div className="p-4">
    <div className="h-12"></div>

    <div className="thin-head flex flex-row justify-between">
      <div>
        Blogs 
        </div>
        <div className="flex flex-row text-xl mt-2 gap-2">
      <GrNew/>
      <MdPropane/>
      <BiSupport/>
      </div></div>

    <h1 className="p-2 mt-8">Recent</h1>
    <h1 className="p-2 mt-8">Most Popular</h1>
    <h1 className="p-2 mt-8">Most Liked</h1>
    
    </div>
}


export default Blog
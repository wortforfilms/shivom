import { FaWindowClose } from "react-icons/fa"

export const RightPanel=()=>{
  return <div className="absolute right-0 top-0 w-[80vw] h-[100vh] bg-pink-500">
 <div className="flex flex-row justify-end">
      <FaWindowClose className="text-3xl"/>
    </div>
  </div>
}

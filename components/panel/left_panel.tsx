import { FaWindowClose } from "react-icons/fa"

export const LeftPanel=()=>{
  return <div className="absolute left-0 top-0 w-[80vw] -ml-2 h-[100vh] bg-blue-500">
    <div className="flex flex-row justify-end">
      <FaWindowClose className="text-3xl"/>
    </div>

  </div>
}
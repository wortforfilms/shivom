import NakApp from "@/pages/galaxy/rashi"
import { useRouter } from "next/router"

const Nakshatra=()=>{
  const router=useRouter()
  const {id}=router.query
  return <div className="h-[90vh] w-full bg-white p-2">
    <h1 className="text-xl text-center font-bold">
      {
        id
      }
      </h1>
      <NakApp/>
  </div>
}

export default Nakshatra
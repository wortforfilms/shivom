import { useRouter } from "next/router"

const Dosh=()=>{
  const router=useRouter()
  const {id}=router.query
  return <div className="h-[100vh] w-full bg-white p-2">
    <h1 className="text-xl text-center font-bold">
      {
        id
      }
      </h1>
  </div>
}

export default Dosh
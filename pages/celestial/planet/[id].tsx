import { useRouter } from "next/router"

const Planet=()=>{
  const router=useRouter()
  const {id}=router.query
  return <div className="h-[100vh] w-full bg-white p-2">
  <h1 className="text-xl text-center font-bold uppercase">
    {
      id
    }
    </h1>
</div>
}

export default Planet
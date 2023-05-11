import Image from "next/image"
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
    <Image
    src="/img/070222_higgs_illustration-1440x700.jpeg"
    alt="higgs"
    width={100}
    height={100}
    className="w-full"
    />
</div>
}

export default Planet
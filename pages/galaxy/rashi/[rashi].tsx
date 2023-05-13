import { useRouter } from "next/router"

const Constalation=()=>{
  const router=useRouter()
  const {rashi}=router.query
  return <div>
{rashi}
  </div>
}

export default Constalation
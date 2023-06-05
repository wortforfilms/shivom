import { useRouter } from "next/router"

const Chart=()=>{
const router=useRouter()
  const {language}=router.query
  return <div>
    {
      language==='brahmi' && <div className="w-full">
        <div>Swar</div>
        <div>Visarg</div>
        <div>Anuswar</div>
        <div>Vyanjan</div>
      </div>
    }
  </div>
}

export default Chart
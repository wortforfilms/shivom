import { BrahmiSound } from "@/data/brahmi"
import { useRouter } from "next/router"

const अक्ष =()=>{
  const router=useRouter()
   const {अक्षर}=router.query

   return <div>
<div className="h-12"></div>
    <h1 className="p-2 mb-4 mt-4 text-9xl m-auto w-56 text-center bg-white rounded-lg">
      {अक्षर}
      </h1>
<div className="flex flex-row justify-start bg-white gap-4">


      <h1 className="p-2 text-xl rotate-90   text-center bg-white rounded-lg">
      {अक्षर}
      </h1>
      <h1 className="p-2 text-xl rotate-180   text-center bg-white rounded-lg">
      {अक्षर}
      </h1>
      <h1 className="p-2 text-xl rotate-[270deg]  text-center bg-white rounded-lg">
      {अक्षर}

      </h1>
</div>
{
  BrahmiSound.filter(i=>i.symbol===अक्षर).map((l,index)=>{
    return <div key={index}>
      <div>{ l.description }</div>
      <div>{ l.sound }</div>
      <div className="text-5xl p-2">{ l.symbol }</div>

    </div>
  })}

      <div className="flex flex-row p-2 gap-2">
        {[
          {language:"1",shape:"2",sound:"3"},
          {language:"4",shape:"5",sound:"6"},
          {language:"7",shape:"8",sound:"9"},
          ].map((l,index)=>{
            return <div key={index}>
              <div>{ l.language }</div>
              <div>{ l.shape }</div>
              <div>{ l.sound }</div>
            </div>
          })}
      </div>
   </div>
}

export default अक्ष



// create a dictionary with book 
// akshar  shabda vakya rachnaa 
// pustak granth  

// 
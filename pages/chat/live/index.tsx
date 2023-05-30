const Live=()=>{
  return <div>
    <div className="h-12"></div>
       
    <h1 className="thin-head p-4">
      {"meÂ´µ´ in room"}


      </h1>
      <div className="flex flex-row gap-4">

      <div className="flex  flex-col gap-2 p-4">

      {['reds', 'greens', 'blues', 'whites', 'blacks'].map((str,index)=>{
        return <div key={index} className="uppercase p-2 bg-white rounded-lg shadow-lg">{str}</div>
      })}
      </div>
      <div className="w-full bg-white p-2 rounded-lg ">

      </div>
      </div>

    <div className="thin-head p-4">
      {"parties in room"}
      </div>
    <dialog  open={true} >
      Testing
    </dialog>
    </div>
}


export default Live
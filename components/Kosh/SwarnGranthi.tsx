// Some recent entries:
// द्विलाङ्गूल	adj.	dvilAGgUla	bipolar[Zool.]	
// विस्तृत	n.	vistRta	wideball[cricket]	
// आज्ञावलीपट्ट	m.	AjJAvalIpaTTa	menubar[computer]	
// औद्भिदीय	adj.	audbhidIya	botanical[relating to botany]	
// उद्भवद्विवरण	n.	udbhavadvivaraNa	pop-updescription[computer]
export const SwarnGranthi = (props: any) => {
  const { recharges, kosh, orders, setStep, setAmount } = props;
  return <div className='p-2 bg-white '>
    <h1 className='text-3xl p-2 mb-12 font-extrabold'>
      Activate your {"DixOm"}
    </h1>
    <div className='flex flex-row gap-4 m-auto'>

      {recharges.map((sr: any, index: number) => {
        return <div key={index} className='bg-gray-300 rounded-lg p-2   '
        onClick={()=>{
          setStep('shift')
          setAmount(sr.amount)
        }}
        >
          <div className='text-sm font-bold p-2 text-center'>Add {sr.count}</div>

          <div className='text-xs '>Pay {"INR"} {sr.amount}</div>
        </div>;
      })}
    </div>
    <div className="mt-4 mb-4 m-auto flex flex-row  ">
      {kosh.map((det: any, index: number) => {
        return <div key={index} className='p-4 flex flex-row gap-2 text-xl text-sky-800 rounded-lg  '>
          <div><Stats label={"TOTAL"} stat={det.total}/></div>
          <div>LAST USED: {det.last_use}</div>
          <div>LAST REFIL: {det.last_deposite}</div>
        </div>;
      })}
    </div>
    {/* <div className='p-2 font-bold mt-4'>Orders:</div> */}
    {/* <div className='p-1 flex flex-col gap-2'>
      {orders.map((his: any, index: number) => {
        return <div key={index} className='bg-gray-100 p-2 text-xs'>{index + 1}. {his.amount} lakshmi user for {his.use} of {his.paid_to}</div>;
      })}
    </div> */}
  </div>;
};


const Stats=(props:any)=>{
  const {label,stat}=props
  return  <div className="flex flex-col m-auto  p-2">
    <div className="text-xl font-bold p-2">
      
      {label}
      </div>
      <div>
        {stat} 
        </div>
    
    <Stats/></div>
}
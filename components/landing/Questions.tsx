const qu=[
"Why did my break up happen ?",
"How will my love life be this year ?",
"Do people like to be around me ?",
"Will I get a job abroad ?",
"Can I completely trust my business partner ?",
"Why am I facing debts and losses ?",
]

export const Questions=()=>{
  return <div className="p-2 mt-12 mb-12 flex flex-col gap-2">
    <div className="text-md font-bold py-4">Have a question? Let AstroAI assist you.</div>
    {
      qu.map((q,index)=>{
        return <div key={index} className="bg-white p-2 rounded-lg shadow-lg">{q}</div> 
      })
    }
  </div>
}
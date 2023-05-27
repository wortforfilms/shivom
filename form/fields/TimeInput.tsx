const TimeInput = (props: any) => {
    const { setState, state, fl, register } = props;
  return <div className='p-2 bg-white'>
    <label>{fl.label}</label><br />
    <input 
    className='bg-gray-300 p-2 w-full' 
    {...register(`${fl.name}`)} 
    type={"time"} 
    placeholder={fl.message} 
    defaultValue={fl.value?fl.value:state}
    onChange={(e:any)=>{
      setState(e.target.value);
    }}
    />
  </div>;
};

const TimeInput = (props: any) => {
  const { label, type, id, message } = props;
  return <div className='p-2 bg-white'>
    <label>{label}</label><br />
    <input className='bg-gray-300 p-2 w-full' id={id} type={"time"} placeholder={message} />
  </div>;
};

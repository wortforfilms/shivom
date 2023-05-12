
export const Eves = () => {
  return <>
    {['News','Festivals', 'Releases', 'Openings'].map((topic, index) => {
      return <div key={index} className="p-1 text-[8px]  sm:ml-0 sm:text-xs">{topic}</div>;
    })}
  </>;
};

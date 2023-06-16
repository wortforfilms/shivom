
export const List = (props: any) => {
  const { header, data } = props;

  return <div>
    <div className="p-2 mb-2 font-bold">{header}</div>
    <div className="p-1 flex flex-col gap-4">

      {data.map((d: any, index: number) => {
        return <li key={index}>{d}</li>;
      })}
    </div>
  </div>;

};

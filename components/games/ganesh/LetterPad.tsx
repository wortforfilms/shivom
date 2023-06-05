
export const LetterPad = (props: any) => {
  const { a } = props;
  return <div className="w-[80%] h-auto text-9xl scale-125 p-6 m-auto text-center bg-white shadow-lg">
    <hr className="relative h-1 top-0 w-full border-2 border-blue-500" />
    <hr className="relative h-1 top-6 w-full border-2 border-green-500" />
    <hr className="relative h-1 top-24 w-full border-2 border-red-500" />
    <hr className="relative h-1 top-32 w-full border-2 border-sky-500" />
    <div className="relative -mt-4 z-10">

      {a[2]}</div>
  </div>;
};



export const WordPad = (props: any) => {
  const { a,b } = props;
  return <div className="w-[80%] h-auto text-9xl scale-125 p-6 m-auto text-center bg-white shadow-lg">
    <hr className="relative h-1 top-0 w-full border-2 border-blue-500" />
    <hr className="relative h-1 top-6 w-full border-2 border-green-500" />
    <hr className="relative h-1 top-24 w-full border-2 border-red-500" />
    <hr className="relative h-1 top-32 w-full border-2 border-sky-500" />
    <div className="relative -mt-4 z-10">

      {a[2]}{b[2]}
      </div>
  </div>;
};
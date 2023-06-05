import { useState } from "react";

// pukAr
// mere desh ki dharateE earth Ee´´ 
// leaflet brahmi braahmi brAhmi 
// prakrut NLP
// prakruta 
// {""}-{""}
// Natural Language Processing 
// version on hand 
// on jelly {} find Indian Jelly Fishes
// gum
// clue glue 
// 

export const LetterMatter = (props: any) => {
  const { letter, k } = props;
  const [matter, setMatter] = useState("");
  const [matter1, setMatter1] = useState("");
  const [antimatter, setAntiMatter] = useState("-1");
  const [matter3, setMatter3] = useState("");
  const [matter4, setMatter4] = useState("");

  const languages = [
    "hindi",
    "bangla",
    "punjabi",
    "gujrati",
    "tamil",
    "telegu",
    "malyalam",
    "arabic",
    "kannada",
    "tibetian",
  ];

  return (
    <div className="text-center w-full mb-4  bg-white hover:bg-orange-500 hover:text-white cursor-pointer flex flex-col flex-wrap mx-auto p-2 rounded-lg shadow-xl">


      <div className="flex flex-row  flex-wrap gap-2">

        {languages.map((ln, index) => {
          return <div key={index} className="flex flex-col m-auto justify-between">
            <div className="uppercase text-xs font-bold mt-2 p-2">
              {ln}:
            </div>
            <div className="text-5xl p-2">{letter[index === 0 ? 0 : index + 2]}</div>
          </div>;
        }

        )}
      </div>




      {/* <div className="w-full  text-xs text-left flex flex-wrap p-2">
              <div dangerouslySetInnerHTML={{ __html: matter }} />
              <div dangerouslySetInnerHTML={{ __html: matter1 }} />
              <div dangerouslySetInnerHTML={{ __html: antimatter }} />
              <div dangerouslySetInnerHTML={{ __html: matter3 }} />
              <div dangerouslySetInnerHTML={{ __html: matter4 }} />
            </div> */}
    </div>
  );
};

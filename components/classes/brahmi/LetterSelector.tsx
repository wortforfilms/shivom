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

export const LetterSelector = (props: any) => {
  const { letter, k } = props;

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
    <div className="text-center w-full mb-4  bg-white   cursor-pointer flex flex-col flex-wrap mx-auto p-2 rounded-lg shadow-xl">

<div>Select your Country</div>

<div>Select your Currency</div>c
      <div className="flex flex-row  flex-wrap gap-2">

        {languages.map((ln, index) => {
          return <div key={index} className="flex flex-col m-auto hover:bg-orange-500 hover:text-white justify-between">
            <div className="uppercase text-xs font-bold mt-2 p-2">
              {ln}:
            </div>
            <div className="text-5xl p-2">{letter[index === 0 ? 0 : index + 2]}</div>
          </div>;
        }

        )}
      </div>
    </div>
  );
};

import { alphabetData } from "@/lib/akshar/hindi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { shArdA } from "../shArdA";
import { brahmi } from ".";

import { LetterSelector } from "./LetterSelector";


export const BrahmiSelector = () => {
  const [br, setBr] = useState<any>([]);

  const [languages,setLanguages]=useState<any>([])


  useEffect(() => {
    let mount = true;
    if (mount) {
      const brhhm = brahmi();
      // console.log("brahmi", brhhm);
      setBr(brhhm);
    }
    return () => {
      mount = false;
    };
  }, []);

  const router = useRouter();

  return (
    <div id="brahmi_classes" className="flex flex-col flex-wrap overflow-y-scroll min-h-[90vh] w-full mt-4 gap-2">
      {br &&
        br.slice(10, 11).map((letter: any, index: number) => {
          return (
            <div
              key={index}
              className="text-center w-full  mb-4 bg-white flex flex-row flex-wrap mx-auto p-2 rounded-lg shadow-xl"
              onClick={() => {
                // router.push(`/engine/letter/${letter[2]}`);
              }}
            >
              <div className="flex flex-col">
                {alphabetData && alphabetData[index]?.alphabet ? alphabetData[10].alphabet : "nf"}
                <div className="text-7xl p-2">{alphabetData && alphabetData[index]?.alphabet ? alphabetData[10].emoji : "nf"}</div>
                <div className="text-2xl p-2">{alphabetData && alphabetData[index]?.alphabet ? alphabetData[10].word : "nf"}</div>
              </div>
              <div className="flex flex-row flex-wrap p-2 text-center overflow-y-auto mx-auto">

                <div className="text-9xl font-bold text-gray-600">{letter[2]}</div>
              </div>



              <div className="thin-head">{shArdA[index + 3]}</div>
              <LetterSelector letter={letter} k={index} />
            </div>
          );
        })}
    </div>
  );
};

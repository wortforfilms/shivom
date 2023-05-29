import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export const brahmi = () => {
  
  const Brahmi = [
    "𑀅",
    "𑀆",
    "𑀇",
    "𑀈",
    "𑀉",
    "𑀊",
    "𑀋",
    "𑀌",
    "𑀍",
    "𑀎",
    "𑀏",
    "𑀐",
    "",
    "",
    "𑀑",
    "𑀒",
    "𑀓",
    "𑀔",
    "𑀕",
    "𑀖",
    "𑀗",
    "𑀘",
    "𑀙",
    "𑀚",
    "𑀛",
    "𑀜",
    "𑀝",
    "𑀞",
    "𑀟",
    "𑀠",
    "𑀡",
    "𑀢",
    "𑀣",
    "𑀤",
    "𑀥",
    "𑀦",
    "fi",
    "𑀧",
    "𑀨",
    "𑀩",
    "𑀪",
    "𑀫",
    "𑀬",
    "𑀭",
    "fi",
    "𑀮",
    "fi",
    "fi",
    "𑀯",
    "𑀰",
    "𑀱",
    "𑀲",
    "𑀳",
    "fi",
    "fi",
    "fi",
    "𑀸",
    "𑀹",
    "𑀺",
    "𑀻",
    "𑀼",
    "𑀽",
    "𑀾",
    "𑀿",
    "𑁀",
    "𑁁",
    "𑁂",
    "𑁃",
    "𑁄",
    "𑁅",
    "𑁆",
    "𑁆",
    "",
    "𑁋",
    "𑁌",
    "𑁍",
    "fi",
    "𑁒",
    "𑁓",
    "𑁔",
    "𑁕",
    "𑁖",
    "𑁗",
    "𑁘",
    "𑁙",
    "𑁚",
    "𑁛",
    "𑁜",
    "𑁝",
    "𑁞",
    "𑁟",
    "𑁠",
    "𑁡",
    "𑁢",
    "𑁣",
    "𑁤",
    "𑁥",
    "𑁦",
    "𑁧",
    "𑁨",
    "𑁩",
    "𑁪",
    "𑁫",
    "𑁬",
    "𑁭",
    "𑁮",
    "𑁯",
  ];

  const __Brahmi = [
    { _: "𑀅", __: ["a"] },
    { _: "𑀆", __: "aa,A" },
    { _: "𑀇", __: ["i"] },
    { _: "𑀈", __: ["ee", "E", "EE", "i", "I"] },

    { _: "𑀉", __: ["u"] },
    { _: "𑀊", __: ["U"] },
    { _: "𑀋", __: ["ru", "ri"] },
    { _: "𑀌", __: ["lru", "lri"] },

    { _: "𑀍", __: ["ea"] },
    { _: "𑀎", __: ["ae"] },

    { _: "𑀏", __: ["e"] },
    { _: "𑀐", __: ["ae", "ai"] },
    { _: "", __: ["", ""] },
    { _: "", __: ["", ""] },
    { _: "𑀑", __: ["o", "oo"] },
    { _: "𑀒", __: ["au", "ao"] },

    "𑀓",
    "𑀔",
    "𑀕",
    "𑀖",
    "𑀗",
    "𑀘",
    "𑀙",
    "𑀚",
    "𑀛",
    "𑀜",
    "𑀝",
    "𑀞",
    "𑀟",
    "𑀠",
    "𑀡",
    "𑀢",
    "𑀣",
    "𑀤",
    "𑀥",
    "𑀦",
    "fi",
    "𑀧",
    "𑀨",
    "𑀩",
    "𑀪",
    "𑀫",
    "𑀬",
    "𑀭",
    "fi",
    "𑀮",
    "fi",
    "fi",
    "𑀯",
    "𑀰",
    "𑀱",
    "𑀲",
    "𑀳",
    "fi",
    "fi",
    "fi",
    "𑀸",
    "𑀹",
    "𑀺",
    "𑀻",
    "𑀼",
    "𑀽",
    "𑀾",
    "𑀿",
    "𑁀",
    "𑁁",
    "𑁂",
    "𑁃",
    "𑁄",
    "𑁅",
    "𑁆",
    "𑁆",
    "",
    "𑁋",
    "𑁌",
    "𑁍",
    "fi",
    "𑁒",
    "𑁓",
    "𑁔",
    "𑁕",
    "𑁖",
    "𑁗",
    "𑁘",
    "𑁙",
    "𑁚",
    "𑁛",
    "𑁜",
    "𑁝",
    "𑁞",
    "𑁟",
    "𑁠",
    "𑁡",
    "𑁢",
    "𑁣",
    "𑁤",
    "𑁥",
    "𑁦",
    "𑁧",
    "𑁨",
    "𑁩",
    "𑁪",
    "𑁫",
    "𑁬",
    "𑁭",
    "𑁮",
    "𑁯",
  ];

  const __dic = Brahmi.map((letter, index) => {
    const brindex = index + 2309;
    const bnindex = index + 2437;
    const pnindex = index + 2565;
    const enindex = index + 2565;
    const gjindex = index + 2693;
    const tlindex = index + 2949;
    const tuindex = index + 3077;
    const mlindex = index + 3333;
    const arindex = index + 1569;
    const knindex = index + 3205;
    const tbindex = index + 3888;

    // return Brahmi[brindex]

    const hindi_for_brahmi = String.fromCharCode(brindex);
    const bangla_for_brahmi = String.fromCharCode(bnindex);
    const punjabi_for_brahmi = String.fromCharCode(pnindex);
    const english_for_brahmi = String.fromCharCode(enindex);
    const gujrati_for_brahmi = String.fromCharCode(gjindex);
    const tamil_for_brahmi = String.fromCharCode(tlindex);
    const telegu_for_brahmi = String.fromCharCode(tuindex);
    const malayaalam_for_brahmi = String.fromCharCode(mlindex);
    const arabic_for_brahmi = String.fromCharCode(arindex);
    const kannad_for_brahmi = String.fromCharCode(knindex);
    const tibbetian_for_brahmi = String.fromCharCode(tbindex);

    return [
      hindi_for_brahmi,
      hindi_for_brahmi,
      letter,
      bangla_for_brahmi,
      punjabi_for_brahmi,
      gujrati_for_brahmi,
      tamil_for_brahmi,
      telegu_for_brahmi,
      malayaalam_for_brahmi,
      arabic_for_brahmi,
      kannad_for_brahmi,
      tibbetian_for_brahmi,
    ];
  });

  return __dic;
};

export const Brahmi = () => {
  const [br, setBr] = useState<any>([]);

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

  const router=useRouter()

  return (
    <div id="vedic_classes" className="flex flex-row flex-wrap overflow-y-scroll w-full mt-4 gap-2">
      {br &&
        br.map((letter:any, index:number) => {
          return (
            <div
              key={index}
              className="text-center w-full sm:w-56 mb-4 bg-white flex flex-col flex-wrap mx-auto p-2 rounded-lg shadow-xl"
              onClick={()=>{
                router.push(`/engine/letter/${letter[2]}`)
              }}
            >
              {index + 1}
              <LetterMatter letter={letter} />
            </div>
          );
        })}
    </div>
  );
};

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

export const LetterMatter = (props:any) => {
  const { letter } = props;
  const [matter, setMatter] = useState("");
  const [matter1, setMatter1] = useState("");
  const [antimatter, setAntiMatter] = useState("-1");
  const [matter3, setMatter3] = useState("");
  const [matter4, setMatter4] = useState("");

  const languages=[
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
  ]

  return (
    <div className="text-center w-full mb-4 bg-white hover:bg-orange-500 hover:text-white cursor-pointer flex flex-col flex-wrap mx-auto p-2 rounded-lg shadow-xl">

      <div className="flex flex-row flex-wrap p-2 text-center overflow-y-auto mx-auto">

        <div className="text-7xl font-bold text-gray-600">{letter[2]}</div>
      </div>


        <div className="text-xs">
          {
            languages.map((ln,index)=>{
              return <div key={index} className="flex flex-row m-auto justify-between">
                <div className="uppercase mt-2 p-2">
                  {ln}:
                  </div>
                  <div className="text-3xl p-2">{letter[index===0?0:index+2]}</div>
                </div>
            }
        
            )
          }
        </div>
    

      <div className="w-full  text-xs text-left flex flex-wrap p-2">
        <div dangerouslySetInnerHTML={{ __html: matter }} />
        <div dangerouslySetInnerHTML={{ __html: matter1 }} />
        <div dangerouslySetInnerHTML={{ __html: antimatter }} />
        <div dangerouslySetInnerHTML={{ __html: matter3 }} />
        <div dangerouslySetInnerHTML={{ __html: matter4 }} />
      </div>
    </div>
  );
};
import { alphabetData } from "@/lib/akshar/hindi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { shArdA } from "../shArdA";
import { LetterMatter } from "./LetterMatter";
import { range } from "@/util/createRange";

export const Brahmiplate = [
  String.fromCharCode(56319),
  String.fromCharCode(56320),
  "𐨏",
  "𑀁",
 ' ँ',
String.fromCodePoint(56324),
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
// 𑀁
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

export const BrahmiAlg=range(56320,56431).map(i=>String.fromCharCode(i))

export const brahmi = () => {




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
    "",
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

  const __dic = Brahmiplate.map((letter, index) => {
    const brindex = index + 2304-1;
    const bnindex = index + 2432-1;
    const pnindex = index + 2560-1;
    const enindex = index + 2560-1;
    const gjindex = index + 2688-1;
    const tlindex = index + 2944-1;
    const tuindex = index + 3072-1;
    const mlindex = index + 3328-1;
    const arindex = index + 1564-1;
    const knindex = index + 3200-1;
    const tbindex = index + 3883-1;

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


export const brahmiSwar = () => {

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
    "",
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

  return __dic.slice(0,12);
};

export const brahmiVyajana = () => {

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
    "",
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

  return __dic.slice(13,53);
};

export const brahmiAnka = () => {

  




  const __dic = Brahmiplate.map((letter, index) => {
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

  return __dic.slice(__dic.length-10,__dic.length);
};

export const brahmiMAtrA = () => {

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
    "",
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

  return __dic.slice(54,70);
};

const shift=2303

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

  const router = useRouter()

  return (
    <div id="brahmi_classes" className="flex flex-col md:flex-row flex-wrap overflow-y-scroll min-h-[90vh] w-full  mt-4 gap-2">
      {br &&
        br.map((letter: any, index: number) => {
          return (
            <div
              key={index}
              className="text-center w-full md:w-[48%]  mb-4 bg-white flex flex-row flex-wrap mx-auto p-2 rounded-lg shadow-xl"
              onClick={() => {
                router.push(`/engine/letter/${letter[2]}`)
              }}
            >
              <div className="flex flex-col">
                {alphabetData && alphabetData[index]?.alphabet ? alphabetData[index].alphabet : "nf"}
                <div className="text-7xl p-2">{alphabetData && alphabetData[index]?.alphabet ? alphabetData[index].emoji : "nf"}</div>
                <div className="text-2xl p-2">{alphabetData && alphabetData[index]?.alphabet ? alphabetData[index].word : "nf"}</div>
              </div>
              <div className="flex flex-col flex-wrap p-2 text-center overflow-y-auto mx-auto">

                <div className="text-9xl font-bold text-gray-600">{letter[2]}</div>
                <div className="text-xl font-thin text-gray-600">{letter[2]?.charCodeAt(1)}</div>
              </div>



              <div className="font-thin text-3xl m-auto">{alphabetData && alphabetData[index]?.word ? alphabetData[index].word.split('').map((i:any,index:number)=>`${Brahmiplate[i.charCodeAt(0)-shift]!==undefined?Brahmiplate[i.charCodeAt(0)-shift]:i.charCodeAt(0)<shift?i:i?.charCodeAt(0)}`) : "nf"}</div>
              <LetterMatter letter={letter} k={index} />
            </div>
          );
        })}
    </div>
  );
};

export const Chart=(props:any)=>{

  const {x,y,letters}=props

  return <div>
    {/* add image {} */}
    {
      letters.map((lettigers:any,index:number)=>{
        return <div key={index}>

        </div>
      })
    }
  </div>

}


// urgent item for sale
// service :{security::data::deep_insetting}
// computer_onn_board
// [view][camera][back][360]
// [x][y][z][क ][आँ ख़ ख ]
// [एँग्लिश english इंग्लिश ]
// [leash lease ]
//  [ओंन्न्ल्य फ़ोर lease ]
// 
export const BrahmiItems = () => {
  const [br, setBr] = useState<any>([]);

  // chart book posters mantras classes 
  // free_classes premium_classes
  // 

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

  const router = useRouter()

  return (
    <div id="brahmi_classes" className="flex flex-col flex-wrap overflow-y-scroll min-h-[90vh] w-full mt-4 gap-2">
      {br &&
        br.map((letter: any, index: number) => {
          return (
            <div
              key={index}
              className="text-center w-full  mb-4 bg-white flex flex-row flex-wrap mx-auto p-2 rounded-lg shadow-xl"
              onClick={() => {
                router.push(`/engine/letter/${letter[2]}`)
              }}
            >
              <div className="flex flex-col">
                {alphabetData && alphabetData[index]?.alphabet ? alphabetData[index].alphabet : "nf"}
                <div className="text-7xl p-2">{alphabetData && alphabetData[index]?.alphabet ? alphabetData[index].emoji : "nf"}</div>
                <div className="text-2xl p-2">{alphabetData && alphabetData[index]?.alphabet ? alphabetData[index].word : "nf"}</div>
              </div>
              <div className="flex flex-row flex-wrap p-2 text-center overflow-y-auto mx-auto">

                <div className="text-9xl font-bold text-gray-600">{letter[2]}</div>
              </div>



              <div className="thin-head">{shArdA[index + 3]}</div>
              <LetterMatter letter={letter} k={index} />
            </div>
          );
        })}
    </div>
  );
};



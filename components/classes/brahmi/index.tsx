import { alphabetData } from "@/lib/akshar/hindi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { shArdA } from "../shArdA";
import { LetterMatter } from "./LetterMatter";
import { range } from "@/util/createRange";
import ZoomableGraph from "@/canvas/graph";
import BookDesigner from "@/canvas/book";
import { BrahmiEducation } from "@/components/classes/brahmi/BrahmiEducation";
import { Brahmiplate } from "./Brahmiplate";


export const BrahmiAlg=range(56320,56431).map(i=>String.fromCharCode(i))

// surrogate key¿?
// iamfree
// from¿
// form nirAkAra
// silicon
// 

const __dic = Brahmiplate.map((letter, index) => {
  const brindex = index + 2304-1;
  const bnindex = index + 2432-1;
  const pnindex = index + 2560-1;
  const enindex = index + 2560-1;
  const gjindex = index + 2688-1;
  const alindex = index + shArdA[index];
  const  odindex= index + 2816-1
  const tlindex = index + 2944-1;
  const tuindex = index + 3072-1;
  const mlindex = index + 3328-1;
  const arindex = index + 1674-1; //1776-1673
  const knindex = index + 3200-1;
  const tbindex = index + 3770-1; // 3872 ¿102
  const buindex = index + 4058-1;

  // sets plates change plate 
  // range [2304,2432,2560,2688,2816,2944,3072]
  // return Brahmi[brindex]

  const hindi_for_brahmi = String.fromCharCode(brindex);
  const bangla_for_brahmi = String.fromCharCode(bnindex);
  const punjabi_for_brahmi = String.fromCharCode(pnindex);
  const english_for_brahmi = String.fromCharCode(enindex);
  const gujrati_for_brahmi = String.fromCharCode(gjindex);
  const ali_for_brahmi = shArdA[index];
  const oriya_for_brahmi = String.fromCharCode(odindex);
  const tamil_for_brahmi = String.fromCharCode(tlindex);
  const telegu_for_brahmi = String.fromCharCode(tuindex);
  const malayaalam_for_brahmi = String.fromCharCode(mlindex);
  const arabic_for_brahmi = String.fromCharCode(arindex);
  const kannad_for_brahmi = String.fromCharCode(knindex);
  const tibbetian_for_brahmi = String.fromCharCode(tbindex);
  const burmese_for_brahmi = String.fromCharCode(buindex);

  return [
    hindi_for_brahmi,
    hindi_for_brahmi,
    letter,
    oriya_for_brahmi,
    bangla_for_brahmi,
    punjabi_for_brahmi,
    gujrati_for_brahmi,
    ali_for_brahmi,
    tamil_for_brahmi,
    telegu_for_brahmi,
    malayaalam_for_brahmi,
    arabic_for_brahmi,
    kannad_for_brahmi,
    tibbetian_for_brahmi,
    burmese_for_brahmi
  ];
});
export const brahmi = () => {
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
  return __dic.slice(13,53);
};

export const brahmiAnka = () => {
  return __dic.slice(__dic.length-10,__dic.length);
};

export const brahmiMAtrA = () => {

  return __dic.slice(54,70);
};

export const brahmi_shift=2303

export const Brahmi = () => {
  const [br, setBr] = useState<any>([]);
  const [section, setSection] = useState<any>([]);

  useEffect(() => {
    let mount = true;
    if (mount) {
      const brhhm = brahmi();
      setBr(brhhm);
    }
    return () => {
      mount = false;
    };
  }, []);

  const router = useRouter()

  return <BrahmiEducation/>

};

// unrig veda 
// purAN shAstra
// {}-{}-{}-{"data documentation"}
// 
const nodes = [
  { id: 'A', x: 100, y: 100 },
  { id: 'B', x: 200, y: 200 },
  { id: 'C', x: 300, y: 300 },
  { id: 'D', x: 600, y: 300 },
  { id: 'E', x: 900, y: 800 },
  { id: 'F', x: 100, y: 600 },
];

const links = [
  { source: 'A', target: 'B' },
  { source: 'B', target: 'C' }
];

export const Cover=(props:any)=>{
  return <div className="w-full h-full min-h-[90vh]">
    <div>
    "heading","accessibility"
    <input 
    type="search"
    className="w-full p-4 rounded-lg bg-white shadow-lg"
    onChange={(e:any)=>{
      const unicode=e.target.value
      const unhide_hind="jumbu_shambhu"     
      alert(`${e.target.value}`.charCodeAt(1))
    }}/>
    </div>
    <div className="w-full flex flex-col mt-12 flex-wrap h-full mb-48">
<BookDesigner/>
    <ZoomableGraph width={800} height={600} nodes={nodes} links={links}  />
      {[

// parent
[9788,9788,4],
[9789,9790,4],
// phase asv=cedent descendent
[9790,9799,10],
[9800,9805,10],
[9806,9811,10],

[9812,9817,10],
[9818,9822,10],
[9823,9823,10],
[9824,9829,10],
[9830,9839,10],
[9840,9849,10],


// where cosmos teaches you
// prakruti se keekhain
// brahmi se seekhain
// prakrut
// prakrut se brahmi
// ¿brahmini antar
// indus valley ke suljhe rahasya


].map((comb,index)=>{
return  <div className={`flex ${index!==1||3?"flex-row-reverse":"flex-row"} h-100 flex-wrap mb-4 gap-2`} key={index}>

{
  range(comb[0],comb[1]).map((nn,n)=>{
    return <div key={n} className={`w-100 text-center text-5xl h-12 m-auto p-4 bg-white`}>{String.fromCharCode(nn)}</div>
  })
}
{['bhanu','chandraghatA','phase','male','female','white','black'][index]}
</div>
})}
    </div>
  </div>
}

export const Intro=(props:any)=>{
  const {br}=props
  const router=useRouter()
return  <div id="brahmi_classes" className="flex flex-col md:flex-row flex-wrap overflow-y-scroll min-h-[90vh] w-full  mt-4 gap-2">
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
          <div className="text-9xl font-bold text-gray-600">{letter[2]?letter[2]:"nf"}</div>
          <div className="text-[6px] font-thin text-gray-600">{letter[2]?.charCodeAt(1)?letter[2]?.charCodeAt(1):'nf'}</div>
        </div>
        <div className="font-thin text-3xl m-auto">{alphabetData && alphabetData[index]?.word ? alphabetData[index].word.split('').map((i:any,index:number)=>`${Brahmiplate[i.charCodeAt(0)-brahmi_shift]!==undefined?Brahmiplate[i.charCodeAt(0)-brahmi_shift]:i.charCodeAt(0)<brahmi_shift?i:i?.charCodeAt(0)}`) : "nf"}</div>
        <LetterMatter letter={letter} k={index} />
      </div>
    );
  })}
</div>
}


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

// valueof π over 360
// calculator
// cell
// train
// forward rewind {up}{dowmnnm}
// dial
// square
// 
// urgent item for sale
// service :{security::data::deep_insetting}
// computer_onn_board
// [view][camera][back][360]
// [x][y][z][क ][आँ ख़ ख ]
// [एँग्लिश english इंग्लिश ]
// [leash lease ]
//  [ओंन्न्ल्य फ़ोर lease ]
// i here by declare that source of this document is not owned by me but a blessing from our ancesstors who are like god to us. 
// i guaranty just life and death : shiva
// i create and inspire to create : brAh ma:mini
// i am your reflection. your actions are boomrangs. : kri yA:kshana¿shNa
// x.x.x.yogi.yug;:;nain:jain:--> broken mirror 
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


// books -> {:::}
// 


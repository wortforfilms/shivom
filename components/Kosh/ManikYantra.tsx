import Image from "next/image";

export const ManikYantra = () => {
  return <div className="w-80 h-auto  bg-white p-2">
    <Image


      src={"/img/om-71gQJPwz8gL._UL1500_2000x.png"}
      alt="coins"
      width={100}
      height={100}
      className='m-auto w-full h-auto' />
    <input className="w-full p-2 shadow-lg rounded-lg mb-12  ring-2 ring-gray-300" type="text" />
    {/* <div>दिव</div>  */}

    <div>
      Yantra:"" Mantra:""
    </div>

    <div>EV ´√ ´◊💐🌈🏳️‍🌈🎨 ev</div>
    <div>एवं वायु छात्रा </div>
    {[
      { label: "लक्ष्मी", icon: "", quantity: 21, value: "" },
      { label: "नवग्रह", icon: "", quantity: 21, value: "" },
      { label: "सप्तरिशि", icon: "", quantity: 21, value: "" },
      { label: "नवदुर्रगा", icon: "", quantity: 21, value: "" },
    ].map((el, index) => {
      return <div key={index}>{el.label}</div>;
    })}
    {/* // gandh RRR Aar   */}
    {/* dhwani NM D  dhawani Nadi */}
    {/* { / yantra mantra} */}
    <div>Draw on any screen : Telecast on any Screen</div>
    <div>channels groups rooms </div>

    <textarea
      rows={5}
      id="product"
      placeholder="I am here. you have found traces of our signals¿? sets {oc}{कि क इ ई ऐ ए के कई }" />
    {[{ data: "", freinds: "", chats: "", kosh: "" }].map((u, index) => {
      return <div key={index}>{u.data}{u.chats}{u.freinds}{u.kosh}</div>;
    })}
    {/* <दिव्या/> */}
  </div>;
};

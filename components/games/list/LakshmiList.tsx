import { gold } from "@/sty";
import { nFormatter } from "@/util/numberFormatter/nFormatter";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const LakshmiList = (props: any) => {
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  const { category, setGame } = props;
  const router = useRouter();
  return <div className="flex flex-row invert  flex-wrap justify-start gap-4 p-4">
    {category.map((ver: any, index: number) => {
      return <div key={index} className={`rounded-lg text-center m-auto  shadow-lg w-56 h-100 ${gold} p-2`}>
        <div className="text-7xl p-2 invert">{ver.icon}</div>
        <div>{ver.label} </div>
        <div className="text-xs font-bold p-1">{ver.duration}</div>
        <div>
          <div className="text-xs text-yellow-700 p-2">Lastest winner: </div>
          <h1>{nFormatter(faker.datatype.number({ min: 99, max: 9999999 }))}</h1></div>

        <div className="text-xs text-yellow-700 p-2">Current Box: </div>
        {nFormatter(faker.datatype.number({ min: 99, max: 999999 }))}
        <div className="p-2 bg-gray-700 text-white rounded-lg mt-8 mb-4 shadow-lg hover:bg-red-500 shadow-green-500"
          onClick={() => {
            if(earth?.kosh?.yantra!==undefined && earth?.kosh?.yantra>0){
console.log("first")
setGame(ver.label);
router.push(`/kreedA/game/${ver.label}`);
} else {
  console.log("second")
  router.push(`/kosh`);
      
              // alert(`Tracing Yantra", ${earth?.kosh?.yantra}`)

            }
          }}
        >PLAY NOW</div>
      </div>;
    })}
  </div>;
};

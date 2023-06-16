import { Box } from "@/elements/box";
import { heading } from "@/sty";
import { vedic } from "./vedic";
import { List } from "@/elements/List";



export const VedicCoarses = () => {



  return <div className="p-1 sm:p-6 mt-6 ">
    <div className={heading}>{vedic.Introduction}</div>
    <div className="p-2 flex flex-col gap-4">

      {vedic.matter.map((c: any, index: number) => {
        return <div key={index} className="snakeCase bg-white rounded-lg shadow-lg text-sm  p-1">
          {/* {c.q} */}
          <Box>

            <List header={c.q} data={c.d} />
          </Box>
        </div>;
      })}
    </div>
  </div>;

};

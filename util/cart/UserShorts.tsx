import { useState } from "react";

import { ItemCard } from "./ItemCard";
import { onlyUnique } from "../filter";

const UserShorts = (props: any) => {
  const { items } = props;
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <div className="flex flex-row  overflow-x-scroll">
        {items &&
          items.map((it: any, index: number) => {
            const item = JSON.parse(it.data);
            const keywords = JSON.stringify(it.data)
              .split(" ")
              .filter(onlyUnique);

            console.log(it, "item======>");
            return (
              <div
                key={index}
                className={"w-full p-4 mx-2 mb-12 bg-white h-full  shadow-lg"}
              >
                <ItemCard
                  it={it}
                  item={item}
                  setUpdate={setUpdate}
                  update={update} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

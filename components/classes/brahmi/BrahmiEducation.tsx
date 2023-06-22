import { brahmi_education } from "../../../data/brahmi_education";
import { BookBox } from "../../../pages/services/[service]";


export const BrahmiEducation = () => {
  return <>
    {brahmi_education.map((level, index) => {
      return <div key={index} className="p-2 mt-4  mb-8 rounded-lg shadow-lg  bg-white">
        <h2 className="uppercase ">
          {level.level}
        </h2>
        <div className="p-1 mt-2 mb-2">{level.coarse.index.Introduction}</div>
        {level.coarse && level.coarse.index && level.coarse.index.matter && level.coarse.index.matter.map((c: any, index: number) => {
          return <div key={index} className="snakeCase text-sm mt-4 mb-4 p-2 bg-gray-200 rounded-lg shadow-lg ring-2 ring-white border-4 border-yellow-300">
            <BookBox header={c.q} data={c.d} />
          </div>;
        })}
      </div>;
    })}</>;
};

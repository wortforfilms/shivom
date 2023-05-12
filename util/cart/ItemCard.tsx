import { useState } from "react";



import Image from "next/image";




export const ItemCard = (props: any) => {
  const { it, item } = props;

  const [update, setUpdate] = useState(false);

  return (
    <div>
      {it.id}
      <br />
      {item.title}
      <br />
      <div className="mx-auto shadow-lg  snap-center">
        {it && it.images && it.images[0] && (
          <Image
            src={it.images[0]}
            width={110}
            height={150}
            
            alt="pr_image"
            className="mx-auto" />
        )}

        <div className="mx-auto p-2  w-80">
          {/* <SocialBar /> */}
        </div>
      </div>
      {item.price}
      <br />
      {/* keywords:{keywords[0]} */}
      <br />
      inventory order delivery__ delivery
      <div
        // className={Button}
        onClick={() => {
          setUpdate(true);
        }}
      >
        Edit
      </div>
      {/* {update && (
        <Form
          value={item}
          form={shorts_form}
          yup={yup_shorts_form}
          name="salesshorts"
          SetUpdate={setUpdate} />
      )} */}
    </div>
  );
};

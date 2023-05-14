import { useState } from "react";



import Image from "next/image";

// di_-º-_it
// imarti
// in ame of
// . aim
// off 
// arjun uttarA abhi man u ¨Ü 
// green heat 
// red heat
// blue heat
// cmyk 
// brah nalA
//Kank s Kali
// in Camera 
// 10 Trillion Dollar {}
// 10 Trillion Yanta $
// repaircharges 
// test with one 
// return upi 
// 5001
// {}-{.}
// 5001
// test 1
// genrate upi intent for giving 
// social blue blood
// {}{padvAs}{agyAtawAsa}{uttarA}{}
// {Dharma,A's}{Son}{Yudhsthir}

// Space Technologies 
//  Yantra
// Mantra
// Tantra

//  hardware
// software 
//  computer
// north pole 
// angular
// history
// twisted
//  saptrishi ::: ≥≤
// 

// Advanced Aerial Vehicle 
// Security 
// Social Welfare
// list directors
// players
// boards
// Shukra Brahaspati
// Fri Thirst 
// 263 cr 500001 5 year
// Fri Thurs 
// Sun
// dhrutrashtra
// dhrutrAshtra
//  helper in pop  {::}
// smarter 
// blue 
// smArrter
// stArrt
// di_-|º|-_it
// gAndhAra
// silent attack 
// :: {}-{cure}-{care}
// {}-{}-{reflection}
// screen buckets with reneues
//  increase pump 
// ducumennt {🧿🧿🧿}
// document {}
// input definetions in for experiment
// value {100} {¡ºº}{locker type direction ¿? 
// ¶•§}
//  ui ux 
// anti hypno 
// 22@@™™€€
// ::##……ÚÚ££$$››44
// owner: 
// 2500 
// {}::{}
// scan to play
// Trillion Dollar Monk
// {}-{}-{}
// ()-()-()



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

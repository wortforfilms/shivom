import React from "react";
// import { jsPDF,HTMLOptionImage } from "jspdf";
// import { toPng,toCanvas } from "html-to-image";
type props = {

  html?: React.MutableRefObject<HTMLDivElement>;

};

const GeneratePdf: React.FC<props> = ({ html }) => {

  // const generatePdf = () => {
  //     const doc = new jsPDF();

  //     let split=doc.splitTextToSize(document.getElementById("text").innerText,200);
  //     // let image = document.getElementById("image").getAttribute('src');
  //     // doc.text(document.querySelector(".content > h1").innerHTML,75,5);
  //     // doc.addImage(image,70,7,60,60);
  //     doc.text(split,5,175);
  //     doc.output("dataurlnewwindow");  
  // };



  // const generateImage=async ()=>{
  //   const image = await toPng(html.current,{quality:0.95});
  //   const doc = new jsPDF(

  //   );

  //     doc.addImage(image,'JPEG',5,20,100,400);
  //     doc.save();
  // }

  const frm=()=>{
    const  pdf = fetch('/api/file/pdf_create',{
      method:"POST"
    })

    console.log(pdf)
    return pdf
  }
  return (

    <div className="button-container   flex flex-row gap-4">
<div className="p-2 bg-indigo-600 text-white">

        <button 
        // onClick={generateImage}
        >
        Get PDF using image
      </button>
</div>
      <button 
      // onClick={generatePdf}
      >
        Get PDF as text
      </button>
    </div>

  );
};

export default GeneratePdf;
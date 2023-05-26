
import Link from "next/link";
import { useRouter } from "next/router";



const address = [
  {
    street_address: "A-164, Sreet No. 4, Kabeer Nagar, Shahdara",
    state: "Delhi",
    country: "INDIA",
    zip_code: "1100094",
    contact: "+91-9811720270",
    email: "support@thelineproducer.info",
    web: "shivom.thelineproducer.info",
    social: ["facebook", "instagram", "youtube", "github", "discord", "twitter"]


  }
]
const ContactUs = () => {
  const router = useRouter()

  return (
    <div
      // animate={{ opacity:[0,1],y: [0, 10, 0] }} 
      className="p-2 mt-2 max-w-2xl mx-auto text-gray-700 bg-slate-200">

      <div className="p-2 bg-white text-gray-700 py-4">
        <p className="text-center font-light mb-4">
          For any query Contact Us <br />
          <Link href={`https://www.thelineproducer.info/auth/login`}><span
            className="text-2xl text-center hover:bg-yellow-200 mb-4">shivom.thelineproducer.info</span></Link>
        </p>

        <div className=" shadow-lg rounded-lg text-xs w-full bg-white mb-2">

          <input type="email" placeholder="enter your email address" className="w-full bg-white ring-2 ring-gray-300 p-2" />
        </div>
        <div className=" shadow-lg rounded-lg text-xs w-full bg-white mb-2">

          <input type="email" placeholder="enter subject" className="w-full bg-white ring-2 ring-gray-300 text-gray-600 p-2" />
        </div>
        <div className=" shadow-lg rounded-lg text-xs w-full bg-white mb-2">

          <textarea rows={6} placeholder="Enter matter" className="w-full bg-white ring-2 ring-gray-300 p-2" />
        </div>
      </div>
      <div className="text-xs text-center m-2 p-2 bg-gray-600 cursor-pointer text-white w-100 hover:bg-gray-800 hover:text-white">
        Contact Us
      </div>
      <div className="flex flex-col flex-wrap gap-2 bg-white text-gray-700 p-2">
        <div className="text-2xl">Business Address</div>
        <div className="flex flex-row flex-wrap gap-2">

          <div className="text-xs text-center">{address[0].street_address}</div>
          <div className="text-xs text-center">{address[0].state}</div>
          <div className="text-xs text-center">{address[0].country}</div>
          <div className="text-xs text-center">{address[0].zip_code}</div>
        </div>

      </div>
      <div className="flex flex-col flex-wrap gap-2 bg-white text-gray-700 p-2">
        <div className="text-2xl">Business Phone</div>
        <div className="text-xs text-left">{address[0].contact}</div>

      </div>
      <div className="flex flex-col flex-wrap gap-2 bg-white text-gray-700 p-2">
        <div className="text-2xl">Support Email</div>
        <div className="text-xs text-left">{address[0].email}</div>
      </div>
      <div className="flex flex-col flex-wrap gap-2 bg-white text-gray-700 p-2">
        <div className="text-2xl">Support Link</div>
        <div className="text-xs text-left">websupport:{address[0].web}</div>
      </div>
      <div className="text-2xl py-4">Support Channels</div>
      <div className="flex flex-row flex-wrap gap-6 mb-24">

        {
          address[0].social.map((i, index) => {
            return <div key={index}>
              <div className="text-lg p-2 bg-yellow-300 text-center text-blue hover:bg-gray-800 hover:text-white">{i.toLowerCase()}</div>
            </div>
          })
        }

      </div>
    </div>
  );
};

export default ContactUs;

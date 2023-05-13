
import { sendPasswordResetLink } from "@/lib/auth/action/sendPasswordResetLink";


export default async function resetlink(req: any, res: any) {

  if (req.method === "POST") {
  try {
    const body = req.body;
    console.log(body, "-----=>reached body  for reset");
    const { email } = body;

    if (body) {
      
        const u = await sendPasswordResetLink(body).then(data=>{

        });

       return  res.status(200).json({ done: true,  message: "reset link successfuly sent" })
          
          // .send();
      
    }
  } catch (error: any) {

    console.log(
      "issue at reset", error
    )
    return res.status(500).json().send(error.message);
  }
} else {
  console.log("ui -> mfa->reset")
}
}

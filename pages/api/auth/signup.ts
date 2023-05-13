import { toast } from "react-toastify";
import { findUser, findUserExistance } from "@/lib/auth/action/findUser";
import { createUser } from "@/lib/auth/action/createUser";

export default async function signup(req: any, res: any) {
  try {
    const body = req.body;
    // console.log(body, "-----=> body");
    const { username, phone, password } = body;

    if (username) {
      const exist = await findUserExistance(username,phone).then((res) => {
        return res;
      });
      // console.log(exist, "----------> user found");
      if (exist && exist?.message === "username not avialable") {
        res
          .status(401)
          .send({ done: true, user: null, message: "user exists with id" });
      } else {
        console.log("sign up user---=>");
        const u = await createUser(username, phone, password);
        
        res
          .status(200)
          .send({ done: true, user: u, message: "successfuly signed" });
      }
    }
  } catch (error: any) {
    // console.error(error);
    res.status(500).send(error.message);
  }
}

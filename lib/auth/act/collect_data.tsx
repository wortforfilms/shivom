import { login } from "@/store/auth/action";
import { getTokenCookie } from "@/lib/auth/auth-cookies";

// import { add_user_to_device } from "./add_user_to_device";
import { errorT, notify } from "@/components/toast";
import { add_user_to_device } from "./add_user_to_device";

export const collect_data = async (data: any, setLoading: any, dispatch: any, earth: any) => {
  setLoading(true);
  const body = {
    username: data.username,
    password: data.password,
  };
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 401) {
      console.log("====>", res);
      const message = "Check your password email combination. Try show password by clicking on it. or Try registering with id. Wrong Username/password. 🎎";
      errorT(message);
      setLoading(false);
    }
    if (res.status === 200) {
      const _user = await res.json();
      notify("Successfully logged in 🚀");
      const data = {
        user: _user?.user?.user[0],
        sessionToken: getTokenCookie({})
      };
      add_user_to_device(earth, _user?.user?.user[0].id);
      dispatch(login(data));
      setLoading(false);
    }
  } catch (error: any) {
    errorT(`Check your password email combination. Try unhiding password to check. or Try registering with id. ${error.message}`);
    setLoading(false);
  }
};


import { RightMenu } from './RightMenu';
import { LeftMenu } from './LeftMenu';
import { MiddleBar } from './MiddleBar';

import { useEffect, useState } from 'react';
import { LeftPanel } from '@/components/panel/left_panel';
import { RightPanel } from '@/components/panel/right_panel';
import { Cart } from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenCookie } from '@/lib/auth/auth-cookies';
import { login } from '@/store/auth/action';
import { errorT } from '@/components/toast';
import { t_b, top_bar } from '@/sty';
import { PostStatsPop } from '@/elements/pop/stat';
import { useRouter } from 'next/router';




// @ refresh user session
export const refresh_user_session = async (token: any, dispatch: any, earth: any) => {
  const f = await fetch("/api/auth/get")
    .then((res) => res.json())
    .then((_data) => {
      if (_data.user) {
        const data = {
          user: _data?.user?.user[0],
          sessionToken: token,
        };
        dispatch(login(data));

      }
    }).catch(error=>console.log(error,'--->device  get/'))
  return f;
};



export const TopBar = (props:any) => {
  const {initialReduxState}=props
const earth:typeof initialReduxState=useSelector(state=>state)
  const [left,setLeft]=useState(false)
  const [right,setRight]=useState(false)
const dispatch=useDispatch()
const router=useRouter()

    // @ refresh token
    useEffect(() => {
      let mount = true;
  
      const token = getTokenCookie({});
      console.log(token, "---> in cookie");
      if (mount && token) {
        refresh_user_session(token, dispatch, earth);
      }
  
      return () => {
        mount = false;
      };
    }, []);

    // dont change dependencies

      // @ check auth
  useEffect(() => {
    let mount = true;
    if (router.asPath.includes("user")) {
      if (!earth?.auth?.authenticated) {
        router.push("/auth/login");
      } else {
        return;
      }
    }

    if (router.asPath.includes("create")) {
      if (!earth?.auth?.authenticated) {
        router.push("/auth/login");
      } else {
        return;
      }
    }

    return () => {
      mount = false;
    };
  }, [router, earth?.auth]);


  return <nav className={`fixed  z-50 ${top_bar} w-full h-12 p-2 shadow-lg flex flex-row justify-between`}>
    {left && <LeftPanel/>}
    {right && <RightPanel/>}
   <LeftMenu/>
  {earth?.auth?.authenticated ?<Cart earth={earth}/>: <MiddleBar/>

}
   <RightMenu/>
   {earth?.panel?.post_stat_panel && <PostStatsPop earth={earth}/>}
  </nav>;
};




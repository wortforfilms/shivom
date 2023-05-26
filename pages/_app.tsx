import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { TopBar } from '@/components/layout/header/TopBar'
import { Footer } from '@/components/layout/Footer'
import { Copyright } from '@/components/landing/Copyright'
import ErrorBoundary from '@/util/boundary'
import { Provider, useDispatch } from 'react-redux'
import { wrapper } from '@/store/store'
import { Suspense, useEffect, useRef, useState } from 'react'
import { HeaderButtons } from '../components/layout/HeaderButtons'
import { motion } from 'framer-motion'
import { Router, useRouter } from 'next/router'
import { update_device, update_device_size } from '@/store/device/action'
import { supabase } from '@/lib/Store'
import shortid from 'shortid'
import { create_device } from '@/q/c/devic'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import 'regenerator-runtime/runtime'

function App({ Component, ...rest }: AppProps) {
  const {store,props}=wrapper.useWrappedStore(rest)
  const [loading, setLoading] = useState(false);
  const router=useRouter()

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  const appRef=useRef<any>()
  // const size = useDimensions(appRef)

  const  dispatch=useDispatch()

  useEffect(()=>{
    let mount=true
    const update_size=(size:any)=>{
      dispatch(update_device_size(size))
    }
      if(mount){
        update_size({width:appRef.current.offsetWidth,height:appRef.current.offsetHeight})
      }
      return ()=>{mount=false}
    },[dispatch])
  
    useEffect(() => {
      let mount=true
      if(mount){
        const tantra=localStorage.getItem('युक्ति')
        if(tantra){
          const update_device=async()=>{
            const {data,error}=await supabase.from('युक्ति').update([{
              status:"Online",
            }]).eq('id',tantra)
          }
        } else {
          const i_c=shortid.generate()
          const trans_device=async()=>{
            const {data,error}=await supabase.from('युक्ति').insert([{
              ice: i_c,
              ice_status:"Initiated",
              ice_eci:[{
                base:"mac",
                os:"",
                arch:"",
                location:[],
                orientation:[],
                ip:{}
              }]

            }]) 
            return {data,error}
          }

          trans_device().then((res)=>{
            // dispatch(create_device(data))
            if(res && res.data){
              localStorage.setItem('युक्ति',res.data.ice)
              dispatch(update_device(res.data))
            }

            console.log(res,'device data')
          })
        }
      }
    
      return () => {
        mount=false
      }
    }, [])
    

  return <>
    <div ref={appRef} className='text-gray-700'>

  <ErrorBoundary>
<Provider store={store}>
<Suspense fallback={<div className='bg-gray-300 m-auto'>Loading...</div>}>
<ToastContainer
          position="top-right"
          newestOnTop
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
<TopBar/>


<Component {...props.pageProps} />


<motion.div 
      whileHover={{scale:.95}}
      onClick={()=>{
        router.push('/supportus')
      }}
      drag className='fixed bottom-16 text-3xl -mb-12 right-2 -ml-12 ring-2 ring-pink-800 shadow-lg bg-white rounded-full p-2'>💝</motion.div>
<Footer/>
</Suspense>
<Copyright/>
</Provider>
  </ErrorBoundary>
  </div>
  </>
}


export default wrapper.withRedux(App)

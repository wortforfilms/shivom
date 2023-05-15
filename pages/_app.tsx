import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { TopBar } from '@/components/layout/header/TopBar'
import { Footer } from '@/components/layout/Footer'
import { Copyright } from '@/components/landing/Copyright'
import ErrorBoundary from '@/util/boundary'
import { Provider } from 'react-redux'
import { wrapper } from '@/store/store'
import { Suspense, useState } from 'react'
import { HeaderButtons } from '../components/layout/HeaderButtons'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

function App({ Component, ...rest }: AppProps) {
  const {store,props}=wrapper.useWrappedStore(rest)
  const [loading, setLoading] = useState(false);
  const router=useRouter()
  return <>
  <ErrorBoundary>
<Provider store={store}>
<Suspense fallback={<div className='bg-gray-300 m-auto'>Loading...</div>}>
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
  </>
}


export default wrapper.withRedux(App)

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { TopBar } from '@/components/layout/header/TopBar'
import { Footer } from '@/components/layout/Footer'
import { Copyright } from '@/components/landing/Copyright'

export default function App({ Component, pageProps }: AppProps) {
  return <>
<TopBar/>

  <Component {...pageProps} />

<Footer/>
<Copyright/>
  </>
}



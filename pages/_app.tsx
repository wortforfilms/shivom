import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { TopBar } from '@/components/layout/header/TopBar'
import { Footer } from '@/components/layout/Footer'
import { Copyright } from '@/components/landing/Copyright'
import ErrorBoundary from '@/util/boundary'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <ErrorBoundary>

<TopBar/>

  <Component {...pageProps} />

<Footer/>
<Copyright/>
  </ErrorBoundary>
  </>
}



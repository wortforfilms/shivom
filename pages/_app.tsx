import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { TopBar } from '@/components/layout/header/TopBar'
import { Footer } from '@/components/layout/Footer'
import { Copyright } from '@/components/landing/Copyright'
import ErrorBoundary from '@/util/boundary'
import { Provider } from 'react-redux'
import { wrapper } from '@/store/store'
import { Suspense, useState } from 'react'
import { HeaderButtons } from '.'

function App({ Component, ...rest }: AppProps) {
  const {store,props}=wrapper.useWrappedStore(rest)
  const [loading, setLoading] = useState(false);
  
  return <>
  <ErrorBoundary>
<Provider store={store}>
<Suspense fallback={<div className='bg-gray-300 m-auto'>Loading...</div>}>
<TopBar/>


<Component {...props.pageProps} />



<Footer/>
</Suspense>
<Copyright/>
</Provider>
  </ErrorBoundary>
  </>
}


export default wrapper.withRedux(App)

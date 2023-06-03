
import { SocialBar } from '../layout/SocialBar'

import { Doshas } from '@/components/landing/Doshas'
import { Nakshatras } from '@/components/landing/Nakshatras'
import { Planets } from '@/components/landing/Planets'
import { Process } from '@/components/landing/Process'
import { Technology } from '@/components/landing/Technology'
import { AboutUs } from '../components/landing/AboutUs'

import { ProductForm } from '@/form/forms/product/ProductForm'
import { Questions } from '@/components/landing/Questions'
import { Testemonials } from '@/components/landing/Testemonial'
import { Zodiacs } from '@/components/landing/Zodiacs'
import { useEffect, useState } from 'react'
import { Kosh } from '../components/Kosh'
import { ProductList } from '../components/catalogue/ProductList'
import { Communication } from '../components/landing/Communication'
import { GameBanner } from '@/components/games/GameBanner'
import { Brahmi } from '@/components/classes/brahmi'
import { HeaderButtons } from '../layout/HeaderButtons'
import { Team } from '../components/list/Team'
import { useSelector } from 'react-redux'
import Services from './services'
import { VedicCoarses } from './services/[service]'
import Banner from '@/elements/banner'
import { Sh4omBanner0 } from '@/elements/headless/banner'
import { Box } from '@/elements/box'

import HindiAlphabetChart from '@/lib/akshar/hindi'
import { useRouter } from 'next/router'
import PostDesigner from '@/elements/insta'



// before active after
// before processing after

export default function Home(props: any) {
  const { initialReduxState } = props
  const earth: typeof initialReduxState = useSelector(state => state)
  const [section, setSection] = useState<any>(null)
  const router=useRouter()
  const {sect}=router.query

  useEffect(() => {
    let mount=true
    if(mount){
      setSection(sect)
    }
  
    return () => {
      mount=false
    }
  }, [sect])
  



  return (
    <main className={`flex min-h-screen max-w-5xl m-auto  flex-col justify-around p-2 w-full`}
    >

      <div className='h-12'></div>
      <HeaderButtons setSection={setSection} section={section} />

      {!section && <Banner/> }
{/* <PostDesigner/> */}
        {!section && <div className='flex flex-col  w-full justify-around gap-4'>
          <ProductForm />
          <GameBanner />
        </div>}

      {section === "ecommerce" && <div className='mt-6' id="ecommerce">
        <ProductList earth={earth}/>
      </div>}
      {section === "games" && <>
        <GameBanner />
      </>}
      {section === "astrology" && <Box>
   
        <Communication />
        </Box>
        }
      {section === "astronomy" && <>
          <Zodiacs />
      </>
      }
      {section === "vedic_classes" && <>
        <VedicCoarses/>
        <HindiAlphabetChart/>

      </>}
      {section === "brahmi_classes" && <>
        <Brahmi />
      </>}
      {section === "boards" && <Team />}
      {section === "kosha" && <Kosh />}
      {section === "services" && <Services />}
      
      {!earth?.auth?.authenticated && <>
      <Questions />
      <Testemonials />
      <AboutUs />
      <Technology />
      <Planets />
      <Nakshatras />
      <Doshas />
      <Process />
      <SocialBar />
      <Sh4omBanner0/>
      </>}
    </main>
  )
}





// create content animation 
// tool auth role_selector {[user, customer,vender,supplier,logistic,researcher,developer,admin]} 

// ss-> transfer 
// posts leasons[free,paid,premium]
// pay -=> x=.>˘≥
// moon =>  


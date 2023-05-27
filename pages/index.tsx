
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
import { useState } from 'react'
import { Kosh } from '../components/Kosh'
import { ProductList } from '../components/catalogue/ProductList'
import { Communication } from '../components/communication/Communication'

import { Game } from '../components/games/Game'
import { GameBanner } from '@/components/games/GameBanner'
import { Brahmi } from '@/components/classes/brahmi'
import { HeaderButtons } from '../layout/HeaderButtons'
import { Team } from '../components/list/Team'
import { useSelector } from 'react-redux'
import Services from './services'
import { VedicCoarses } from './services/[service]'
import Banner from '@/elements/banner'
import Sh4omBanner, { Sh4omBanner0 } from '@/elements/headless/banner'


// before active after
// before processing after

export default function Home(props: any) {
  const { initialReduxState } = props
  const earth: typeof initialReduxState = useSelector(state => state)
  const [section, setSection] = useState(null)



  return (
    <main className={`flex min-h-screen max-w-5xl m-auto  flex-col justify-around p-2 w-full`}
    >

      <div className='h-12'></div>
      <HeaderButtons setSection={setSection} section={section} />
      {!section &&<Banner/>}
      <Sh4omBanner/>
      <Sh4omBanner0/>
      <div className='flex flex-col sm:flex-row gap-2 '>
        {!section && <div className='flex flex-col  w-full justify-around gap-4'>
          <ProductForm />
          <GameBanner />
        </div>}
      </div>
      {section === "ecommerce" && <div className='mt-12' id="ecommerce">
        <ProductList earth={earth}/>
      </div>}
      {section === "games" && <>
        {!earth.auth.authenticated ? <GameBanner /> : <Game />}
      </>}
      {section === "astrology" && <Communication />}
      {section === "astronomy" && <>
        <div className='mt-8'>
          <Zodiacs />

        </div>
      </>
      }
      {section === "vedic_classes" && <>
        {/* <MApp /> */}
        <VedicCoarses/>

      </>}
      {section === "brahmi_classes" && <>
     
        <Brahmi />
      </>}
      {section === "boards" && <Team />}
      {section === "kosha" && <Kosh />}
      {section === "services" && <Services />}
      <Questions />
      <Testemonials />
      <AboutUs />
      <Technology />
      <Planets />
      <Nakshatras />
      <Doshas />
      <Process />
      <SocialBar />
    </main>
  )
}





// create content animation 
// tool auth role_selector {[user, customer,vender,supplier,logistic,researcher,developer,admin]} 

// ss-> transfer 
// posts leasons[free,paid,premium]
// pay -=> x=.>˘≥
// moon =>  


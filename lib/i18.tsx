import { createContext, useState, useRef, useEffect } from 'react'
import rosetta from 'rosetta'
// import rosetta from 'rosetta/debug';

const i18n = rosetta()

export const defaultLanguage = 'en'
export const languages = ['de', 'en','hi','br']
export const contentLanguageMap = { de: 'de-DE', en: 'en-US', hi:'hi-IN',br:"br-IN" }

export const I18nContext = createContext({})

// default language sphynx
// pyramid ¿? prism 
// shadow 
i18n.locale(defaultLanguage)


export default function I18n(props:any) {
  const { children, locale, lngDict }=props
  const activeLocaleRef = useRef(locale || defaultLanguage)
  const [, setTick] = useState(0)
  const firstRender = useRef(true)
  
  var args:any=[]
  const i18nWrapper = {
    activeLocale: activeLocaleRef.current,
    t: (...args:any) => i18n.t.apply({},args),
    locale: (l:any, dict:any) => {
      i18n.locale(l)
      activeLocaleRef.current = l
      if (dict) {
        i18n.set(l, dict)
      }
      // force rerender to update view
      setTick((tick) => tick + 1)
    },
  }

  // for initial SSR render
  if (locale && firstRender.current === true) {
    firstRender.current = false
    i18nWrapper.locale(locale, lngDict)
  }

  // when locale is updated
  useEffect(() => {
    if (locale) {
      i18nWrapper.locale(locale, lngDict)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lngDict, locale])

  return (
    <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
  )
}



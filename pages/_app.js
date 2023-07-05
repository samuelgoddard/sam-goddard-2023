import '@/styles/main.css'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import { MigraExtralight, SuisseIntlMono, PPEditorialOld } from '@/helpers/fonts';
import { ReactLenis } from '@studio-freight/react-lenis';
import Header from '@/components/header';
import { isWindows } from "react-device-detect";
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [windows, setWindows] = useState(false)
  
  useEffect(() => {
    setWindows(isWindows)
  },[setWindows]);

  return (
    <ReactLenis root options={{ lerp: 0.15 }}>
      <DefaultSeo {...SEO} /> 

      <div className={`${MigraExtralight.variable} ${SuisseIntlMono.variable} ${PPEditorialOld.variable} font-serif transition-colors ease-[cubic-bezier([0.83,0,0.17,1])] duration-[500ms] delay-[50ms] ${windows ? 'windows' : 'mac'} ${router.asPath == '/' ? 'bg-black text-white selection:bg-white selection:text-black' : 'bg-white text-black selection:bg-black selection:text-white' }`}>
        <div className="grain"></div>
            
        <Header />
        
        <MotionConfig reducedMotion="user">
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </MotionConfig>
      </div>
    </ReactLenis>
  )
}
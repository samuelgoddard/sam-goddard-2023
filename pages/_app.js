import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import { MigraExtralight, SuisseIntlMono, PPEditorialOld } from '@/helpers/fonts';
import { ReactLenis } from '@studio-freight/react-lenis';
import Header from '@/components/header';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ReactLenis root>
      <DefaultSeo {...SEO} /> 

      <div className={`${MigraExtralight.variable} ${SuisseIntlMono.variable} ${PPEditorialOld.variable} font-serif transition-colors ease-[cubic-bezier([0.83,0,0.17,1])] duration-[500ms] delay-[50ms] ${router.asPath == '/' ? 'bg-black text-white selection:bg-white selection:text-black' : 'bg-white text-black selection:bg-black selection:text-white' }`}>
        <div className="grain"></div>       
        <Header />

        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </ReactLenis>
  )
}
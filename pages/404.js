import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fadeDelay, reveal, grain } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { projects } from '@/helpers/projects'
import { awards } from '@/helpers/awards'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ImageScale from '@/components/imageScale'
import { SplitText } from '@/components/splitText'
import dynamic from 'next/dynamic';
import Link from 'next/link'

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [intro, setIntro] = useState(true);
  const [current, setCurrent] = useState(null);
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    setTimeout(()=>{
     setIntro(false)
    }, shouldReduceMotion ? 0 : 3000)

  }, [intro, shouldReduceMotion])

  function handleHover(e) {
    setHovered(true)
    setCurrent(e)
  }

  function handleHoverLeave(e) {
    setHovered(false)
    setCurrent(null)
  }
  return (
    <Layout>
      <NextSeo title="Nether Realm" />
      
      <div className="h-screen flex flex-col justify-center items-center">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="w-full mt-auto text-center flex flex-col items-center justify-center"
          >
            <m.div variants={grain} className="grain"></m.div>

            <m.main variants={fadeDelay}>
              <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center opacity-[0.033] text-[1000px] overflow-hidden"><span className="block w-[75%] lg:w-[50%] mt-[-15vw] max-w-[740px] md:mt-[-10vw] lg:mt-0"><svg className="w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 23"><path fill="#BEBEBE" d="M10.24 19.44c-1.72 0-3.32-.36-4.68-1.04-.56-.32-1.24-.2-1.68.24l-2.72 2.72c-.68.68-1.16.16-.48-.52l3.4-3.4c-1.88-1.4-3-3.52-3-6 0-2.12.8-3.96 2.16-5.32.48-.44.48-1.04.04-1.48l-2.6-2.6C0 1.36.48.88 1.16 1.56l2.68 2.68c.44.44 1.12.56 1.68.24 1.36-.68 2.96-1.04 4.72-1.04 1.72 0 3.32.4 4.64 1.12.52.32 1.2.24 1.64-.2l2.8-2.8c.68-.68 1.16-.24.48.44l-2.76 2.76c-.44.44-.44 1.04 0 1.48 1.28 1.36 2 3.16 2 5.2s-.72 3.84-2 5.2c-.44.44-.44 1.04 0 1.48l2.76 2.76c.68.68.2 1.16-.48.48l-2.8-2.8c-.44-.44-1.12-.52-1.68-.2-1.32.68-2.88 1.08-4.6 1.08Zm-6.44-8c0 4.08 2.76 7.2 6.44 7.2 3.44 0 6.12-3.12 6.12-7.2s-2.68-7.16-6.12-7.16c-3.68 0-6.44 3.08-6.44 7.16Z"/></svg></span></div> 
              <div>
                <Container>
                  <article>
                    <div className="relative w-full">
                      <div className="w-full">
                        <div className="leading-[1] uppercase text-[clamp(30px,0.92rem+4.9vw,90px)] font-display tracking-tight">
                          <h1 className="flex flex-wrap overflow-hidden justify-center w-full text-center">
                            <SplitText
                              initial={{ y: '100%' }}
                              animate="enter"
                              exit="exit"
                              transition={{ duration: 1.22, delay: 0, ease: [0.83, 0, 0.17, 1] }}
                              variants={{
                                enter: i => ({
                                  y: 0,
                                }),
                                exit: i => ({
                                  y: '100%',
                                })
                              }}
                            >
                              Sorry, This page appears to be in the nether-realm.
                            </SplitText>
                          </h1>

                          <h2 className="font-mono uppercase tracking-tight leading-[1] text-[10px] mb-5 pb-0 relative overflow-hidden"><m.span variants={reveal} className="block p-[5px]">Why don't you head back <Link href="/" className="inline-block group a11y-focus border-b pb-[3px] border-white">to safety</Link></m.span></h2>
                        </div>
                      </div>
                    </div>
                  </article>
                </Container>
              </div>
            </m.main>
          </m.div>
        </LazyMotion>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    </Layout>
  )
}

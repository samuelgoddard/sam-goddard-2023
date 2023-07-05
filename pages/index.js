import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fadeDelay, revealDelay, imageZoom, revealIntro, grain } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { projects } from '@/helpers/projects'
import { awards } from '@/helpers/awards'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ImageScale from '@/components/imageScale'
import { SplitText } from '@/components/splitText'
import dynamic from 'next/dynamic';

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
      <NextSeo title="Creative Developer" />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <AnimatePresence>
            { intro && (
              <m.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
                className="fixed inset-0 w-full h-screen z-[200]"
              >
                <m.div
                  initial={{ y: '100%'}}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1, delay: 2.25, ease: [0.83, 0, 0.17, 1] }}
                  className="absolute inset-0 h-screen w-full z-[120] bg-black"
                ></m.div>

                <m.div
                  className="w-full h-full z-[100] flex flex-wrap items-center justify-center text-white bg-black relative" id="top"
                >
                  <span className="flex overflow-hidden text-3xl lg:text-[39px] leading-none lg:leading-none relative z-[100]">
                    <m.span className="block" initial={{ y: '0'}} animate={{ y: '-120%' }} transition={{ duration: 1, delay: 2.25, ease: [0.83, 0, 0.17, 1] }}>
                      <m.span variants={revealIntro} className="flex">
                        <span className="">
                          <span className="block">Sam Goddard </span>
                        </span>
                        <span className="ml-1 md:ml-3 flex items-center">
                          &apos;<CountUp className="block tabular-nums w-[35px]" duration={2.4} end={89} start={50} delay={0.75} />&nbsp;—
                        </span>  
                      </m.span>
                    </m.span>
                  </span>

                  <div className="absolute inset-0 w-full h-full black">
                    <div className="relative w-full h-full overflow-hidden">

                      <div className="absolute top-0 left-0 bg-[#000] bg-opacity-30 w-[30vw] h-[30vh] lg:w-[30vw] lg:h-[45vh] overflow-hidden m-4 lg:m-5">
                        <m.div 
                          initial={{ y: 0 }}
                          animate={{ y: "-100%" }}
                          transition={{ duration: 1.8, ease: [0.83, 0, 0.17, 1] }}
                          className="absolute inset-0 bg-black z-[30] w-full h-full"
                        ></m.div>

                        <m.div
                          initial={{ scale: 1.125 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 2.75, delay: 0.25, ease: [0.37, 0, 0.63, 1] }}
                          className="absolute inset-0 w-full h-full"
                        >
                          <m.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 1.5, delay: 1, ease: [0.83, 0, 0.17, 1] }}
                            className="absolute inset-0 w-full h-full opacity-1"
                          >
                            <Image src={`/images/intro04.jpg`} priority fill className={`absolute w-full h-full object-cover object-center`} alt={`Biographical image of Sam`} sizes="(max-width: 1024px) 100vw,50vw" />
                          </m.div>

                          <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1, ease: [0.83, 0, 0.17, 1] }}
                            className="absolute inset-0 w-full h-full opacity-0"
                          >
                            <Image src={`/images/intro03.jpg`} priority fill className={`absolute w-full h-full object-cover object-center`} alt={`Biographical image of Sam`} sizes="(max-width: 1024px) 100vw,50vw" />
                          </m.div>
                        </m.div>
                      </div>

                      <div className="absolute right-0 bottom-0 bg-[#000] bg-opacity-30 w-[45vw] h-[50vh] lg:h-[75vh] overflow-hidden m-4 lg:m-5">
                        <m.div 
                          initial={{ y: 0 }}
                          animate={{ y: "-100%" }}
                          transition={{ duration: 2, ease: [0.83, 0, 0.17, 1] }}
                          className="absolute inset-0 bg-black z-[30] w-full h-full"
                        ></m.div>

                        <div className="opacity-[0.55]">  
                          <m.div
                            initial={{ scale: 1.125 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 2.75, delay: 0.25, ease: [0.37, 0, 0.63, 1] }}
                            className="absolute inset-0 w-full h-full"
                          >
                            <m.div
                              initial={{ opacity: 1 }}
                              animate={{ opacity: 0 }}
                              transition={{ duration: 1.5, delay: 1.25, ease: [0.83, 0, 0.17, 1] }}
                              className="absolute inset-0 w-full h-full opacity-1"
                            >
                              <Image src={`/images/intro02.jpg`} priority fill className={`absolute w-full h-full object-cover object-center`} alt={`Biographical image of Sam`} sizes="(max-width: 1024px) 100vw,50vw" />
                            </m.div>

                            <m.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1.5, delay: 1.25, ease: [0.83, 0, 0.17, 1] }}
                              className="absolute inset-0 w-full h-full opacity-0"
                            >
                              <Image src={`/images/intro01.jpg`} priority fill className={`absolute w-full h-full object-cover object-center`} alt={`Biographical image of Sam`} sizes="(max-width: 1024px) 100vw,50vw" />
                            </m.div>
                          </m.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </m.div>
              </m.div>
            )}
          </AnimatePresence>

          <m.div variants={grain} className="grain"></m.div>

          <m.main variants={fadeDelay}>
            <div className="pt-[65px] lg:pt-[70px]">
              <Container>
                <article>
                  <div className="pb-[61vw] md:pb-[55vw] lg:pb-[45vw] xl:pb-[36.25vw] 2xl:pb-[670px] mb-24 lg:mb-16 relative">
                    <div className="absolute bottom-0 right-0 w-10/12 md:w-8/12 lg:w-[52%] xl:w-[44%] aspect-square overflow-hidden bg-[#000] bg-opacity-50 max-w-[800px]">
                      <div className="opacity-[0.2] absolute inset-0 overflow-hidden ">
                        <m.div className="absolute inset-0 w-full h-full" variants={imageZoom}>
                          <ImageScale image="/images/bio.jpg" alt="Portrait of Sam" sizes="(max-width: 1024px) 100vw,65vw" />
                        </m.div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="leading-[1] uppercase text-[clamp(30px,0.92rem+4.9vw,90px)] font-display tracking-tight max-w-[1700px] w-full lg:w-11/12">
                        <h1 className="flex flex-wrap overflow-hidden justify-start w-full">
                          <SplitText
                            indent
                            initial={{ y: '100%' }}
                            animate="enter"
                            exit="exit"
                            transition={{ duration: 1.22, delay: 2.7, ease: [0.83, 0, 0.17, 1] }}
                            variants={{
                              enter: i => ({
                                y: 0,
                              }),
                              exit: i => ({
                                y: '100%',
                              })
                            }}
                          >
                            I&rsquo;m a freelance creative developer With a keen focus on methodical code. I enjoy making websites that are innovative, accessible & performant.
                          </SplitText>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <nav className="pb-[20vw] lg:pb-[12.5vw]">
                    <h2 className="font-mono uppercase tracking-tight leading-none text-[10px] mb-3 lg:mb-3 pb-0">Latest Projects</h2>
                    <ul className="border-t border-white/30">
                      {projects.map((e, i) => {
                        let state = 'lg:pl-0'
                        let zoomState = 'scale-[1.05]'
                        let innerState = 'lg:opacity-100'
                        if (hovered) {
                          innerState = 'lg:opacity-[0.075]'
                        }
                        if (i==current) {
                          state = 'lg:pl-[1.75vw]'
                          innerState = 'lg:opacity-100'
                          zoomState = 'scale-[1]'
                        }

                        return (
                          <li className="block relative" key={i}>
                            <a onMouseEnter={()=> handleHover(i)} onMouseLeave={()=>handleHoverLeave()} href={e.url} target="_blank" rel="noopener noreferrer" className={`uppercase border-b border-white/30 w-full py-2 lg:py-[15px] flex items-end relative group transition-all ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] ${state} a11y-focus`}>
                              <span className={`block font-serif italic text-[clamp(16px,0.7rem+1.5vw,30px)] tracking-normal leading-none mr-2 lgmr-3 translate-y-[2px] relative overflow-hidden z-[1] transition-opacity ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] ${innerState}`}>
                                <m.span className="block" variants={revealDelay}>{i < 9 && ('0')}{i+1}</m.span>
                              </span>
                              <span className="block overflow-hidden">
                                <span className={`leading-[0.95] block text-[clamp(30px,0.92rem+4.4vw,100px)] font-display tracking-tight relative z-[1] transition-opacity ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] ${innerState}`}>
                                  <m.span className="block" variants={revealDelay}>
                                    <span className="block ms-text-adjust">{e.title}</span>
                                  </m.span>
                                </span>
                              </span>
                              
                              <span className={`ml-auto text-right font-mono text-[10px] tracking-tight leading-none hidden lg:block relative overflow-hidden z-[1] transition-opacity ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] ${innerState}`}>
                                <m.span className="block" variants={revealDelay}>{e.url ? 'View Live' : 'Coming Soon' }</m.span>
                              </span>
                              
                              <div className="absolute -top-5 right-[70px] z-[10] w-[35%] max-w-[600px] aspect-[16/10.7] pointer-events-none">
                                {e.image && (
                                  <div className="absolute top-0 right-0 w-full h-full transition-opacity ease-in-out duration-[400ms] bg-[#000] bg-opacity-50 opacity-0 lg:group-hover:opacity-[1] z-[10] overflow-hidden grayscale hidden lg:block">
                                    <Image src={`/images/${e.image}`} fill className={`absolute w-full h-full object-cover object-center transition-transform opacity-[0.55] ease-[cubic-bezier([0.83,0,0.17,1])] duration-[800ms] ${zoomState}`} alt={`Screenshot of the ${e.title} projects home page`} sizes="(max-width: 1024px) 100vw,33vw" />
                                  </div>
                                )}
                              </div>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </nav>

                  <div className="pb-[5vw] lg:pb-[5vw]">
                    <div className="w-[100%] lg:w-[85%] max-w-screen-2xl">
                      <h2 className="font-mono uppercase tracking-tight leading-[1] text-[10px] mb-5 pb-0 relative overflow-hidden"><m.span className="block" variants={revealDelay}>Features / Awards</m.span></h2>

                      <h2 className="leading-[1] text-[clamp(30px,0.65rem+3.7vw,60px)] font-display tracking-tight w-[95%] lg:w-[85%] flex flex-wrap uppercase">
                        I&rsquo;ve been fortunate enough to have worked with some incredibly talented studios & individuals across the globe, picking up some awards and recognition along the way.
                      </h2>
                    </div>
                  </div>

                  <div className="pb-[20vw] lg:pb-[12.5vw]">
                    <ul className="uppercase border-t border-white/30">
                      {awards.map((e, i) => {
                        return (
                          <li className="block" key={i}>
                            <span className=" border-b border-white/30 w-full py-2 lg:py-1 block lg:flex lg:items-end">
                              <span className="leading-[1.275] block text-[clamp(18px,0.92rem+1.15vw,34px)] font-display tracking-tight mb-1 lg:mb-0 relative overflow-hidden"><m.span className="block" variants={revealDelay}><span className="block ms-text-adjust">{e.title}</span></m.span></span>
                              <span className="ml-auto leading-[1.275] font-serif lg:font-display block text-xl lg:text-[clamp(15px,0.92rem+1.15vw,34px)] tracking-tight relative overflow-hidden">
                                <m.span className="block" variants={revealDelay}>
                                  <span className="flex items-end">
                                    <span className="block">
                                      <span className="block ms-text-adjust">
                                        {e.award}
                                      </span>
                                    </span>
                                    <span className="block font-serif italic text-[clamp(14px,0.7rem+0.65vw,25px)] tracking-normal leading-none pl-2 pr-1 translate-y-[-45%] md:translate-y-[-30%] lg:translate-y-[-32%]">( {e.meta} )</span>
                                  </span>
                                </m.span>
                              </span>
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                    <span className="block mt-3 lg:mt-5 font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0 lg:text-right lg:ml-auto opacity-90">* Nominee / ** Special Kudos Award</span>
                  </div>

                  <div className="grid grid-cols-12 pb-[20vw] lg:pb-[12.5vw]" id="collab">
                    <div className="col-span-12 lg:col-span-4 mb-2 lg:mb-0">
                      <h2 className="font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Let&rsquo;s Collaborate</h2>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                      <div className="max-w-[820px]">
                        <h2 className="leading-[1] block text-[clamp(30px,0.92rem+2vw,45px)] font-display tracking-tight mb-12 uppercase">I&rsquo;m always interested to hear about new projects, so please feel free to reach out on the channels below if you&rsquo;d like me to help bring your vision to life.</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2">

                          <div className="mb-8 lg:mb-12 col-span-1">
                            
                            <span className="block font-mono tracking-tight leading-none text-[10px] uppercase mb-3 pb-0">Email</span>
                            <div className="flex">
                              <a href="mailto:hello@samgoddard.co.uk" className="flex leading-[1.1] text-2xl tracking-tight relative overflow-hidden group a11y-focus">
                                <span className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Hello</span>&nbsp;[at]&nbsp;<span className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>samgoddard.co.uk</span>
                                <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span>
                              </a>
                            </div>
                          </div>

                          <div className="mb-16 lg:mb-12 col-span-1">
                            <span className="block font-mono tracking-tight leading-none text-[10px] uppercase mb-3 pb-0">Twitter</span>
                            <span className="leading-[1.1] text-2xl tracking-tight relative flex">
                              @&nbsp;<a href="https://twitter.com/samuelgoddard/" target="_blank" rel="noopener noreferrer" className="flex relative overflow-hidden group a11y-focus">
                                <span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Samuelgoddard <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span>
                              </a>
                            </span>
                          </div>

                          <div className="mb-8 lg:mb-12 col-span-1">
                            <span className="block font-mono tracking-tight leading-none text-[10px] uppercase mb-3 pb-0">Type set with</span>
                            <span className="flex">
                              <a href="https://pangrampangram.com/products/migra" target="_blank" rel="noopener noreferrer" className="leading-[1.1] flex text-2xl tracking-tight relative group overflow-hidden a11y-focus">
                                <span className="leading-[1.1] inline-block text-2xl tracking-tight relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Migra <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></span>
                              </a>
                              <span className="leading-[1.1] inline-block text-2xl tracking-tight">&nbsp;&amp;&nbsp;</span>
                              <a href="https://pangrampangram.com/products/editorial-old" target="_blank" rel="noopener noreferrer" className="leading-[1.1] flex text-2xl tracking-tight relative group overflow-hidden a11y-focus">
                                <span className="leading-[1.1] inline-block text-2xl tracking-tight relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Editorial Old <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></span>
                              </a>
                            </span>
                          </div>
                          
                          <div className="mb-16 lg:mb-12 col-span-1">
                            <span className="block font-mono tracking-tight leading-none text-[10px] uppercase mb-3 pb-0">Design Partner</span>
                            <a href="https://ijpowell.co.uk" target="_blank" rel="noopener noreferrer" className="leading-[1.1] inline-block text-2xl tracking-tight relative group a11y-focus"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50 "></span><span className="block relative overflow-hidden">Isaac Powell <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></span></a>
                          </div>

                          <div className="mb-8 lg:mb-12 col-span-1">
                          <span className="uppercase block font-mono  tracking-tight leading-none text-[10px] mb-3 pb-0">Front-end Stack</span>
                          <ul>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-[3px]">
                              <a href="https://react.dev/" target="_blank" rel="noreferrer noopener" className="relative group a11y-focus overflow-hidden inline-block"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>React<span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-[3px]">
                              <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener" className="relative group a11y-focus overflow-hidden inline-block"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>NextJs<span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-[3px]">
                              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="relative group a11y-focus overflow-hidden inline-block"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Tailwind<span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-[3px]">
                              <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer noopener" className="relative group a11y-focus overflow-hidden inline-block"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Framer Motion<span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-[3px]">
                              <a href="https://lenis.studiofreight.com/" target="_blank" rel="noreferrer noopener" className="relative group a11y-focus overflow-hidden inline-block"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Lenis Scroll<span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></a>
                            </li>
                          </ul>
                        </div>

                        <div className="col-span-1">
                          <span className="uppercase block font-mono  tracking-tight leading-none text-[10px] mb-3 pb-0">Back-end Stack</span>
                          <ul>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-[3px]">
                              <a href="https://www.sanity.io/" target="_blank" rel="noreferrer noopener" className="relative group a11y-focus overflow-hidden inline-block"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Sanity CMS<span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-[3px]">
                              <a href="https://vercel.com/" target="_blank" rel="noreferrer noopener" className="relative group a11y-focus overflow-hidden inline-block"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Vercel<span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></a>
                            </li>

                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-[3px]">
                              <a href="https://github.com/samuelgoddard/" target="_blank" rel="noreferrer noopener" className="relative group a11y-focus overflow-hidden inline-block"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Github<span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></a>
                            </li>
                            
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-[3px]">
                              <a href="https://shopify.dev/docs/api/storefront" target="_blank" rel="noreferrer noopener" className="relative group a11y-focus overflow-hidden inline-block"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Storefront API<span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></a>
                            </li>
                          </ul>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Container>
            </div>
          </m.main>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}

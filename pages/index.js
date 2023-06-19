import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { projects } from '@/helpers/projects'
import { awards } from '@/helpers/awards'
import Image from 'next/image'
import { useState } from 'react'
import ImageScale from '@/components/imageScale'
import { SplitText } from '@/components/splitText'

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [current, setCurrent] = useState(null);

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
      <NextSeo title="Home" />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main variants={fade}>
            <div className="pt-[65px] lg:pt-[70px]">
              <Container>
                <article>
                  <div className="pb-[65vw] md:pb-[40vw] xl:pb-[35.25vw] mb-8 lg:mb-16 relative">
                    <div className="absolute bottom-0 right-0 w-10/12 md:w-8/12 lg:w-[46%] aspect-square overflow-hidden bg-[#000] bg-opacity-50">
                      <div className="opacity-[0.25] absolute inset-0 overflow-hidden ">
                        <ImageScale image="/images/bio.jpg" alt="Portrait of Sam" />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="leading-[1] uppercase text-[clamp(34px,0.92rem+5vw,90px)] font-display tracking-tight max-w-[2000px] w-full lg:w-11/12">
                        <h1 className="flex flex-wrap overflow-hidden justify-start w-full">
                          <SplitText
                            indent
                            initial={{ y: '100%' }}
                            animate="enter"
                            exit="exit"
                            transition={{ delay: 0, duration: 0.55, ease: [0.83, 0, 0.17, 1] }}
                            variants={{
                              enter: i => ({
                                y: 0,
                              }),
                              exit: i => ({
                                y: '100%',
                              })
                            }}
                          >
                            I&rsquo;m a freelance creative developer With a keen focus on methodical code. I enjoy making websites that are innovative, user-focussed, accessible & performant.
                          </SplitText>
                        </h1>
                      </div>
                    </div>
                  </div>

                  <nav className="pb-[20vw] lg:pb-[12.5vw]">
                    <h2 className="font-mono uppercase tracking-tight leading-none text-[10px] mb-2 lg:mb-3 pb-0">Featured Projects</h2>
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
                            <a onMouseEnter={()=> handleHover(i)} onMouseLeave={()=>handleHoverLeave()} href={e.url} target="_blank" rel="noopener noreferrer" className={`uppercase border-b border-white/30 w-full py-3 lg:py-[15px] flex items-end relative group transition-all ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] ${state}`}>
                              <span className={`block font-serif italic text-[clamp(16px,0.7rem+1.5vw,30px)] tracking-normal leading-none mr-2 lgmr-3 translate-y-[2px] relative overflow-hidden z-[1] transition-opacity ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] ${innerState}`}>
                                <m.span className="block" variants={reveal}>0{i+1}</m.span>
                              </span>
                              <span className={`leading-[0.9] block text-[clamp(32px,0.92rem+5vw,100px)] font-display tracking-tight relative overflow-hidden z-[1] transition-opacity ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] ${innerState}`}>
                                <m.span className="block" variants={reveal}>{e.title}</m.span>
                              </span>
                              
                              <span className={`ml-auto text-right font-mono text-[10px] tracking-tight leading-none hidden lg:block relative overflow-hidden z-[1] transition-opacity ease-[cubic-bezier([0.83,0,0.17,1])] duration-[400ms] ${innerState}`}>
                                <m.span className="block" variants={reveal}>{e.url ? 'View Live' : 'Coming Soon' }</m.span>
                              </span>
                              
                              <div className="absolute -top-5 right-[70px] z-[10] w-[35%] max-w-[600px] aspect-[16/10.7] pointer-events-none">
                                {e.image && (
                                  <div className="absolute top-0 right-0 w-full h-full transition-opacity ease-in-out duration-[400ms] opacity-0 lg:group-hover:opacity-[1] z-[10] overflow-hidden">
                                    <Image src={`/images/${e.image}`} fill className={`absolute w-full h-full object-cover object-center transition-transform ease-[cubic-bezier([0.83,0,0.17,1])] duration-[650ms] ${zoomState}`} alt={`Screenshot of the ${e.title} projects home page`} />
                                  </div>
                                )}

                                {e.video && (
                                  <div className="absolute top-0 right-0 w-full h-full transition-opacity ease-in-out duration-[400ms] opacity-0 lg:group-hover:opacity-[1] z-[10] overflow-hidden">
                                    <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0 ${zoomState}`}>
                                      <source src={`/videos/${e.video}`} type="video/mp4" />
                                      Sorry. Your browser does not support the video tag.
                                    </video>
                                  </div>
                                )}
                              </div>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </nav>

                  <div className="pb-[10vw] lg:pb-[6.5vw]">
                    <div className="w-[95%] lg:w-[85%] max-w-screen-2xl">
                      <h2 className="leading-[1.05] text-[clamp(30px,0.65rem+3.7vw,60px)] font-display tracking-tight w-[95%] lg:w-[90%] flex flex-wrap uppercase">
                        I like to think that I make an approachable and considerate partner for development projects. I have a keen eye for details and a particular focus on interactivity without the sacrifice of performance &amp; accessibility fundamentals.
                      </h2>
                    </div>
                  </div>

                  <div className="pb-[20vw] lg:pb-[12.5vw]">
                    <h2 className="font-mono uppercase tracking-tight leading-[1] text-[10px] mb-3 pb-0 relative overflow-hidden"><m.span className="block" variants={reveal}>Features / Awards</m.span></h2>

                    <ul className="uppercase">
                      {awards.map((e, i) => {
                        return (
                          <li className="block" key={i}>
                            <span className=" border-b border-white/30 w-full py-2 lg:py-1 block lg:flex lg:items-end">
                              <span className="leading-[1.275] block text-[clamp(22px,0.92rem+1.5vw,40px)] font-display tracking-tight mb-1 lg:mb-0 relative overflow-hidden"><m.span className="block" variants={reveal}>{e.title}</m.span></span>
                              <span className="ml-auto leading-[1.275] font-serif lg:font-display block text-xl lg:text-[clamp(16px,0.92rem+1.5vw,40px)] tracking-tight relative overflow-hidden"><m.span className="block" variants={reveal}>{e.award}</m.span></span>
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div className="grid grid-cols-12 pb-[20vw] lg:pb-[12.5vw]">
                    <div className="col-span-12 lg:col-span-4 mb-2 lg:mb-0">
                      <h2 className="font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Let&rsquo;s Collaborate</h2>
                    </div>
                    <div className="col-span-10 lg:col-span-7">
                      <div className="max-w-[820px]">
                        <h2 className="leading-[1.1] block text-[clamp(30px,0.92rem+2vw,45px)] font-display tracking-tight mb-12 uppercase">I&rsquo;d love to hear about projects I can help out with and am always open to hearing about new opportunities, so please feel free to get in touch via any of the channels below.</h2>

                        <div className="mb-8 lg:mb-12">
                          <span className="block font-mono tracking-tight leading-none text-[10px] mb-3 pb-0">Email</span>
                          <span className="leading-[1.1] inline-block text-2xl tracking-tight relative">
                            <span className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Hello</span>&nbsp;[at]&nbsp;<span className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>samgoddard.co.uk</span>
                          </span>
                        </div>

                        <div className="mb-8 lg:mb-12">
                          <span className="block font-mono tracking-tight leading-none text-[10px] mb-3 pb-0">Twitter</span>
                          <span className="leading-[1.1] inline-block text-2xl tracking-tight relative">
                            @<span className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Samuelgoddard</span>
                          </span>
                        </div>

                        <div className="mb-8 lg:mb-12">
                          <span className="block font-mono tracking-tight leading-none text-[10px] mb-3 pb-0">Type set with</span>
                          <span className="block">
                            <span className="leading-[1.1] inline-block text-2xl tracking-tight relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Migra</span>
                            <span className="leading-[1.1] inline-block text-2xl tracking-tight">&nbsp;&amp;&nbsp;</span>
                            <span className="leading-[1.1] inline-block text-2xl tracking-tight relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Editorial Old</span>
                          </span>
                        </div>
                        
                        <div>
                          <span className="block font-mono tracking-tight leading-none text-[10px] mb-3 pb-0">Site Design</span>
                          <span className="leading-[1.1] inline-block text-2xl tracking-tight relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Isaac Powell</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 pb-[20vw] lg:pb-[12.5vw]">
                    <div className="col-span-12 lg:col-span-4 mb-2 lg:mb-0">
                      <h2 className="font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Current Tech Stack</h2>
                    </div>
                    <div className="col-span-10 lg:col-span-7">
                      <div className="max-w-[900px] grid grid-cols-2">
                        <div className="mb-8 lg:mb-12 col-span-1">
                          <span className="block font-mono  tracking-tight leading-none text-[10px] mb-3 pb-0">Front-end</span>
                          <ul>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://react.dev/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>React</a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>NextJs</a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Tailwind</a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Framer Motion</a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://lenis.studiofreight.com/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Lenis Scroll</a>
                            </li>
                          </ul>
                        </div>

                        <div className="mb-8 lg:mb-12 col-span-1">
                          <span className="block font-mono  tracking-tight leading-none text-[10px] mb-3 pb-0">Back-end</span>
                          <ul>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://www.sanity.io/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Sanity CMS</a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://vercel.com/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Vercel</a>
                            </li>
                          </ul>
                        </div>

                        <div className="mb-8 lg:mb-12 col-span-1">
                          <span className="block font-mono  tracking-tight leading-none text-[10px] mb-3 pb-0">Tooling</span>
                          <ul>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://github.com/samuelgoddard" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Github</a>
                            </li>
                            <li className=" leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="#" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Other Stuff</a>
                            </li>
                          </ul>
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

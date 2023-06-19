import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { projects } from '@/helpers/projects'
import Image from 'next/image'
import { useState } from 'react'

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
            <div className="pt-24">
              <Container>
                <article>
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

                  <div className="grid grid-cols-12 pb-[20vw] lg:pb-[12.5vw]">
                    <div className="col-span-12 lg:col-span-4 mb-2 lg:mb-0">
                      <h2 className="font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Let&rsquo;s Collaborate</h2>
                    </div>
                    <div className="col-span-10 lg:col-span-7">
                      <div className="max-w-[820px]">
                        <h2 className="leading-[1.1] block text-[clamp(30px,0.92rem+2vw,45px)] font-display tracking-tight mb-12">I&rsquo;d love to hear about projects I can help out with and am always open to hearing about new opportunities, so please feel free to get in touch via any of the channels below.</h2>

                        <div className="mb-8 lg:mb-12">
                          <span className="block font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Email</span>
                          <span className="uppercase leading-[1.1] inline-block text-2xl tracking-tight relative">
                            <span className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>hello</span>&nbsp;[at]&nbsp;<span className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>samgoddard.co.uk</span>
                          </span>
                        </div>

                        <div className="mb-8 lg:mb-12">
                          <span className="block font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Twitter</span>
                          <span className="uppercase leading-[1.1] inline-block text-2xl tracking-tight relative">
                            @<span className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>samuelgoddard</span>
                          </span>
                        </div>

                        <div className="mb-8 lg:mb-12">
                          <span className="block font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Type set with</span>
                          <span className="block">
                            <span className="uppercase leading-[1.1] inline-block text-2xl tracking-tight relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Migra</span>
                            <span className="uppercase leading-[1.1] inline-block text-2xl tracking-tight">&nbsp;&amp;&nbsp;</span>
                            <span className="uppercase leading-[1.1] inline-block text-2xl tracking-tight relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Editorial Old</span>
                          </span>
                        </div>
                        
                        <div>
                          <span className="block font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Site Design</span>
                          <span className="uppercase leading-[1.1] inline-block text-2xl tracking-tight relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-white/50"></span>Isaac Powell</span>
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

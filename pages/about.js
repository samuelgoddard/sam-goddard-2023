import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { awards } from '@/helpers/awards'
import { SplitText } from '@/components/splitText'
import Image from 'next/image'
import ImageScale from '@/components/imageScale'

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main variants={fade}>
            <div className="pt-16">
              <Container>
                <article>
                  <div className="pb-[65vw] md:pb-[40vw] xl:pb-[35.25vw] mb-8 relative">
                    <div className="absolute bottom-0 right-0 w-10/12 md:w-8/12 lg:w-[46%] aspect-square overflow-hidden">
                      <div className="opacity-[0.4] absolute inset-0 overflow-hidden">
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

                  <div className="pb-[20vw] lg:pb-[12.5vw]">
                    <h2 className="font-mono uppercase tracking-tight leading-[1] text-[10px] mb-3 pb-0 relative overflow-hidden"><m.span className="block" variants={reveal}>Features / Awards</m.span></h2>

                    <ul>
                      {awards.map((e, i) => {
                        return (
                          <li className="block" key={i}>
                            <span className=" border-b border-black/30 w-full py-2 lg:py-1 block lg:flex lg:items-end">
                              <span className="leading-[1.275] block text-[clamp(22px,0.92rem+1.5vw,40px)] font-display tracking-tight mb-1 lg:mb-0 relative overflow-hidden"><m.span className="block" variants={reveal}>{e.title}</m.span></span>
                              <span className="ml-auto leading-[1.275] font-serif lg:font-display block text-xl lg:text-[clamp(16px,0.92rem+1.5vw,40px)] tracking-tight relative overflow-hidden"><m.span className="block" variants={reveal}>{e.award}</m.span></span>
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div className="pb-[10vw] lg:pb-[6.5vw]">
                    <div className="w-[95%] lg:w-[85%] max-w-screen-2xl">
                      <h2 className="leading-[1.05] text-[clamp(30px,0.65rem+3.7vw,55px)] font-display tracking-tight w-[95%] lg:w-[90%] flex flex-wrap">
                        I like to think that I make an approachable and considerate partner for development projects. I have a keen eye for details and a particular focus on interactivity without the sacrifice of performance &amp; accessibility fundamentals. Over the years I&rsquo;ve been fortunate enough to work with agencies & individuals across both the globe and a variety of sectors, often with the combined goal of making the world a better place.
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 pb-[20vw] lg:pb-[12.5vw]">
                    <div className="col-span-12 lg:col-span-4 mb-2 lg:mb-0">
                      <h2 className="font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Current Tech Stack</h2>
                    </div>
                    <div className="col-span-10 lg:col-span-7">
                      <div className="max-w-[900px] grid grid-cols-2">
                        <div className="mb-8 lg:mb-12 col-span-1">
                          <span className="block font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Front-end</span>
                          <ul>
                            <li className="uppercase leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://react.dev/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>React</a>
                            </li>
                            <li className="uppercase leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>NextJs</a>
                            </li>
                            <li className="uppercase leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Tailwind</a>
                            </li>
                            <li className="uppercase leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Framer Motion</a>
                            </li>
                            <li className="uppercase leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://lenis.studiofreight.com/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Lenis Scroll</a>
                            </li>
                          </ul>
                        </div>

                        <div className="mb-8 lg:mb-12 col-span-1">
                          <span className="block font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Back-end</span>
                          <ul>
                            <li className="uppercase leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://www.sanity.io/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Sanity CMS</a>
                            </li>
                            <li className="uppercase leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://vercel.com/" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Vercel</a>
                            </li>
                          </ul>
                        </div>

                        <div className="mb-8 lg:mb-12 col-span-1">
                          <span className="block font-mono uppercase tracking-tight leading-none text-[10px] mb-3 pb-0">Tooling</span>
                          <ul>
                            <li className="uppercase leading-[1.1] block text-2xl tracking-tight relative mb-2">
                              <a href="https://github.com/samuelgoddard" target="_blank" rel="noreferrer noopener" className="relative"><span className="block absolute bottom-0 left-0 w-full h-[1px] translate-y-[-1px] bg-black/50"></span>Github</a>
                            </li>
                            <li className="uppercase leading-[1.1] block text-2xl tracking-tight relative mb-2">
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

          <m.div variants={fade}>
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

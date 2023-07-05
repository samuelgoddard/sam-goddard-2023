import Container from '@/components/container'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLenis } from '@studio-freight/react-lenis'

export default function Header() {
  const router = useRouter()
  const lenis = useLenis();
  var now = new Date();
  var current = new Date(now.getFullYear(), now.getMonth()+1, 1);
  let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(current);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-colors ease-[cubic-bezier([0.83,0,0.17,1])] duration-[500ms] delay-[50ms] ${router.asPath == '/' ? 'bg-black text-white selection:bg-white selection:text-black' : 'bg-white text-black selection:bg-black selection:text-white' }`}>
      <Container>
        <div className="grid grid-cols-3 lg:grid-cols-4 text-xl leading-none lg:text-2xl lg:leading-none border-b border-b-current pt-4 pb-3 lg:pt-4 lg:pb-3 items-center">
          <div className="col-span-1 text-left">
            <div className="lg:flex lg:space-x-3">
              <div className="inline-block lg:block">
                <span className="inline lg:block relative overflow-hidden">S<span className="hidden lg:inline">am</span><span className="hidden lg:inline">&nbsp;</span>G<span className="hidden lg:inline">oddard</span>&nbsp; <span className="hidden lg:flex absolute inset-0 w-full h-full items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></span>
              </div>
              
              <span className="inline lg:block">&apos;89 —</span>
            </div>
          </div>

          <div className="col-span-2 text-center hidden lg:flex justify-center items-center">
            <div className="relative flex overflow-hidden lg:max-w-[250px] xl:max-w-[300px]">
              <div className="animate-marquee whitespace-nowrap">
                <span className="mr-2">Available {mo} &apos;23&nbsp;&nbsp;—</span>
                <span className="mr-2">Creative Developer &nbsp;&nbsp;—</span>
                <span className="mr-2">Available {mo} &apos;23&nbsp;&nbsp;—</span>
                <span className="mr-2">Creative Developer &nbsp;&nbsp;—</span>
                <span className="mr-2">Available {mo} &apos;23&nbsp;&nbsp;—</span>
              </div>

              <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                <span className="mr-2">Creative Developer &nbsp;&nbsp;—</span>
                <span className="mr-2">Available {mo} &apos;23&nbsp;&nbsp;—</span>
                <span className="mr-2">Creative Developer &nbsp;&nbsp;—</span>
                <span className="mr-2">Available {mo} &apos;23&nbsp;&nbsp;—</span>
                <span className="mr-2">Creative Developer &nbsp;&nbsp;—</span>
              </div>
            </div>
          </div>
          
          {/* <div className="col-span-1">
            <nav className="ml-auto flex space-x-3 lg:space-x-5 justify-center text-center">
              <Link href="/" className="flex items-center italic group">
                <span className={`block w-[6px] lg:w-2 h-[6px] lg:h-2 bg-current rounded-full mr-[6px] translate-y-[-2px] ${router.asPath == '/' ? 'scale-[1]' : 'scale-[0]' }`}></span>
                <span className="block relative overflow-hidden">Works <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></span>
              </Link>
              <Link href="/about" className="flex items-center italic group">
                <span className={`block w-[6px] lg:w-2 h-[6px] lg:h-2 bg-current rounded-full mr-[6px] translate-y-[-2px] ${router.asPath == '/about' ? 'scale-[1]' : 'scale-[0]' }`}></span>
                <span className="block relative overflow-hidden">About <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></span>
              </Link>
            </nav>
          </div> */}

          <div className="col-start-2 lg:col-start-4 col-span-2 lg:col-span-1 text-right">
            <a href="#collab" onClick={()=> lenis?.scrollTo('#collab', { lerp: 0.15 } )} className="group inline-flex justify-end a11y-focus">
              <span className="block relative overflow-hidden leading-none">Let&apos;s Collaborate <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-110%] lg:group-hover:translate-x-0"></span></span></span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}
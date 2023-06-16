import Container from '@/components/container'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-colors ease-[cubic-bezier([0.83,0,0.17,1])] duration-[500ms] delay-[50ms] ${router.asPath == '/' ? 'bg-black text-white selection:bg-white selection:text-black' : 'bg-white text-black selection:bg-black selection:text-white' }`}>
      <Container>
        <div className="grid grid-cols-3 lg:grid-cols-4 text-xl leading-none lg:text-2xl lg:leading-none border-b border-b-current pt-4 pb-3 lg:pt-4 lg:pb-3 items-center">
          <div className="col-span-1 text-left">
            <div className="lg:flex lg:space-x-5">
              <Link href="/" className="inline-block lg:block">S<span className="hidden lg:inline">am</span><span className="hidden lg:inline">&nbsp;</span>G<span className="hidden lg:inline">oddard</span>&nbsp;</Link>
              <span className="inline lg:block">&apos;89 —</span>
            </div>
          </div>

          <div className="col-span-1 text-center hidden lg:block">
            <span className="block">Available July &apos;23</span>
          </div>
          
          <div className="col-span-1">
            <nav className="ml-auto flex space-x-3 lg:space-x-5 justify-center text-center">
              <Link href="/" className="flex items-center italic">
                <span className={`block w-[6px] lg:w-2 h-[6px] lg:h-2 bg-current rounded-full mr-[6px] translate-y-[-2px] ${router.asPath == '/' ? 'scale-[1]' : 'scale-[0]' }`}></span>
                <span className="block">Works</span>
              </Link>
              <Link href="/about" className="flex items-center italic">
                <span className={`block w-[6px] lg:w-2 h-[6px] lg:h-2 bg-current rounded-full mr-[6px] translate-y-[-2px] ${router.asPath == '/about' ? 'scale-[1]' : 'scale-[0]' }`}></span>
                <span className="block">About</span>
              </Link>
            </nav>
          </div>

          <div className="col-span-1 text-right">
            <Link href="mailto:hello@samgoddard.co.uk" className="block">Let&apos;s Collab<span className="hidden lg:inline">orate</span></Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
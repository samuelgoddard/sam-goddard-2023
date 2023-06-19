import Container from '@/components/container'
import { useLenis } from "@studio-freight/react-lenis";

export default function Footer() {
  const lenis = useLenis();

  return (
    <footer className="">
      <Container>
        <div className="grid grid-cols-2 text-lg leading-none lg:text-xl lg:leading-none border-t border-current pt-4 pb-3 lg:pt-4 lg:pb-3 items-center">
          <div className="col-span-1">
            <nav className="ml-auto flex space-x-3 lg:space-x-4">
              <a href="https://twitter.com/samuelgoddard" target="_blank" rel="noopener noreferrer" className="block italic group"><span className="block relative overflow-hidden">Twitter <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-100%] lg:group-hover:translate-x-0"></span></span></span></a>
              <a href="https://www.linkedin.com/in/sam-goddard-shiftwalk/" target="_blank" rel="noopener noreferrer" className="block italic group"><span className="block relative overflow-hidden">LinkedIn <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-100%] lg:group-hover:translate-x-0"></span></span></span></a>
              <a href="https://github.com/samuelgoddard" target="_blank" rel="noopener noreferrer" className="block italic group"><span className="block relative overflow-hidden">Github <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-100%] lg:group-hover:translate-x-0"></span></span></span></a>
              <a href="mailto:hello@samgoddard.co.uk" className="block italic group"><span className="block relative overflow-hidden">Email <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-100%] lg:group-hover:translate-x-0"></span></span></span></a>
            </nav>
          </div>
          <div className="col-span-1 text-right flex justify-end">
            <button onClick={()=> lenis?.scrollTo(0)} className="block italic group border-none outline-none focus:border-none focus:outline-none"><span className="block relative overflow-hidden">Back To Top <span className="absolute inset-0 w-full h-full flex items-center justify-start"><span className="block transition-transform ease-in-out duration-[350ms] w-full h-[1px] bg-current translate-y-[-100%] translate-x-[-100%] lg:group-hover:translate-x-0"></span></span></span></button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
import Container from '@/components/container'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="grid grid-cols-2 text-lg leading-none lg:text-xl lg:leading-none border-t border-current pt-4 pb-3 lg:pt-4 lg:pb-3 items-center">
          <div className="col-span-1">
            <nav className="ml-auto flex space-x-3 lg:space-x-4">
              <a href="https://twitter.com/samuelgoddard" target="_blank" rel="noopener noreferrer" className="block italic">Twitter</a>
              <a href="https://www.linkedin.com/in/sam-goddard-shiftwalk/" target="_blank" rel="noopener noreferrer" className="block italic">LinkedIn</a>
              <a href="https://github.com/samuelgoddard" target="_blank" rel="noopener noreferrer" className="block italic">Github</a>
              <a href="mailto:hello@samgoddard.co.uk" className="block italic">Email</a>
            </nav>
          </div>
          <div className="col-span-1 text-right">
            <a href="#" className="block italic">Back to top</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
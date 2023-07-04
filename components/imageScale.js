import { m, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function ImageScale({ image, w, h, p, alt, sizes }) {
  const ref = useRef(null)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0% 45%", "end start"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[1, 50],{ clamp: false })
  
  return (
    <m.div style={{ y: scale }} className="will-change-transform absolute inset-0">
      <Image
        fill
        src={image}
        alt={alt}
        priority
        className={`w-full h-full inset-0 object-cover object-center transition-all ease-ak duration-[1000ms] will-change-transform mt-[-4%] ${imageIsLoaded ? 'scale-[1.075]' : 'scale-[1.1]' }`}
        sizes={sizes ? sizes : `(max-width: 1024px) 100vw,90vw`}
        ref={ref}
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
    </m.div>
  )
}
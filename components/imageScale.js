import { m, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

export default function ImageScale({ image, w, h, p, alt }) {
  const ref = useRef(null)
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0% 35%", "end start"]
  })
  
  const scale = useTransform(scrollYProgress,[0, 1],[1, 1.35],{ clamp: false })
  
  return (
    <m.div style={{ scale: scale }} className="will-change-transform absolute inset-0">
      <Image
        fill
        src={image}
        alt={alt}
        className={`w-full h-full inset-0 object-cover object-center transition-all ease-ak duration-[1000ms]  ${imageIsLoaded ? 'scale-1' : 'scale-105' }`}
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
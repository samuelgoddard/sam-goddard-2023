import React from 'react'
import { m } from 'framer-motion'

export function SplitText({ children, display, text, indent, ...rest }) {
  let words = children.split(' ')
  return words.map((word, i) => {
    return (
      <span
        key={children + i}
        className="block overflow-hidden"
      >
        <m.span
          {...rest}
          className={`block overflow-hidden will-change-transform`}
          custom={i}
        >
          <span className={`block mb-0 pb-0 pr-[1px] ${ (indent && i == 0) && 'ml-[10vw]'}`}>
            <span className="block ms-text-adjust">
              {word + (i !== words.length - 1 ? '\u00A0' : '')}
            </span>
          </span>
        </m.span>
      </span>
    )
  })
}
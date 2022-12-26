'use client'

import { motion } from 'framer-motion'
import { prepareAnimatableContent } from 'lib/utils/prepareAnimatableContent'
import asReact, { HTMLReactParserOptions, Element, domToReact } from 'html-react-parser'

const parserOptions: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.attribs.class === 'character-animatable') {
      return <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: Math.random() * 0.5,
          duration: 0.5,
          easing: 'circIn',
        }}
      >
        {domToReact(domNode.children)}
      </motion.span>
    }
  }
}

export const LoadablePage: React.FC<{
  wrappedContent: string,
}> = ({ wrappedContent }) => {
  return <>{asReact(wrappedContent, parserOptions)}</>
}

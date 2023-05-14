/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  config?: {
    delay?: number
  }
}

function Reveal({ children, config }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {})
  const animationControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      animationControls.start('visible')
    }
  }, [isInView])

  return (
    <div
      ref={ref}
      style={{ position: 'relative', width: '100%' }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{
          duration: 0.5,
          delay: config?.delay ?? 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal

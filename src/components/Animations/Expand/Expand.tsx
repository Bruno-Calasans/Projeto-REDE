/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ExpandProps {
  children: React.ReactNode
  config?: {
    delay?: number
    fromLeft?: boolean
  }
}

function Expand({ children, config }: ExpandProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {})
  const animationControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      animationControls.start('expand')
    }
  }, [isInView])

  return (
    <div
      ref={ref}
      style={{ width: '100%' }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: config?.fromLeft ? -100 : 100 },
          expand: { opacity: 1, x: 0 },
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

export default Expand

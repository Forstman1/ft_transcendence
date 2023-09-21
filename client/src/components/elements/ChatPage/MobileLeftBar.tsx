import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'


export default function MobileLeftBar({LeftIsOpen, setLeftIsOpen}: any) {

    const ref = React.useRef(null)
    const inView = useInView(ref)

    
  if (!inView) {
    setLeftIsOpen(false)
  }

    const sidebar = {
        open: (height = 1000) => ({
          width: "300px",
          clipPath: `circle(${height * 2 + 200}px at 90% 90%)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          width: 0,
          clipPath: `circle(30px at 10% 90%)`,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };

  return (
    <Box ref={ref} className='h-screen bg-opacity-30 bg-black w-[300px] overflow-y-scroll border-r-[3px] border-r-black gap-10 pt-6 z-0 sm:[300] md:hidden '
    as={motion.div}
    initial={false}
    animate={LeftIsOpen ? "open" : "closed"}
    variants={sidebar}
    >
    </Box>
  )
}

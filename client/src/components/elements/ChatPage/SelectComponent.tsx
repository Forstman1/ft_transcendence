import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Toast, useToast } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';



export default function SelectComponent() {


  const [isOpen, setIsOpen] = useState(false)
  const [Chosen, setChosen] = useState("Channels")
  const Toast = useToast
  const Channels = [

    { name: "General" },
    { name: "Random" },
    { name: "Music" },
    { name: "Anime" },

  ]

  return (
    <motion.div
      className="flex justify-center items-center flex-col gap-8"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <Button
        as={motion.button}
        size={"lg"}
        width={"300px"}
        justifyContent={"space-between"}
        // whileTap={{ scale: 0.90 }}
        onClick={() => setIsOpen(!isOpen)}
        className='bg-[#e2e8f1]'
      >
        {Chosen}
        <motion.div
          variants={{
            open: { rotate: 180 },
            close: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon
            fontSize={"3xl"}
          />
        </motion.div>
      </Button>
      <motion.ul
        className={`Channels py-7 flex flex-col gap-10 bg w-[300px] h-[200px] bg-[#e2e8f1] bg-opacity-80 text-white items-center overflow-y-auto scrollbar scrollbar-thumb-white scrollbar-thin`}
        variants={{
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.9
            }
          },
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.9,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
        }}
      >
        {Channels.map((channel) =>
          <li className=' cursor-pointer text-black font-bold' onClick={() => { setChosen(channel.name); setIsOpen(false)}}>
            {channel.name}
          </li>
        )}
      </motion.ul>
    </motion.div>
  )
}

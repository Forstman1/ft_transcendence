"use client";
import { Box, Button } from '@chakra-ui/react'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import FooterWaves from '../../../../../assets/icons/wavesOpacity.svg';
import {HiOutlineChatBubbleLeftEllipsis} from 'react-icons/hi2'
import {HiOutlineChatBubbleLeftRight} from 'react-icons/hi2'
import {IoSettingsOutline} from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux';
import { setLeft, setRight, setMidle } from '@/redux/slices/chat/MobileSlice';
import LeftSidebar from '../leftsidebar/LeftSidebar';




export default function MobileFooter({LeftIsOpen, setLeftIsOpen, RightIsOpen, setRightIsOpen}: any) {

  const { MidleClice } = useSelector((state: any) => state.mobile)
  const { LeftClice } = useSelector((state: any) => state.mobile)
  const { RightClice } = useSelector((state: any) => state.mobile)
  const dispatch = useDispatch()

  return (

    <Box className="Footer text-xl relative z-10 md:hidden">
        <Image src={FooterWaves} priority={false} alt="FooterWave" className="w-full rotate-180 h-[17px]" />
        <Box className="w-full h-[75px] bg-neutral-950 sticky top-0 z-100 flex justify-between items-center px-3 pb-4">
          <Button className="h-14 w-32 gap-1  flex rounded-3xl text-lg" variant={'unstyled'}
          onClick={() => {
            dispatch(setLeft(!LeftClice.LeftValue))
            dispatch(setRight(false))
            dispatch(setMidle(LeftClice.LeftValue))
          }}
          textColor={LeftClice.LeftValue ? "black": "white"}
          style={{backgroundColor: LeftClice.LeftValue ? "white": "black"}}
          
          >
            <HiOutlineChatBubbleLeftRight/>
            Chat List
          </Button>
          <Button className="h-14 w-32 gap-2 text-xl flex rounded-3xl"
          onClick={() => {
            dispatch(setLeft(false))
            dispatch(setRight(false))
            dispatch(setMidle(!MidleClice.MidleValue))
          }}
          textColor={MidleClice.MidleValue ? "black": "white"}
          style={{backgroundColor: MidleClice.MidleValue ? "white": "black"}}

          >
            <HiOutlineChatBubbleLeftEllipsis/>
            Chat
          </Button>
          <Button className="h-14 w-32 gap-1 flex rounded-3xl text-lg"
          onClick={() => {
            dispatch(setLeft(false))
            dispatch(setRight(!RightClice.RightValue))
            dispatch(setMidle(RightClice.RightValue))
          }}
          textColor={RightClice.RightValue ? "black": "white"}
          style={{backgroundColor: RightClice.RightValue  ? "white": "black"}}
          >
            <IoSettingsOutline />
            Settings
          </Button>
        </Box>
      </Box>
  )
}

'use client';

import { Flex, Box, Avatar, Container } from '@chakra-ui/react'
import Image from 'next/image'
import active  from '@/../public/Icons/online.svg'
import ChartPie from '@/components/userPage/ChartPie';
import Collection from '@/components/userPage/Collection';
import ChartLine from '@/components/userPage/CartLine';
import FriendList from '@/components/userPage/FriendList';
import Achievements from '@/components/userPage/Achievements'
import MatchHistory from '@/components/userPage/MatchHistory';



export default function userPage() {
  return (
    <div className="w-full h-full py-16 container m-auto">
        <Flex className='flex-wrap lg:flex-nowrap lg:space-x-8'>
            {/* Profile */}
            <Box className='mb-8 p-0 mr-0 border-solid border-2 border-gray-900 custom-shadow rounded w-full lg:w-1/3' p={4} color="black">
                <div className='w-1/2 bg-black text-white p-1 text-xl rounded-br-lg'>
                    <Image src={active} alt='online' width={30} height={30} className='inline-block mr-4'/>
                    Available
                </div>

                <Container>
                    <Flex className='justify-between pt-2 pb-6'>
                        <div className='flex flex-col justify-center font-bold text-3xl'>
                            <h3>Hssain Aitkadir</h3>
                            <h3 className='text-gray-400'>@haitkadir</h3>
                        </div>
                        <Avatar className='border-solid border-2 border-gray-900 custom-shadow' size="lg" name="Segun Adebayo" src="https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg" />
                    </Flex>
                </Container>
            </Box>
            {/* Stats */}
            <Box className='flex-grow mb-8 p-0 mr-0 border-solid border-2 border-gray-900 custom-shadow rounded' p={4} color="black">
                <Flex className='flex-wrap md:flex-nowrap'>
                    <div className='bg-gray-200 border-r-2 border-black w-[100%] md:basis-1/12'>
                        <h4 className='font-bold text-center bg-black text-white text-xl border-r border-white md:h-[15%]'>Team</h4>
                         <div className='md:h-[85%]'>
                            <Collection type={'pandora'} />
                         </div>
                    </div>
                    <div className=' border-r-2 border-black w-[100%] md:basis-7/12'>
                        <h4 className='font-bold text-center bg-black text-white text-xl border-r border-white'>Activity</h4>
                        <div>
                            <ChartLine />
                        </div>
                    </div>
                    <div className=' w-[100%] md:basis-1/3'>
                        <h4 className='font-bold text-center bg-black text-white text-xl border-l border-white'>Stats</h4>
                        <div>
                            <ChartPie chartData={{wins: 10, loses: 5, draws: 2}}/>
                        </div>
                    </div>
                </Flex>
            </Box>
        </Flex>


        <Flex className='h-[540px] flex-wrap xl:flex-nowrap xl:space-x-8'>
            <div className='w-full h-full basis-full xl:basis-1/2 border-2 border-black rounded custom-shadow mb-4'>
                <FriendList />
            </div>

            <div className='w-full basis-full xl:basis-1/2'>
                <Flex className='w-full h-full flex-col justify-between md:space-y-8'>
                    <div className='h-full border-black border-2 rounded custom-shadow min-h-[250px] xl:min-h-fit'>
                        <Achievements />
                    </div>
                    <div className='h-full border-black border-2 rounded custom-shadow min-h-[250px] xl:min-h-fit'>
                        <MatchHistory />
                    </div>
                </Flex>
            </div>
        </Flex>



    </div>
  )
}

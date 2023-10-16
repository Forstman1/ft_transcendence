import Image  from 'next/image'
import { Flex, Icon } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import achsrc from '@/../public/Achievements/medal.svg'
import locked from '@/../public/Achievements/Key-yellow.svg'


type AchievementType =  Array<{
    title: string;
    locked: boolean;
    imageSrc: string;
}>

const data: AchievementType = [
    {'title':'Master Level', 'locked': false, 'imageSrc': achsrc.src},
    {'title':'Master Level', 'locked': true, 'imageSrc': achsrc.src},
]

export default function Achievements() {
  return (
    <>
        <div>
            <Flex className='justify-between font-bold text-lg'>
                <h2 className='bg-black text-white px-2 rounded-br'>Achievements</h2>
                <button className='border-black border-l-2 border-b-2 rounded-bl px-2'>
                    <Icon as={TriangleDownIcon} boxSize={4} />
                    Unlocked
                </button>
            </Flex>
            <Flex className='p-2 space-x-2'>
                {
                data.map((item, index) => (

                    <div className="w-16 h-16 border-black border-2 rounded-full relative overflow-hidden" key={index}>
                        <div className=" absolute inset-x-0 inset-y-0 p-1">
                            <img src={item.imageSrc} alt={item.title}  className="w-full h-full" />
                            {/* <h2 className="text-lg font-semibold">{item.title}</h2> */}
                        </div>
                        {item.locked && (
                            <Flex className=" bg-gray-500 opacity-75 absolute inset-x-0 inset-y-0 justify-center items-center">
                                <img src={locked.src} alt="Locked" className="w-8 h-8" />
                            </Flex>
                        )}
                    </div>
                ))
                }
            </Flex>
        </div>
    </>
  )
}

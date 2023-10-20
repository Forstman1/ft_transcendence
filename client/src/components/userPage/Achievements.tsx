import { useState } from 'react'
import { Flex, Icon, Tooltip } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import achvmt6 from '@/../public/Achievements/ponger.svg'
import achvmt from '@/../public/Achievements/onestar.svg'
import achvmt1 from '@/../public/Achievements/twostars.svg'
import achvmt2 from '@/../public/Achievements/threestars.svg'
import achvmt3 from '@/../public/Achievements/firsttrophy.svg'
import achvmt4 from '@/../public/Achievements/fivedraws.svg'
import achvmt5 from '@/../public/Achievements/drawer.svg'
import achvmt7 from '@/../public/Achievements/legend.svg'
import achvmt10 from '@/../public/Achievements/king.svg'
import locked from '@/../public/Achievements/Key-yellow.svg'


type AchievementType =  Array<{
    title: string;
    locked: boolean;
    imageSrc: string;
}>

const data: AchievementType = [
    {'title':'PONGER',          'locked': false, 'imageSrc': achvmt6.src},
    {'title':'LEVEL 1',         'locked': false, 'imageSrc': achvmt.src},
    {'title':'LEVEL 2',         'locked': false, 'imageSrc': achvmt1.src},
    {'title':'LEVEL 3',         'locked': false, 'imageSrc': achvmt2.src},
    {'title':'CHAMPION',        'locked': true, 'imageSrc': achvmt3.src},
    {'title':'DRAW MASTER',     'locked': false, 'imageSrc': achvmt4.src},
    {'title':'Master Level',    'locked': true, 'imageSrc': achvmt5.src},
    {'title':'Master Level',    'locked': false, 'imageSrc': achvmt.src},
    {'title':'LEGEND',    'locked': true, 'imageSrc': achvmt7.src},
    {'title':'KING OF THE HILL',    'locked': true, 'imageSrc': achvmt10.src},
]

export default function Achievements() {
    const [showUnlocked, setShowUnlocked] = useState(false);
    const [showAll, setShowAll] = useState(true);
  
    const filterdData = data.filter((item) => {
      if (showAll) {
        return true;
      }
      if (showUnlocked) {
        return !item.locked;
      }
      return item.locked;
    });

  return (
    <>
        <div className='w-full h-full'>
            <Flex className='justify-between font-bold text-lg'>
                <h2 className='bg-black text-white px-2 rounded-br'>Achievements</h2>
                <button className='border-black border-l-2 border-b-2 rounded-bl px-2'
                    onClick={() => {
                        if (showAll) {
                          setShowAll(false);
                          setShowUnlocked(true);
                        } else if (showUnlocked) {
                          setShowUnlocked(false);
                        } else {
                          setShowAll(true);
                        }
                      }}
                >
                    <Icon as={TriangleDownIcon} boxSize={4} />
                    {showAll ? 'All' : (showUnlocked ? 'Unlocked' : 'Locked')}
                </button>
            </Flex>
            <div className='h-[calc(100%-30px)] grid grid-cols-5 grid-rows-2 gap-2 content-center'>
                {
                filterdData.map((item, index) => (

                    <div className="w-full h-full grid place-items-center" key={index}>
                        <Tooltip label={item.title} placement='right' bg='black'>
                            <div className="h-16 w-16 border-2 rounded-full relative overflow-hidden">
                                <div className=" absolute inset-x-0 inset-y-0 p-1">
                                    <img src={item.imageSrc} alt={item.title}  className="w-full h-full" />
                                </div>
                                {item.locked && (
                                    <Flex className=" bg-black opacity-[60%] absolute inset-x-0 inset-y-0 justify-center items-center">
                                        {/* <img src={locked.src} alt="Locked" className="w-8 h-8" /> */}
                                    </Flex>
                                )}
                            </div>
                        </Tooltip>

                    </div>
                ))
                }
            </div>
        </div>
    </>
  )
}

import { useState } from 'react'
import { Flex, Icon, Tooltip } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import achvmt1 from '@/../public/Achievements/one.png'
import achvmt2 from '@/../public/Achievements/two.png'
import achvmt3 from '@/../public/Achievements/three.png'
import achvmt4 from '@/../public/Achievements/four.png'
import achvmt5 from '@/../public/Achievements/five.png'
import achvmt6 from '@/../public/Achievements/six.png'
// import achvmt5 from '@/../public/Achievements/drawer.svg'
// import achvmt7 from '@/../public/Achievements/legend.svg'
// import achvmt10 from '@/../public/Achievements/king.svg'
// import locked from '@/../public/Achievements/Key-yellow.svg'


type AchievementType =  Array<{
    title: string;
    locked: boolean;
    imageSrc: string;
}>

const data: AchievementType = [
    {'title':'Bronze',          'locked': false, 'imageSrc': achvmt1.src},
    {'title':'Silver',         'locked': false, 'imageSrc': achvmt2.src},
    {'title':'Gold',         'locked': true, 'imageSrc': achvmt3.src},
    {'title':'Platinium',         'locked': true, 'imageSrc': achvmt4.src},
    {'title':'Emirald',        'locked': true, 'imageSrc': achvmt5.src},
    {'title':'Hamas',     'locked': true, 'imageSrc': achvmt6.src},
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
            <div className='h-[calc(100%-30px)] grid grid-cols-3 grid-rows-2 gap-2 content-center'>
                {
                filterdData.map((item, index) => (

                    <div className="w-full h-full grid place-items-center" key={index}>
                        <Tooltip label={item.title} placement='right' bg='black'>
                            <div className={`h-24 w-24 border-2 rounded-full overflow-hidden text-center ${item.locked ? 'filter grayscale blur-sm': null}`}>
                                {/* <div className=" filter grayscale contrast-75"> */}
                                    <img src={item.imageSrc} alt={item.title}  className="w-full h-full object-cover " />
                                {/* </div> */}
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

import { useState } from 'react'
import { Flex, Icon, Avatar } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'



type matchInfoType =  Array<{
    username: string;
    score: number;
    opponentScore: number;
    profilePicSrc: string;
}>

const data: matchInfoType = [
    {'username':'sahafid', 'score': 10, 'opponentScore': 7, 'profilePicSrc': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
    {'username':'haitkadir', 'score': 5, 'opponentScore': 7, 'profilePicSrc': 'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg'},
    {'username':'sahafid', 'score': 15, 'opponentScore': 15, 'profilePicSrc': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
    {'username':'haitkadir', 'score': 5, 'opponentScore': 7, 'profilePicSrc': 'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg'},
    {'username':'sahafid', 'score': 10, 'opponentScore': 7, 'profilePicSrc': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
    {'username':'haitkadir', 'score': 5, 'opponentScore': 7, 'profilePicSrc': 'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg'},
    // {'username':'sahafid', 'score': 15, 'opponentScore': 15, 'profilePicSrc': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
    // {'username':'haitkadir', 'score': 5, 'opponentScore': 7, 'profilePicSrc': 'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg'},
]

export default function MatchHistory() {
    const [showWins, setShowWins] = useState(false);
    const [showLoses, setShowLoses] = useState(false);
    const [showAll, setShowAll] = useState(true);
  
    const filterdData = data.filter((item) => {
        if (showAll)
            return true;
        if (showWins)
            return item.score > item.opponentScore;
        if (showLoses)
            return item.score < item.opponentScore;
        return item.score == item.opponentScore;
    });

  return (
    <>
        <div className=' h-full'>
            <Flex className='justify-between font-bold text-lg'>
                <h2 className='bg-black text-white px-2 rounded-br'>Match History</h2>
                <button className='border-black border-l-2 border-b-2 rounded-bl px-2'
                    onClick={() => {
                        if (showAll) {
                          setShowAll(false);
                          setShowWins(true);
                        } else if (showWins) {
                          setShowWins(false);
                          setShowLoses(true);
                        } else if (showLoses) {
                            setShowLoses(false);
                        } else {
                          setShowAll(true);
                        }
                      }}
                >
                    <Icon as={TriangleDownIcon} boxSize={4} />
                    {showAll ? 'All' : (showWins ? 'Wins' : (showLoses ? 'Loses' : 'draws'))}
                </button>
            </Flex>
            <Flex className='h-[calc(100%-30px)] max-w-[100%] overflow-x-scroll space-x-2 p-2'>
                {
                filterdData.map((item, index) => (

                    <Flex className="custom-bg h-full flex-col rounded-xl border-black border-2 min-w-[140px]" key={index}>
                        <h2 className='text-lg px-1 font-bold text-gray-400 text-center'>@{item.username}</h2>
                        <div className='w-fit m-auto rounded-full border-black border-2'>
                            <Avatar size='xl' src={item.profilePicSrc} className='border-green-600 border-8' />
                        </div>
                        <h2 className='text-white text-center text-xl font-bold'>{`${item.score} - ${item.opponentScore}`}</h2>
                    </Flex>
                ))
                }
            </Flex>
        </div>
    </>
  )
}

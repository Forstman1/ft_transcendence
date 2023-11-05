import { useState } from 'react'
import { Flex, Icon, Avatar } from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'



type matchInfoType =  Array<{
    score: number;
    profile: string;
    opponentScore: number;
    opponentProfile: string;
}>

const data: matchInfoType = [
    {'score': 10, 'profile':'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg', 'opponentScore': 7, 'opponentProfile': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
    {'score': 5, 'profile':'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg', 'opponentScore': 7, 'opponentProfile': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
    {'score': 15, 'profile':'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg', 'opponentScore': 15, 'opponentProfile': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
    {'score': 5, 'profile':'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg', 'opponentScore': 7, 'opponentProfile': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
    {'score': 10, 'profile':'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg', 'opponentScore': 7, 'opponentProfile': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
    {'score': 5, 'profile':'https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg', 'opponentScore': 7, 'opponentProfile': 'https://avatars.githubusercontent.com/u/76266668?v=4'},
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
    const checkMatchStatus = (score: number, opponentScore: number) => {
        const matchStatus: {win:string;lose:string;draw:string;} = {'win':'border-green-600', 'lose':'border-red-600', 'draw':'border-gray-400'};
        if (score > opponentScore)
            return matchStatus.win;
        if (score < opponentScore)
            return matchStatus.lose;
        if (opponentScore == score)
            return matchStatus.draw;
    }

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

                    <Flex className="custom-bg h-[180px] flex-row rounded-xl border-black border-2 min-w-[150px]" key={index}>
                        <Flex className='w-[50%] flex-col justify-around border-dashed border-r-2 border-gray-400'>
                            <h2 className='text-center text-4xl font-bold'>{item.score}</h2>
                            <div className='mx-auto rounded-full border-black border-2'>
                                <Avatar size='md' src={item.profile} className={`border-4 ${checkMatchStatus(item.score, item.opponentScore)}`} />
                            </div>
                        </Flex>
                        <Flex className='w-[50%] flex-col justify-around'>
                            <h2 className='text-center text-4xl font-bold'>{item.opponentScore}</h2>
                            <div className='mx-auto rounded-full border-black border-2'>
                                <Avatar size='md' src={item.opponentProfile} className={`border-4 ${checkMatchStatus(item.opponentScore, item.score)}`} />
                            </div>
                        </Flex>
                    </Flex>
                ))
                }
            </Flex>
        </div>
    </>
  )
}



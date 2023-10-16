import { Flex, Avatar, AvatarBadge, Icon } from "@chakra-ui/react"
import { TriangleDownIcon } from '@chakra-ui/icons'
import Collection from "./Collection"


export default function FriendList() {
  return (
    <>
        <div className='w-full'>
            <Flex className='justify-between border-b-2 border-black'>
                <h2 className='bg-black text-white py-1 px-4 text-xl'>Friend List</h2>
                <button className="py-1 px-4 text-xl border-l-2 border-solid border-black">
                    <Icon as={TriangleDownIcon} boxSize={4} /> Blocked
                </button>
            </Flex>
            <div className="h-48 overflow-auto">
                
                <Flex className="border-black border-b-2">
                    <Flex className="basis-1/2 p-2">
                        <Avatar size='lg' className="mr-4">
                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                        </Avatar>
                        <div className="font-bold">
                            <h2 className="text-black text-xl">Hssain Aitkadir</h2>
                            <h2 className="text-gray-400 text-lg">@haitkadir</h2>
                        </div>
                    </Flex>
                    <div className="basis-1/12 border-black border-r-2 border-l-2">
                        <Collection type='bios' />
                    </div>
                    <Flex className="basis-1/2 text-black items-center justify-around border-black border-r-2">
                        <h2 className="text-3xl">
                            #750
                        </h2>
                    </Flex>
                </Flex>

                <Flex className="border-black border-b-2">
                    <Flex className="basis-1/2 p-2">
                        <Avatar size='lg' className="mr-4">
                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                        </Avatar>
                        <div className="font-bold">
                            <h2 className="text-black text-xl">Hssain Aitkadir</h2>
                            <h2 className="text-gray-400 text-lg">@haitkadir</h2>
                        </div>
                    </Flex>
                    <div className="basis-1/12 border-black border-r-2 border-l-2">
                        <Collection type='bios' />
                    </div>
                    <Flex className="basis-1/2 text-black items-center justify-around border-black border-r-2">
                        <h2 className="text-3xl">
                            #750
                        </h2>
                    </Flex>
                </Flex>

                <Flex className="border-black border-b-2">
                    <Flex className="basis-1/2 p-2">
                        <Avatar size='lg' className="mr-4">
                            <AvatarBadge boxSize='1.25em' bg='green.500' />
                        </Avatar>
                        <div className="font-bold">
                            <h2 className="text-black text-xl">Hssain Aitkadir</h2>
                            <h2 className="text-gray-400 text-lg">@haitkadir</h2>
                        </div>
                    </Flex>
                    <div className="basis-1/12 border-black border-r-2 border-l-2">
                        <Collection type='bios' />
                    </div>
                    <Flex className="basis-1/2 text-black items-center justify-around border-black border-r-2">
                        <h2 className="text-3xl">
                            #750
                        </h2>
                    </Flex>
                </Flex>

            </div>
        </div>
    </>
  )
}

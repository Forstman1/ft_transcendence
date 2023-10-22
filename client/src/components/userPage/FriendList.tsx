import { Flex, Avatar, AvatarBadge, Icon } from "@chakra-ui/react"
import { TriangleDownIcon } from '@chakra-ui/icons'
import Collection from "./Collection"


type friendsType = Array<{
    id: string;
    fullname: string;
    username: string;
    collection: string;
    score: string;
    isOnline: boolean;
    img: string;
  }>

const data: friendsType = [
    {"id":"1" , "fullname":"Hssain Aitkadir", "username":"@haitkadir", "collection":"bios", "score":"750", "isOnline":true, "img":"https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg"},
    {"id":"2" ,"fullname":"Hssain Aitkadir", "username":"@haitkadir", "collection":"freax", "score":"200", "isOnline":false, "img":"https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg"},
    {"id":"3" ,"fullname":"Hssain Aitkadir", "username":"@haitkadir", "collection":"pandora", "score":"980", "isOnline":true, "img":"https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg"},
    {"id":"1" , "fullname":"Hssain Aitkadir", "username":"@haitkadir", "collection":"bios", "score":"750", "isOnline":true, "img":"https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg"},
    {"id":"2" ,"fullname":"Hssain Aitkadir", "username":"@haitkadir", "collection":"freax", "score":"200", "isOnline":false, "img":"https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg"},
    {"id":"3" ,"fullname":"Hssain Aitkadir", "username":"@haitkadir", "collection":"pandora", "score":"980", "isOnline":true, "img":"https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg"},
    {"id":"2" ,"fullname":"Hssain Aitkadir", "username":"@haitkadir", "collection":"freax", "score":"200", "isOnline":false, "img":"https://pbs.twimg.com/profile_images/1694707441437704193/lxUVfB4X_400x400.jpg"},
];


export default function FriendList() {
  return (
    <>
        <div className='w-full h-full overflow-hidden'>
            <Flex className='justify-between border-b-2 border-black'>
                <h2 className='bg-black text-white py-1 px-4 text-lg font-bold'>Friend List</h2>
                <button className="py-1 px-4 text-lg font-bold border-l-2 border-solid border-black">
                    <Icon as={TriangleDownIcon} boxSize={4} /> Blocked
                </button>
            </Flex>
            <div className="h-[calc(100%-30px)] overflow-y-scroll">
            {
            !data.length ? 'No friends Yet' :
            data.map((user) => (
                <Flex className="border-black border-b-2" key={user.id}>
                    <Flex className="basis-1/2 p-2">
                        <Avatar size="lg" src={user.img} className="mr-4">
                            <AvatarBadge boxSize="1.25em" bg={user.isOnline ? 'green.500' : 'gray.500'} />
                        </Avatar>
                        <div className="font-bold">
                            <h2 className="text-black text-xl">{user.fullname}</h2>
                            <h2 className="text-gray-400 text-lg">{user.username}</h2>
                        </div>
                    </Flex>
                    <div className="basis-1/12 border-black border-r-2 border-l-2">
                        <Collection type={user.collection} />
                    </div>
                    <Flex className="basis-1/2 text-black items-center justify-around border-black border-r-2">
                        <h2 className="text-3xl">#{user.score}</h2>
                    </Flex>
                </Flex>
            ))}
            </div>
        </div>
    </>
  )
}

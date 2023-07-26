import Link from 'next/link'
import React from 'react'
import Logo from '../../../assets/icons/Logo.svg'
import Image from 'next/image'
import wave from '../../../assets/icons/wave.svg'
import { Avatar, AvatarBadge, Text} from '@chakra-ui/react'



const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Game", href: "/gamePage" },
    { text: "Chat", href: "/chatPage" },
  ];

export default function Navbar() {

    // const [navActive, setNavActive] = useState(null);
    // const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <div className=" w-full h-[24vh] drop-shadow-xl">
          <nav className="flex items-center justify-between py-6 px-28 ">
              <Image src={wave} alt="wave" className="object-cover w-full" fill/>
            <div className="flex items-center flex-row space-x-52 relative">
              <Link href='/' className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src={Logo} alt="Logo" width={150} height={150} />
              </Link>
              <div className="flex space-x-10">
                {
                  MENU_LIST.map((item, idx) => (
                    <Link href={item.href} key={idx} className="text-xl text-white font-bold hover:text-yellow-500 hover:underline">
                      {item.text}
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className="flex items-center flex-row space-x-5 relative">
              <Text className="text-white	font-bold">UserName</Text>
              <Avatar>
                <AvatarBadge className='bg-green-500' boxSize="1.25em" border='none' />
              </Avatar>
            </div>
          </nav>
        </div>
    )
}
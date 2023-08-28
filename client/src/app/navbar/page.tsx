// import Link from "next/link";
// import React from "react";
// import Logo from "../../../assets/icons/Logo.svg";
// import Image from "next/image";
// import wave from "../../../public/bg-nav.svg";
// import { Avatar, AvatarBadge, Text } from "@chakra-ui/react";
// import { motion } from "framer-motion";

// const MENU_LIST = [
//   { text: "Home", href: "/" },
//   { text: "Game", href: "/gamePage" },
//   { text: "Chat", href: "/chatPage" },
// ];

// export default function Navbar() {

//   return (
//     <div className="drop-shadow-xl relative z-10 bg-slate-500 bg-img">
//       {/* <Image src={wave} alt="wave" className="object-cover w-full h-full" fill /> */}
//       <div className="flex items-center justify-between py-6 px-28 ">
//         <div className="flex items-center justify-between w-[30%]">
//           <Link
//             href="/"
//             className="relative flex items-center flex-shrink-0 text-text-primary mr-6"
//           >
//             <Image src={Logo} alt="Logo" width={150} height={150} />
//           </Link>
//           <nav className="flex items-center flex-row space-x-52 relative">
//             <ul className="flex space-x-10">
//               {MENU_LIST.map((item, idx) => (
//                 <li key={idx}>
//                   <Link
//                     href={item.href}
//                     className="relative text-xl text-text-primary font-bold hover:text-yellow-500"
//                   >
//                     {path === item.href ? (
//                       <motion.span
//                         layoutId="underline"
//                         className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-full top-6"
//                       />
//                     ) : null}
//                     {item.text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//         <div className="flex items-center flex-row space-x-5 relative">
//           <Text className="text-text-primary font-bold text-xl">UserName</Text>
//           <Avatar>
//             <AvatarBadge
//               className="bg-green-500"
//               boxSize="1.25em"
//               border="none"
//             />
//           </Avatar>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";


import {
	Box,
	Flex,
	Avatar,
	HStack,
	Text,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	AvatarBadge,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../assets/icons/Logo.svg";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { usePathname } from "next/navigation";
import wave from "../../../public/two.svg";

const GameRouter = ["/gamePage/gameFriendPage", "/gamePage/gameBotPage"];
interface Props {
	children: React.ReactNode;
}

const Links = [
	{ text: "Home", href: "/" },
	{ text: "Game", href: "/gamePage" },
	{ text: "Chat", href: "/chatPage" },
];

const NavLink = (props: Props) => {
	const { children } = props;

	return (
		<Box
			as="a"
			px={2}
			py={1}
			rounded={"md"}
			_hover={{
				textDecoration: "none",
				bg: useColorModeValue("gray.200", "gray.700"),
			}}
			href={"#"}
		>
			{children}
		</Box>
	);
};

export default function Simple() {
	let path = usePathname();

	if (GameRouter.includes(path)) {
		path = "/gamePage";
	}
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Image src={wave} alt="wave" className="object-cover absolute top-0 left-0 w-screen" />
			<Box
				px={4}
				className="absolute top-0 left-0 w-full z-10"
			>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
						className="bg-slate-50"
					/>
					<HStack spacing={8} alignItems={"center"}>
						<Box>
							<Image src={Logo} alt="Logo"/>
						</Box>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}
						>
							{Links.map((item, idx) => (
								<Link
									key={idx}
									href={item.href}
									className={`relative text-xl text-text-primary font-bold hover:text-yellow-500 \
										link-underline link-underline-black ${
											path === item.href ? "link-underline-trigger" : ""
										}`}
										>
									{item.text}
								</Link>
							))}
						</HStack>
					</HStack>
					<Flex alignItems={"center"}>
						<Menu>
							<MenuButton
								as={Button}
								rounded={"full"}
								variant={"link"}
								cursor={"pointer"}
								minW={0}
							>
								<Avatar
									size={"sm"}
									src={
										"https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
									}
								>
									<AvatarBadge boxSize='1.25em' bg='green.500' />
								</Avatar>
							</MenuButton>
							<MenuList>
								<MenuItem>View Profile</MenuItem>
								<MenuDivider />
								<MenuItem>Logout</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
						{Links.map((item, idx) => (
								<Link
									key={idx}
									href={item.href}
									className={`relative text-xl text-text-primary font-bold hover:text-yellow-500 \
										link-underline link-underline-black ${
											path === item.href ? "link-underline-trigger" : ""
										}`}
										>
									{item.text}
								</Link>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
}

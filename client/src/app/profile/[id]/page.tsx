"use client";

import { Flex, Box, Avatar, Icon } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

import ChartPie from "@/components/userPage/ChartPie";
import Coalition from "@/components/userPage/Coalitions";
import ChartLine from "@/components/userPage/ChartLine";
import FriendList from "@/components/userPage/FriendList";
import Achievements from "@/components/userPage/Achievements";
import MatchHistory from "@/components/userPage/MatchHistory";
import AddFriend from "@/components/userPage/AddFriend";

import { useQuery } from "react-query";
import { getUser } from "@/utils/profile/fetchingProfileData";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import RestrictedRoute from "@/components/RestrictedRoute";

type userProfileData = {
	id: string;
	username: string;
	fullname: string;
	email: string;
	avatarURL: string;
	coalitionName: string;
	isOnline: boolean;
	isInGame: boolean;
	userGamesXp: number;
};

export default function Profile({ params }: any) {
	const logedUserId = useSelector((state: any) => state.authUser.userId);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	let interval: any = null;

	const {
		data: fetchedData,
		error,
		isLoading,
		refetch,
	} = useQuery("userprofiledata", () => getUser(params.id));

	// useEffect(() => {
	//     console.log(`url changed from ................`)
	// }, [pathname, searchParams]);

	useEffect(() => {
		interval = setInterval(() => {
			const profilePath = pathname.split("/")[1]; // Extract the second part of the path
			console.log('profile Path: ', profilePath);
			// if (profilePath === "profile") {
			// 	// Do something with the '/profile/' path
			// 	//   console.log('User is on the profile page');
			// }
			refetch();
		}, 5000);
	}, []);

	if (isLoading) {
		return (
			<RestrictedRoute>
				<div className=" relative h-full w-full text-center">
					<div
						role="status"
						className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
					>
						<svg
							aria-hidden="true"
							className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
					</div>
				</div>
			</RestrictedRoute>
		);
	}
	if (error) {
		return (
			<RestrictedRoute>
				<div className=" relative h-full w-full text-center">
					<div
						role="status"
						className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
					>
						<h2>Opps an error caused try again</h2>
					</div>
				</div>
			</RestrictedRoute>
		);
	}
	if (!fetchedData) {
		return (
			<RestrictedRoute>
				<div className="relative h-full w-full text-center">
					<div
						role="status"
						className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
					>
						<h2 className=" text-4xl">
							{" "}
							404 | Cannot find user with Id: "{params.id}"
						</h2>
					</div>
				</div>
			</RestrictedRoute>
		);
	}

	const userData: userProfileData = fetchedData;

	return (
		<RestrictedRoute>
			<div className="w-full h-full py-40 container m-auto">
				<Flex className="flex-wrap lg:flex-nowrap lg:space-x-8">
					{/* Profile */}
					<Box
						className="mb-8 p-0 mr-0 border-solid border-2 border-gray-900 custom-shadow rounded w-full lg:w-1/3"
						p={4}
						color="black"
					>
						<Flex className="justify-between">
							<h2 className=" bg-black text-white p-1 text-xl rounded-br-lg">
								<span
									className={`inline-block w-5 h-5 rounded-full border mr-4 ${
										userData.isOnline
											? "bg-green-500"
											: "bg-gray-400"
									}`}
								></span>
								{userData.isOnline
									? userData.isInGame
										? "In Game"
										: "Online"
									: "Offline"}
							</h2>
							{params.id === logedUserId ? (
								<button
									onClick={() => {
										router.push(`/profile/settings`);
									}}
									className="bg-black text-white px-4 rounded-bl-lg hover:bg-gray-700"
								>
									<Icon as={MdSettings} /> Edit
								</button>
							) : (
								// <button className='bg-black text-white px-4 rounded-bl-lg hover:bg-gray-700'>
								//     <Icon as={MdSettings} /> Add Friend
								// </button>
								<AddFriend userData={userData} />
							)}
						</Flex>

						<Flex className="w-full h-[calc(100%-36px)] items-center">
							<Flex className="justify-around items-center w-full h-full py-6">
								<div className="flex flex-col justify-center font-bold text-3xl">
									<h3>{userData.fullname}</h3>
									<h3 className="text-gray-400">
										@{userData.username}
									</h3>
								</div>
								<Avatar
									className="border-solid border-2 border-gray-900 custom-shadow"
									size="xl"
									name={userData.fullname}
									src={userData.avatarURL}
								/>
							</Flex>
						</Flex>
					</Box>
					{/* Stats */}
					<Box
						className="flex-grow mb-8 p-0 mr-0 border-solid border-2 border-gray-900 custom-shadow rounded"
						p={4}
						color="black"
					>
						<Flex className="flex-wrap md:flex-nowrap lg:w-full lg:h-full">
							<div className="bg-gray-200 border-r-2 border-black w-full lg:h-full md:basis-1/12">
								<h4 className="font-bold text-center bg-black text-white text-xl border-r border-white md:h-[15%]">
									Team
								</h4>
								<div className="md:h-[85%]">
									<Coalition type={"bios"} />
								</div>
							</div>
							<div className=" border-r-2 border-black w-[100%] md:basis-7/12">
								<h4 className="font-bold text-center bg-black text-white text-xl border-r border-white">
									Activity
								</h4>
								<div>
									<ChartLine userId={params.id} />
								</div>
							</div>
							<div className=" w-[100%] md:basis-1/3">
								<h4 className="font-bold text-center bg-black text-white text-xl border-l border-white">
									Stats
								</h4>
								<div>
									<ChartPie userId={params.id} />
								</div>
							</div>
						</Flex>
					</Box>
				</Flex>

				<div className="h-[540px]  lg:grid grid-rows-2 grid-cols-2 grid-flow-col gap-8">
					<div className="lg:col-span-1 lg:row-span-2 h-full w-full mb-8 lg:mb-0 border-black border-2 rounded custom-shadow">
						<FriendList />
					</div>

					<div className="lg:col-span-1  min-h-[250px] lg:h-full w-full  mb-8 lg:mb-0 border-black border-2 rounded custom-shadow">
						<Achievements userId={params.id} />
					</div>
					<div className="lg:col-span-1 min-h-[250px] lg:h-full w-full  mb-8 lg:mb-0 border-black border-2 rounded custom-shadow">
						<MatchHistory userId={params.id} />
					</div>
				</div>
			</div>
		</RestrictedRoute>
	);
}

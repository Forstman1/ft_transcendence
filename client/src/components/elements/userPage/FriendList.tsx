import { Flex, Avatar, AvatarBadge } from "@chakra-ui/react";
import Collection from "./Coalitions";
import { useAppSelector } from "@/redux/store/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type friendsType = Array<{
	id: string;
	fullname: string;
	username: string;
	email: string;
	avatarURL: string;
	coalitionName: string;
	isOnline: boolean;
	userGamesXp: number;
}>;

export default function FriendList({ userId }: { userId: string }) {
	const socket = useAppSelector((state) => state.socket.socket);
	const [userData, setUserData] = useState<friendsType>([]);
	const router = useRouter();

	useEffect(() => {
		if (userId) {
			socket?.emit(`getFriendList`, userId);
			socket?.on(`updateFriendList`, async (Users: any) => {
                console.log(`updateFriendList`, Users)
				setUserData(Users);
			});
			socket?.on(`friendRequestAccepted`, async () => {
				socket?.emit(`getFriendList`, userId);
			});
            socket?.on(`friendRemoved`, async () => {
                socket?.emit(`getFriendList`, userId);
            })
		}
		return () => {
			socket?.off(`updateChatList`);
			socket?.off(`updateFriendList`);
		};
	}, [socket, userId]);

	return (
		<>
			<div className="w-full h-full overflow-hidden">
				<Flex className="justify-between border-b-2 border-black">
					<h2 className="bg-black text-white py-1 px-4 text-lg font-bold">
						Friend List
					</h2>
				</Flex>
				<div className="h-[calc(100%-30px)] overflow-y-scroll">
					{!userData.length ? (
						<h2 className=" font-bold text-xl text-center">
							What a fucking lonly
						</h2>
					) : (
						userData.map((user) => (
							<Flex
								className="border-black border-b-2"
								key={user.id}
							>
								<Flex className="basis-1/2 p-2">
									<button
										onClick={() => {
											router.push(`/profile/${user.id}`);
										}}
									>
										<Avatar
											size="lg"
											src={user.avatarURL}
											className="mr-4"
										>
											<AvatarBadge
												boxSize="1.25em"
												bg={
													user.isOnline
														? "green.500"
														: "gray.500"
												}
											/>
										</Avatar>
									</button>
									<div className="font-bold">
										<h2 className="text-black text-xl">
											{user.fullname}
										</h2>
										<h2 className="text-gray-400 text-lg">
											{user.username}
										</h2>
									</div>
								</Flex>
								<div className="basis-1/12 border-black border-r-2 border-l-2">
									<Collection type={user.coalitionName} />
								</div>
								<Flex className="basis-1/2 text-black items-center justify-around border-black border-r-2">
									<h2 className="text-3xl">
										#{user.userGamesXp}
									</h2>
								</Flex>
							</Flex>
						))
					)}
				</div>
			</div>
		</>
	);
}

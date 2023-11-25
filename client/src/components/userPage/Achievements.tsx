import { useState } from "react";
import { Flex, Icon, Tooltip } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import achvmt1 from "@/../public/Achievements/one.png";
import achvmt2 from "@/../public/Achievements/two.png";
import achvmt3 from "@/../public/Achievements/three.png";
import achvmt4 from "@/../public/Achievements/four.png";
import achvmt5 from "@/../public/Achievements/five.png";
import achvmt6 from "@/../public/Achievements/six.png";

import { useQuery } from 'react-query';
import { getUserAchievements } from '@/utils/profile/fetchingProfileData'

type AchievementType = Array<{
	title: string;
	locked: boolean;
	imageSrc: string;
}>;



const staticData: AchievementType = [
	{ title: "Bronze", locked: true, imageSrc: achvmt1.src },
	{ title: "Silver", locked: true, imageSrc: achvmt2.src },
	{ title: "Gold", locked: true, imageSrc: achvmt3.src },
	{ title: "Platinum", locked: true, imageSrc: achvmt4.src },
	{ title: "Emerald", locked: true, imageSrc: achvmt5.src },
	{ title: "Hamas", locked: true, imageSrc: achvmt6.src },
];


type dataType = {
    Bronze: boolean;
    Silver: boolean;
    Gold: boolean;
    Platinum: boolean;
    Emerald: boolean;
    Hamas: boolean;
};

type propType = {
    userId: string;
}

export default function Achievements({ userId }: propType) {
    
    const [showUnlocked, setShowUnlocked] = useState(false);
    const [showAll, setShowAll] = useState(true);
    
    
	const { 
            data: achievStatus,
            error,
            isLoading
        } = useQuery("achevements", () => getUserAchievements(userId));
    
    
    if(isLoading){
        return(
            <div className=" relative h-full w-full text-center">
                <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>

                </div>
            </div>
            );
        }
    if(error){
        return(
            <h2>Opps Achievements error</h2>
        );
    }

    const updatedData: AchievementType = staticData.map((achievement) => ({
        ...achievement,
        locked: achievStatus ? achievStatus[achievement.title] : true, 

    }));

	const filterdData = updatedData.filter((item) => {
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
			<div className="w-full h-full">
				<Flex className="justify-between font-bold text-lg">
					<h2 className="bg-black text-white px-2 rounded-br">
						Achievements
					</h2>
					<button
						className="border-black border-l-2 border-b-2 rounded-bl px-2"
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
						{showAll ? "All" : showUnlocked ? "Unlocked" : "Locked"}
					</button>
				</Flex>
				<div className="h-[calc(100%-30px)] grid grid-cols-3 grid-rows-2 gap-2 content-center">
					{filterdData.map((item, index) => (
						<div
							className="w-full h-full grid place-items-center"
							key={index}
						>
							<Tooltip
								label={item.title}
								placement="right"
								bg="black"
							>
								<div
									className={`h-24 w-24 border-2 rounded-full overflow-hidden text-center ${
										item.locked
											? "filter grayscale blur-sm"
											: null
									}`}
								>
									<img
										src={item.imageSrc}
										alt={item.title}
										className="w-full h-full object-cover "
									/>
								</div>
							</Tooltip>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

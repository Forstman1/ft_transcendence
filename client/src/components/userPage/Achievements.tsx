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
	{ title: "Bronze", locked: false, imageSrc: achvmt1.src },
	{ title: "Silver", locked: false, imageSrc: achvmt2.src },
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
    
    console.log(`Achievements userId: ${userId}`);
    
	const { 
            data: achievStatus,
            error,
            isLoading
        } = useQuery("achevements", () => getUserAchievements(userId));
    
    
    if(isLoading){
        return(
            <h2>Achievements loading ....</h2>
            );
        }
    if(error){
        return(
            <h2>Opps Achievements error</h2>
        );
    }

    console.log(`before------Achievements-----------:`);console.log(achievStatus);console.log(`:-----------------------after`);
  
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
									{/* <div className=" filter grayscale contrast-75"> */}
									<img
										src={item.imageSrc}
										alt={item.title}
										className="w-full h-full object-cover "
									/>
									{/* </div> */}
								</div>
							</Tooltip>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

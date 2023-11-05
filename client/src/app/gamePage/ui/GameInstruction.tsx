import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import animation4 from "../../../../assets/animations/animation4.json";
import Lottie from "lottie-react";
import {ArrowRightIcon} from "@chakra-ui/icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function GameInstruction({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(5px)",
        }}
      />
      <ModalOverlay />
      <ModalContent
        bg={`rgba(255, 255, 255, 0.50)`}
        className="relative duration-500 ease-in-out rounded-2xl shadow-2xl border-1 border-black flex justify-between items-center bg-gray-100"
      >
        <Lottie
          animationData={animation4}
          className="absolute inset-0 border-2 border-white rounded-[100%] w-full h-full z-[-1] opacity-10 bg-white"
        />
        <ModalHeader>
          <Text fontSize="2xl" fontWeight="bold">
            How to play
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className="flex flex-col space-y-2 w-[400px] ">
          <Text className="">
            <ArrowRightIcon className="inline-block mr-2" />
            General
          </Text>
          <p className="text-gray-500">
            Pong is a table tennis-themed arcade video game, featuring simple
            two-dimensional graphics, manufactured with love by our team.
          </p>
          <div className="flex flex-col  space-y-2  w-full px-5">
            <Text
              fontSize="lg"
              fontWeight="bold"
              className="underline decoration-2 hover:text-green-500"
            >
              1. Choose your game mode
            </Text>
            <div className="flex flex-col justify-center px-10 w-[400px]">
              <p className="text-gray-500">
                <span className="text-black font-bold hover:text-red-500">
                  Friend Mode:{" "}
                </span>
                Play with your friends
              </p>
              <p className="text-gray-500">
                <span className="text-black font-bold hover:text-red-500">
                  Training Mode:{" "}
                </span>
                Play with bots
              </p>
              <p className="text-gray-500">
                <span className="text-black font-bold hover:text-red-500">
                  Matchmaking:{" "}
                </span>
                Play with random players
              </p>
            </div>
          </div>
          <div className="flex flex-col  space-y-2 w-full px-5">
            <Text
              fontSize="lg"
              fontWeight="bold"
              className="underline decoration-2 hover:text-green-500"
            >
              2. Choose your theme
            </Text>
            <div className="flex flex-col justify-center px-10 w-[400px]">
              <p className="text-gray-500">
                <span className="text-black font-bold hover:text-red-500">
                  you can choose from 4 themes (playgroundColor and ballColor):{" "}
                </span>
                Dark-white, blue-Dark, green-white and yellow-purple
              </p>
            </div>
          </div>
          <div className="flex flex-col  space-y-2 w-full px-5">
            <Text
              fontSize="lg"
              fontWeight="bold"
              className="underline decoration-2 hover:text-green-500"
            >
              3. Choose your background
            </Text>
            <div className="flex flex-col justify-center px-10 w-[400px]">
              <p className="text-gray-500">
                <span className="text-black font-bold hover:text-red-500">
                  you can choose from 8 backgrounds:{" "}
                </span>
                8 different backgrounds or none
              </p>
            </div>
          </div>
          <div className="flex flex-col  space-y-2 w-full px-5">
            <Text
              fontSize="lg"
              fontWeight="bold"
              className="underline decoration-2 hover:text-green-500"
            >
              4. Choose your rounds and matches
            </Text>
            <div className="flex flex-col justify-center px-10 w-[400px]">
              <p className="text-gray-500">
                <span className="text-black font-bold hover:text-red-500">
                  you can choose from 5 rounds max and 5 matches max:{" "}
                </span>
                you will play number of matches in evry round
              </p>
            </div>
          </div>
          <div className="flex flex-col  space-y-2 w-full px-5">
            <Text
              fontSize="lg"
              fontWeight="bold"
              className="underline decoration-2 hover:text-green-500"
            >
              5. Player side
            </Text>
            <div className="flex flex-col justify-center px-10 w-[400px]">
              <p className="text-gray-500">
                <span className="text-black font-bold">1. </span>in friend mode
                the player who create the game will be the right player and the
                other player will be the left player
              </p>
              <p className="text-gray-500">
                <span className="text-black font-bold">2. </span>in training
                mode you will be the right player and the bot will be the left
                player
              </p>
              <p className="text-gray-500">
                <span className="text-black font-bold">3. </span>in matchmaking
                you will be get your side randomly
              </p>
            </div>
          </div>
          <div className="flex flex-col  space-y-2 w-full">
            <Text>
              <ArrowRightIcon className="inline-block mr-2" />
              Matchmaking Mode
            </Text>
            <p className="text-gray-500">
              <span className="text-black font-bold">1. </span>you will be
              matched with a random player 3 rounds each round 3 matches with
              default theme and none background
            </p>
          </div>
          <div className="flex flex-col  space-y-2 w-full px-5">
            <Text
              fontSize="lg"
              fontWeight="bold"
              className="underline decoration-2 hover:text-green-500"
            >
              6. Start the game
            </Text>
            <Text
              fontSize="lg"
              fontWeight="bold"
              className="underline decoration-2 hover:text-green-500"
            >
              7. Enjoy!
            </Text>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            mr={3}
            onClick={onClose}
          >
            Got it
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

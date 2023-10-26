import canvasBg1 from "../../../../assets/icons/canvas_background/canvasBg1.jpg";
import canvasBg2 from "../../../../assets/icons/canvas_background/canvasBg2.jpg";
import canvasBg3 from "../../../../assets/icons/canvas_background/canvasBg3.jpg";
import canvasBg4 from "../../../../assets/icons/canvas_background/canvasBg4.jpg";
import canvasBg5 from "../../../../assets/icons/canvas_background/canvasBg5.jpg";
import canvasBg6 from "../../../../assets/icons/canvas_background/canvasBg6.jpg";
import canvasBg7 from "../../../../assets/icons/canvas_background/canvasBg7.jpg";
import canvasBg8 from "../../../../assets/icons/canvas_background/canvasBg8.jpg";


export const Modes = ["EASY", "MEDIUM", "HARD"];
export const Rounds = [1, 2, 3, 4, 5];
export const Matches = [1, 2, 3, 4, 5];
export const PlaygroundTheme = [
  {
    id: 1,
    playgroundColor: "bg-black",
    balColor: "bg-white",
  },
  {
    id: 2,
    playgroundColor: "bg-cyan-400",
    balColor: "bg-black",
  },
  {
    id: 3,
    playgroundColor: "bg-emerald-700",
    balColor: "bg-white",
  },
  {
    id: 4,
    playgroundColor: "bg-yellow-400",
    balColor: "bg-purple-600",
    },
];


export const BackgroundsImg = [
  {
    id: 0,
    src: canvasBg1,
  },
  {
    id: 1,
    src: canvasBg2,
  },
  {
    id: 2,
    src: canvasBg3,
  },
  {
    id: 3,
    src: canvasBg4,
  },
  {
    id: 4,
    src: canvasBg5,
  },
  {
    id: 5,
    src: canvasBg6,
  },
  {
    id: 6,
    src: canvasBg7,
  },
  {
    id: 7,
    src: canvasBg8,
  },
];

export const initialCanvasSize = {
<<<<<<< HEAD
  width: 1500,
  height: 600,
=======
  width: 1300,
  height: 700,
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
};

export const initialLeftPaddle = {
  x: 10,
<<<<<<< HEAD
  y: initialCanvasSize.height / 2,
  width: 15,
  height: initialCanvasSize.height / 5,
=======
  y: initialCanvasSize.height / 2 - 50,
  width: 15,
  height: initialCanvasSize.height / 5 ,
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
};

export const initialRightPaddle = {
  x: initialCanvasSize.width - 25,
<<<<<<< HEAD
  y: initialCanvasSize.height / 2,
=======
  y: initialCanvasSize.height / 2 - 50,
>>>>>>> 81be3256bc5ca9d530b11b0e3dedc3d40a21fe3c
  width: 15,
  height: initialCanvasSize.height / 5,
};

export const initialGameEndStatic = {
  bot: "DRAW",
  user: "DRAW",
};
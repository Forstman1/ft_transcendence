

type gameSettingsProps = {
    mode: string;
    playgroundtheme: {
      id: number;
      playgroundColor: string;
      balColor: string;
    };
    rounds: number;
    matches: number;
  };

  export const getGameColor = (gameSettings: gameSettingsProps) => {
    switch (gameSettings.playgroundtheme.id) {
      case 1:
        return {
          playgroundColor: "bg-black",
          balColor: "#ffffff",
        };
      case 2:
        return {
          playgroundColor: "bg-lime-500",
          balColor: "#FF0000",
        };
      case 3:
        return {
          playgroundColor: "bg-cyan-400",
          balColor: "#000000",
        };
      case 4:
        return {
          playgroundColor: "bg-emerald-700",
          balColor: "#ffffff",
        };
      default:
        return {
          playgroundColor: "bg-black",
          balColor: "#ffffff",
        };
    }
  }

 
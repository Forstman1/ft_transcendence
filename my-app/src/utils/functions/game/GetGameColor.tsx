

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
          playgroundColor: "bg-cyan-400",
          balColor: "#000000",
        };
      case 3:
        return {
          playgroundColor: "bg-emerald-700",
          balColor: "#ffffff",
        };
      case 4:
        return {
          playgroundColor: "bg-yellow-400",
          balColor: "#6b46c1",
        };
      default:
        return {
          playgroundColor: "bg-black",
          balColor: "#ffffff",
        };
    }
  };
  
  
  export const getTextColor = (gameSettings: gameSettingsProps) => {
    switch (gameSettings.playgroundtheme.id) {
      case 1:
        return "text-black";
      case 2:
        return "text-cyan-400";
      case 3:
        return "text-emerald-700";
      case 4:
        return "text-yellow-400";
      default:
        return "text-black";
    }
  }

  export const getTextColor2 = (gameSettings: gameSettingsProps) => {
    switch (gameSettings.playgroundtheme.id) {
      case 1:
        return "text-white";
      case 2:
        return "text-black";
      case 3:
        return "text-white";
      case 4:
        return "text-purple-600";
      default:
        return "text-white";
    }
  }
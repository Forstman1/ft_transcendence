import React, { useEffect } from "react";
import Lottie from "lottie-react";
import LodingAnimation from "../../../../assets/animations/loadingAnimation.json";

const LoadingScreen = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  if (!loading) return null;

  return (
    <div className="absolute inset-0 flex justify-center items-center  w-screen h-screen">
      <div className="relative w-full h-full">
          <div className="absolute inset-0 flex justify-center items-center w-full h-full">
            <Lottie
              animationData={LodingAnimation}
              className="object-cover w-full h-full opacity-50"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

import React from "react";
import WavesDivider from "../../../../assets/icons/wavesOpacity.svg";
import Image from "next/image";
import Logo from "../../../../assets/icons/Logo.svg";

export default function Footer() {
    return (
        <footer className="w-full">
            <h2 className='text-center bg-black text-white'>Foter</h2>
            {/* <Image src={WavesDivider} alt="WavesDivider" className="relative w-full rotate-180 h-[110px]" />
            <div className="w-full h-20 absolute -bottom-5 transform -translate-y-1/2 flex items-end justify-between max-xl:justify-center px-[10%]">
                <h1 className="text-white font-bold text-xl max-xl:hidden">Made with ❤️ by Pong Inc.</h1>
                <h1 className="text-white font-bold text-xl">Copyright © 2023 Pong Inc. All Rights Reserved</h1>
                <Image src={Logo} alt="Logo" width={100} className="max-xl:hidden" />
            </div> */}
        </footer>
    )
}

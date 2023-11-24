import bios from '@/../public/Coalitions/Bios.svg'
import freax from '@/../public/Coalitions/Freax.svg'
import commodore from '@/../public/Coalitions/Commodore.svg'
import pandora from '@/../public/Coalitions/Pandora.svg'

import Image from 'next/image'


type CoalitionType = {
    [key: string]: [string, string];
  };
  
  const Coalitions: CoalitionType = {
    'bios': [bios, 'bg-[#06cdd1]'],
    'freax': [freax, 'bg-[#f5bb39]'],
    'commodore': [commodore, 'bg-[#235b16]'],
    'pandora': [pandora, 'bg-[#b61282]'],
  };
  
export default function Coalition({ type }: { type: string }) {
    return (
      <div className={`${Coalitions[type][1]} w-full h-full flex justify-center`}>
        <Image src={Coalitions[type][0]} alt={type} className='w-16' />
      </div>
    );
}
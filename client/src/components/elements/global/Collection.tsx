import bios from '@/../public/Collections/Bios.svg'
import freax from '@/../public/Collections/Freax.svg'
import commodore from '@/../public/Collections/Commodore.svg'
import pandora from '@/../public/Collections/Pandora.svg'

import Image from 'next/image'


type CollectionType = {
    [key: string]: [string, string];
  };
  
  const Collections: CollectionType = {
    'bios': [bios, 'bg-[#06cdd1]'],
    'freax': [freax, 'bg-[#f5bb39]'],
    'commodore': [commodore, 'bg-[#235b16]'],
    'pandora': [pandora, 'bg-[#b61282]'],
  };
  
export default function Collection({ type }: { type: string }) {
    return (
      <div className={`${Collections[type][1]} w-[100%] md:h-[85%] flex justify-center`}>
        <Image src={Collections[type][0]} alt={type} className='w-16' />
      </div>
    );
}
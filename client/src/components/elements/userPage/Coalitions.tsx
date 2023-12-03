import Factionless from '@/../public/Coalitions/default.svg'
import Bios from '@/../public/Coalitions/Bios.svg'
import Freax from '@/../public/Coalitions/Freax.svg'
import Commodore from '@/../public/Coalitions/Commodore.svg'
import Pandora from '@/../public/Coalitions/Pandora.svg'

import Image from 'next/image'


type CoalitionType = {
    [key: string]: [string, string];
  };
  
  const Coalitions: CoalitionType = {
    'Bios': [Bios, 'bg-[#06cdd1]'],
    'Freax': [Freax, 'bg-[#f5bb39]'],
    'Commodore': [Commodore, 'bg-[#235b16]'],
    'Pandora': [Pandora, 'bg-[#b61282]'],
    'Factionless': [Factionless, 'bg-[#292d]'],
  };

  function validateType(type: string): string {
    const validTypes = ['Bios', 'Freax', 'Commodore', 'Pandora'];
  
    if (validTypes.includes(type)) {
      return type;
    } else {
      return 'Factionless';
    }
  }

  
export default function Coalition({ type }: { type: string }) {
    type =  validateType(type);
    return (
      <div className={`${Coalitions[type][1]} w-full h-full flex justify-center`}>
        <Image src={Coalitions[type][0]} alt={type} className='w-16' />
      </div>
    );
}
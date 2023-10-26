import { Avatar, AvatarBadge, Radio } from "@chakra-ui/react";




export default function Usercard(props: any) {


    const { data, selectedOption, onOptionChange } = props;


    const handleChange = () => {

        onOptionChange(data);
    };

    return (

        <div onClick={handleChange} className='flex justify-around items-center border-2   cursor-pointer m-2 ml-0 p-2  rounded-md'>
            <div>
                <Avatar boxSize={12} src={data.avatar}>
                    <AvatarBadge boxSize={6} bg='green' />
                </Avatar>
            </div>

            <div className='flex flex-col items-center justify-around'>
                <div className='text-[20px] md:text-[30px]'>{data.username}</div>
            </div>

            <Radio
                className='md:w-[30px] md:h-[30px] w-[20px] h-[20px] rounded-sm'
                value={data.username}
                onChange={handleChange}
                isChecked={selectedOption.username === data.username}
            >
            </Radio>
        </div>)
}

import liked from './images/liked.jpg'
import { GrPrevious,GrNext } from 'react-icons/gr';
import { LuBell } from 'react-icons/lu';
import { FaUserFriends } from 'react-icons/fa';
export default function Liked(){
    return(
        <div className=''>
            <div className="flex justify-between rounded-md bg-gradient-to-r from-[#463170] from-40%  to-[#372659] pl-[10px] pt-[10px] pr-[10px]">
                        <div className=" flex text-white text-lg">
                            <div className="bg-zinc-900 p-2 rounded-full"><GrPrevious/></div>
                            <div className="bg-zinc-900 p-2 rounded-full ml-2"><GrNext/></div>
                        </div>

                        <div className="flex">
                            <button className="bg-white font-bold text-black px-3 rounded-full">Explore Premium</button>
                            <div className="bg-zinc-900 p-2 rounded-full ml-2"><LuBell/></div>
                            <div className="bg-zinc-900 p-2 rounded-full ml-2"><FaUserFriends/></div>
                        </div>
                    </div>

        <div className="bg-gradient-to-r from-[#463170] from-40%  to-[#372659] rounded-md flex p-[20px] pt-[40px]">
            <div className='drop-shadow-2xl'><img src={liked} height={200} width={200} alt="Liked songs" className='rounded-[10px] '></img></div>
            <div className='ml-3 mt-6'>
                <div>Playlist</div>
                <div className='text-[80px] font-bold font-sans'>Liked Songs</div>
                <div>Bhavana . 31 songs</div>
            </div>
        </div>

        <div className='mt-[15px] ml-[15px] flex text-white'>
            
        </div>
    
        </div>
    )
}
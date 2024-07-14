import { GoUnmute } from "react-icons/go";
import { BsFilePlay } from "react-icons/bs";
import { CiShuffle } from "react-icons/ci";
import { FaForwardStep,FaBackwardStep } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { LuRepeat,LuMic2 } from "react-icons/lu";
import { HiOutlineQueueList } from "react-icons/hi2";
import { VscVmConnect } from "react-icons/vsc";

import cher from "./images/cher.jpeg";


export default function Playbar(){
    return(
        <div className="bg-black flex justify-between pt-2 h-[80px]">
            
            <div className="flex pt-1 pb-1 pl-3">
                <img src={cher} alt="current" className="rounded-[5px] h-[60px] w-[60px]"/>
                <div className="ml-4 mt-3">
                    <div className="text-white font-bold">Criminal </div>
                    <div className="text-zinc-600">Cher</div>
                </div>
            </div>

            <div>
                <div className="flex text-white ">
                    <CiShuffle className="w-[35px] h-[35px] mt-2"/>
                    <FaBackwardStep className="mx-3 w-[35px] h-[35px] mt-2"/>
                    <IoPlayCircleOutline className="w-[40px] h-[40px] mt-1"/>
                    <FaForwardStep className="mx-3 w-[35px] h-[35px] mt-2"/>
                    <LuRepeat className="w-[30px] h-[30px] mt-[10px]"/>
                </div>
                <div>
                <div class="w-full bg-gray-700 rounded-full h-1 ">
                <div class="bg-[#1DB954] h-1 rounded-full w-1/4 mt-2" ></div>
</div>
                </div>
            </div>

            <div className="flex text-white text-lg mt-7">
                <BsFilePlay/>
                <LuMic2 className="mx-2"/>
                <HiOutlineQueueList/>
                <VscVmConnect className="mx-2"/>
                <GoUnmute/>
                
            </div>
        </div>
    )
}
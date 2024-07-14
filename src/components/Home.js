
import { FaUserFriends } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { GrNext,GrPrevious } from "react-icons/gr";
import Recently from "./recently";
import song1 from "./images/liked.jpg";
import desi from "./images/desi.jpeg"
import ready from "./images/ready.jpg";
import singham from "./images/singham.jpg";
import Artist from "./Artists";
import arjit from "./images/arjit.jpg"

export default function Home(){
    return(
        <div className="bg-zinc-800 text-white w-full rounded-md pl-[12px] h-[600px] overflow-y-scroll pr-2 mt-[12px] ">

                    <div className="flex justify-between">
                        <div className="flex text-white text-lg">
                            <div className="bg-zinc-900 p-2 rounded-full"><GrPrevious/></div>
                            <div className="bg-zinc-900 p-2 rounded-full ml-2"><GrNext/></div>
                        </div>

                        <div className="flex">
                            <button className="bg-white font-bold text-black px-3 rounded-full">Explore Premium</button>
                            <div className="bg-zinc-900 p-2 rounded-full ml-2"><LuBell/></div>
                            <div className="bg-zinc-900 p-2 rounded-full ml-2"><FaUserFriends/></div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-zinc-900 from-20% to-zinc-800 flex p-3 rounded-md mt-2">
                        <img src={desi} height={250} width={250} alt="Desi hits" className="rounded-md"/>
                        <div className="ml-4">
                            <div className="font-bold mb-4 mt-3">Playlist</div>
                            <div className="text-7xl font-bold font-sans">Desi Blockbusters</div>
                            <div className=" mt-5 ml-2">The very best of Desi Blockbusters from Coke Studio Season 15 and more! Click play to listen!</div>
                            <div className="flex">
                                <button className="bg-[#1DB954] text-black font-bold rounded-full px-10 py-3 text-lg mt-4">Play</button>
                                <button className="border-[1px] border-zinc-600 ml-3 text-white font-bold rounded-full px-10 py-[11px] text-lg mt-4">Follow</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-4">
                        <div className="bg-[#333333] hover:bg-[#3a3a3a] px-[20px] py-[2px] rounded-s-full rounded-e-full ">All</div>
                        <div className="bg-[#333333] hover:bg-[#3a3a3a] px-[20px] py-[2px] rounded-s-full rounded-e-full mx-2">Podcasts</div>
                        <div className="bg-[#333333] hover:bg-[#3a3a3a] px-[20px] py-[2px] rounded-s-full rounded-e-full ">Music</div>
                    </div>

                            <div className="text-xl font-bold ml-2 mt-2 ">Recently Played</div>
                            <div className="flex justify-end leading-4">Show all</div>
                            <div className="flex ">
                                <Recently image={ready} title="Ready" artist="Pritam, Devi Sri Prasad"/>
                                <Recently image={singham} title="Liked Songs" artist="30 songs"/>
                                <Recently image={song1} title="Liked Songs" artist="30 songs"/>
                                <Recently image={singham} title="Liked Songs" artist="30 songs"/>
                                <Recently image={ready} title="Ready" artist="Pritam, Devi Sri Prasad"/>
                                <Recently image={singham} title="Liked Songs" artist="30 songs"/>
                            </div>

                            <div className="text-xl font-bold ml-2 mt-2 ">Popular Artists</div>
                            <div className="flex justify-end leading-4">Show all</div>
                            <div className="flex ">
                                <Artist image={arjit} title="Arjit Singh" artist="Artist"/>
                                <Artist image={arjit} title="Arjit Singh" artist="Artist"/>
                                <Artist image={arjit} title="Arjit Singh" artist="Artist"/>
                                <Artist image={arjit} title="Arjit Singh" artist="Artist"/>
                                <Artist image={arjit} title="Arjit Singh" artist="Artist"/>

                            </div>

                   
            </div>
        
    )
}
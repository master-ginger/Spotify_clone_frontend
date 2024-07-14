import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { BsListUl } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import Song1 from "./song1";
import song1 from "./images/liked.jpg";
import cher from "./images/cher.jpeg";
import justin from "./images/justin.jpeg";
import arjit from "./images/arjit.jpg";
import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="">
        <div className="flex pt-3">
            <div className="w-[310px]">
            <div className="mb-2  bg-[#191414] text-white pl-[25px] pt-[20px] rounded-md">
                <div className="mb-3 text-2xl font-bold flex"><FaSpotify className="mr-2 mt-1"/>Spotify</div>
                <Link to="/">
                <button className="flex mb-3">
                    <div className="mr-5"><GoHomeFill className="text-2xl"></GoHomeFill></div>
                    <div className="text-lg">Home</div>
                </button></Link>
                <Link to='/search'>
                <button className="flex pb-3">
                    <div className="mr-5"><IoSearch className="w-[25px] h-[25px]"/></div>
                    <div className="text-lg">Search</div>
                </button></Link>
                </div>

                <div className="bg-[#191414] text-white pl-[14px] pt-[10px] rounded-md">
                    <div className="flex mb-[8px]">
                        <div></div>
                        <div className="text-[16px] font-bold ml-1">
                            Your Library
                        </div>
                        <div className="ml-40 mt-[1px] mr-2">
                            <button><IoMdAdd className="text-2xl"/></button>
                        </div>
                    </div>
                    <div className="flex mb-4 text-sm">
                        <div className="bg-[#333333] hover:bg-[#3a3a3a] px-[20px] py-[2px] rounded-s-full rounded-e-full ">Playlists</div>
                        <div className="bg-[#333333] hover:bg-[#3a3a3a] px-[20px] py-[2px] rounded-s-full rounded-e-full mx-1">Podcasts</div>
                        <div className="bg-[#333333] hover:bg-[#3a3a3a] px-[20px] py-[2px] rounded-s-full rounded-e-full ">Artists</div>
                    </div>

                    <div className="flex justify-between text-zinc-600">
                        <button><IoSearch className="text-2xl"/></button>
                        <div className="flex mr-3"><div className="">Recents</div><BsListUl className="text-2xl ml-3 mt-[1px]"/></div>
                    </div>

                    <div className="mt-5 overflow-y-scroll h-[340px] ">
                        <Link to="/liked"><Song1 image={song1} name="Liked Songs" details="Playlists . 30"/></Link>
                        <Link to="/playlist"><Song1 image={cher} name="Cher" details="Playlists . Bhavana"/></Link>
                        <Song1 image={justin} name="Justin Bieber" details="Playlists . Peaches"/>
                        <Song1 image={arjit} name="Arjit Singh" details="Playlists . Peaches"/>
                        <Song1 image={arjit} name="Arjit Singh" details="Playlists . Peaches"/>
                        <Song1 image={cher} name="Cher" details="Playlists . Bhavana"/>


                    </div>
            </div>
            </div>

            </div>

        
        </div>
    )
}
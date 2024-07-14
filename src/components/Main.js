import {Routes, Route} from 'react-router-dom';
import Liked from "./Liked";
import Playlist from "./Playlist";
import Home from "./Home";
import Search from './Search';

export default function MainP(){
    return(
        <div className="bg-zinc-800 text-white ml-2 mt-[10px] w-full rounded-md h-[630px]    ">
            <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/liked" element={<Liked/>}/>
        <Route path="/playlist" element={ <Playlist/> }/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
                    
            </div>
    )
}
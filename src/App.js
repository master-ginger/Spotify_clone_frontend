import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import MainP from './components/Main';
import Playbar from './components/Playbar';
function App() {
  return (
    <Router>
      
    <div className='bg-black p-2 flex h-[641px]' >
      <Sidebar/>
      <MainP/>
    </div>
    <Playbar/>
    </Router>
  );
}

export default App;


import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import NowBooking from './Pages/NowBooking';
import ShowingSoon from './Pages/ShowingSoon';
import Prices from './Pages/Prices';
import Cinemas from './Pages/Cinemas';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/home' index element = {<Home/>} />
            <Route path='/now-booking'  element = {<NowBooking/>} />
            <Route path='/showing-soon'  element = {<ShowingSoon/>} />
            <Route path='/cinemas'  element = {<Cinemas/>} />
            <Route path='/prices'  element = {<Prices/>} />
            <Route path='/about'  element = {<AboutUs/>} />
          </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;

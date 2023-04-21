import Home from "./COMPONENTS/HOME/Home";
import { Routes, Route } from "react-router-dom";
import Landing from "./COMPONENTS/LANDING/Landing";
import Header from "./COMPONENTS/HEADER/Header";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Detail from "./COMPONENTS/DETAIL/Detail";
import AvaliblePetsAdoption from "./COMPONENTS/AVALIBLE_PETS_ADOPTION/AvaliblePetsAdoption";
import Loginpage from './COMPONENTS/LOGIN/Loginpage';
import Registration from './COMPONENTS/REGISTRATION/Registration';
import About from './COMPONENTS/ABOUT/About'
import FormAdoption from './COMPONENTS/FORMS/FormAdoption';
import FormContact from './COMPONENTS/FORMS/FormContact';
import './index.css'
import Donations from "./COMPONENTS/DONATION/Donations";
import FormCreatePet from "./COMPONENTS/FORMS/FormCreatePet";





function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path ='/login' element={<Loginpage />} />
        <Route path="/AvaliblePetsAdoption" element={<AvaliblePetsAdoption/>} />
        <Route path="/register" element={<Registration />} />
        <Route path='/about' element={<About />} />
        <Route path="/FormAdoption" element={<FormAdoption />} />
        <Route path="/FormContact" element={<FormContact/>} />
        <Route path="/FormCreatePet" element={<FormCreatePet/>}/>
        <Route path="/donate" element={<Donations />} />

      </Routes>
    </div>
  );
}

export default App;

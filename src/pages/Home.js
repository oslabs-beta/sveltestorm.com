import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/HeroSection/Hero';
// import InfoSection from '../components/InfoSection/InfoSection';
import About from '../components/About/About';
import About2 from '../components/About2/About2';
import Team from '../components/Team/Team';
import Download from '../components/Download/Download';
// import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    // toggle dropdown menu
    const toggleMenu = () => {
        console.log("Drop down menu toggled");
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
            <Navbar toggleMenu={toggleMenu}/>
            <Hero/>
            <About/>
            <About2/>
            <Team/>
            <Download/>
            {/* <InfoSection {...homeObjOne}/> */}
            {/* <InfoSection {...homeObjTwo}/> */}
            {/* <InfoSection {...homeObjThree}/> */}
        </>
    )
}

export default Home;

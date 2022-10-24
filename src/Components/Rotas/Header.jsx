import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import About from '../Pages/AboutME/About';
import Home from '../Pages/Home/Home';
import Works from '../Pages/Works/Works';
import Props from './Props';


const Header = () => {

    
    return (
        <Router>
            <Props  route='Home'  routeB='AboutMe' routeC='Work' />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/works' element={<Works />}/>
            </Routes>
        </Router>
    );
}

export default Header;

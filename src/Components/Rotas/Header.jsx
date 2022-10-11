import React, {useState, useCallback} from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import About from '../Pages/AboutME/About';
import Home from '../Pages/Home/Home';
import Works from '../Pages/Works/Works';
import Props from './Props';
import Photo from '../../Assets/pngegg.png'

const Header = () => {
    const [open, setOpen] = useState(false)
    const CallModal = useCallback(() => setOpen(!open), [open])
    return (
        <Router>
            <Props Logo={Photo} route='Home'  routeB='AboutMe' routeC='Work' Modal={CallModal}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/works' element={<Works />}/>
            </Routes>
        </Router>
    );
}

export default Header;

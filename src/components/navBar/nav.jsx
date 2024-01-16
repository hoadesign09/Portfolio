import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './../../pages/home/index';
import AboutPage from './../../pages/about/index';
import ContactPage from './../../pages/contact/index';
import NavLink from './../navLink/navLink';

const Nav = () => {
    return(
        <Router>
            <NavLink/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </Router>

    )
}

export default Nav
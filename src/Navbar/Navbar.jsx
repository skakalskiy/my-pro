import React from 'react';
import { BiLogoFacebookSquare, BiLogoInstagramAlt, BiLogoYoutube, BiLogoTwitter } from 'react-icons/bi';
import { motion } from 'framer-motion';

import Sidebar from '../Sidebar/Sidebar';

import '../Navbar/Navbar.scss';


function Navbar() {


    return(
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{
                    opacity: 0,
                    scale: .5
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: .5
                }}
                >Ame Dev</motion.span>
                <div className="social">
                    <a href=""><BiLogoFacebookSquare className='logo'/></a>
                    <a href=""><BiLogoInstagramAlt className='logo'/></a>
                    <a href=""><BiLogoYoutube className='logo'/></a>
                    <a href=""><BiLogoTwitter className='logo'/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
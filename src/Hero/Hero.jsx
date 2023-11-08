import React from 'react';



import { motion } from 'framer-motion';
import { useState } from 'react';

import gMane from '../img/gmane2.jpg';
import '../Hero/Hero.scss';


const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: .1,
        },
    },
};

const modalVariants = {
    initial:{ scale: 0, y:-1000, opacity: 0 },
    animate:{  scale: 1, y:0, opacity: 1, transition: ".9s" },
    transition:{
    type: "spring",
    stiffness: 260,
    damping: 20,
    duration: 3,
    staggerChildren: .5,
  },
};


const sliderVariants = {
    initial: {
        x: 0,
    },
    animate:{
        x: "-220%",
        transition: {
            duration: 20,
            repeat: Infinity,
            repeatType:"mirror"
        },
    },
};



function Hero() {

    const [isShow, setIsShow] = useState(false);
    

    return(
        <div className="hero">
            <div className="wrapper"> 
                <motion.div 
                className="textContainer"
                variants={textVariants}
                initial="initial"
                animate="animate"
                >
                    <motion.h2 variants={textVariants}>GHOSTEMANE</motion.h2>
                    <motion.h1 variants={textVariants}>
                        American rapper from Los Angeles, California, USA.
                    </motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button className='btn-modal' onClick={() => setIsShow(true)}  variants={textVariants}>See more</motion.button>
                            {isShow && (
                        <motion.div
                        className='bg-modal'
                        variants={modalVariants}
                        >
                            <h2>biography</h2>
                            <p className='modal-text'>Eric Whitney (born April 15, 1991),[7] known professionally as Ghostemane or Eric Ghoste,[8] is an American singer, songwriter, rapper and musician. He has released eight solo albums and three collaborative albums under his Ghostemane moniker, primarily merging elements of heavy metal, hip hop and industrial music.  Whitney has also released music with a number of additional solo projects, pursuing styles including black metal as Baader-Meinhof, noise music as GASM,[5] and electronic music as Swearr.[9] He began his career in local hardcore punk and doom metal bands around Florida.[10][11] In 2015, he moved to Los Angeles, California, starting a career as a rapper, under the moniker Ill Bizz.[9] Around this same time, he was a member of the hip hop collective Schemaposse.[12]

Ghostemane's merging of trap and metal gained him popularity on SoundCloud. </p>
                            <button className='close-modal' type="button" onClick={() => setIsShow(false)}>Close</button>
                        </motion.div>
                        )}
                    </motion.div>

                </motion.div>
            </div>
            <motion.div 
            className="slidingTextContainer" 
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            >
                Ghostemane
            </motion.div>
            <div className="imageContainer">
                <img src={gMane} alt="gmane" />
            </div>
        </div>
    )
}

export default Hero;
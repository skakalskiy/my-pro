import '../ImageContent/ImageContent.scss';
import ghost1 from '../img/ghost1.jpg';
import ghost2 from '../img/ghost2.jpg';
import ghost3 from '../img/ghost3.png';
import paris from '../img/suiParis.jpg';
import parisss from '../img/parisss.png';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';



const textVariants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate:{
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: .1,
        },
    },
};

const imageVariants = {
    initial: {
        opacity: 0,
    },
    animate:{
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: .1,
            delay: 1,
        }
        
    },
}
const imageVariants2 = {
    initial: {
        opacity: 0,
    },
    animate:{
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: .1,
            delay: 1.5,
        }
        
    },
}

const imageVariants3 = {
    initial: {
        opacity: 0,
    },
    animate:{
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: .1,
            delay: 2,
        }
        
    },
}

const imageVariants4 = {
    initial: {
        opacity: 0,
    },
    animate:{
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: .1,
            delay: 2.5,
        }
        
    },
}

const imageVariants5 = {
    initial: {
        opacity: 0,
    },
    animate:{
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: .1,
            delay: 3,
        }
        
    },
}


function ImageContent() {

    const ref = useRef()
    const isInView = useInView(ref, {margin:'-100px'})
    return(
        <div className="imageContent">
            <motion.h2 
            className='title'
            variants={textVariants}
            initial="initial"
            // animate="animate"
            ref={ref}
            animate={isInView && "animate"}
            >
                take a trip to paris
            </motion.h2>
            <div className="img-container">
                <motion.div
                className="half1"
                variants={textVariants}
                initial="initial"
                ref={ref}
                animate={isInView && "animate"}
                >
                    <motion.img
                    drag
                    src={ghost1}
                    variants={imageVariants}
                    alt="ghost1"
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    style={{width: '300px', height: '300px', margin: '15px'}}/>   
                    <motion.img
                    drag 
                    src={ghost2} 
                    variants={imageVariants2}
                    alt="ghost2"
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    style={{width: '300px', height: '300px',marginLeft: '30px'}}/>
                        <div className="paris">
                            <motion.img
                            drag 
                            src={paris} 
                            variants={imageVariants3}
                            alt="paris"
                            initial="initial"
                            ref={ref}
                            animate={isInView && "animate"}
                            style={{width: '650px', height: '350px', padding:'15px 15px' }}/> 
                        </div>   
                </motion.div>
                <motion.div
                className="half2"
                variants={textVariants}
                initial="initial"
                ref={ref}
                animate={isInView && "animate"}
                
                >
                    <motion.img
                    drag 
                    src={parisss} 
                    variants={imageVariants4}
                    alt="parisss"
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    style={{width: '300px', height: '300px',padding:'10px 15px'}}/>  
                    <motion.img
                    drag 
                    src={ghost3} 
                    variants={imageVariants5}
                    alt="ghost3"
                    initial="initial"
                    ref={ref}
                    animate={isInView && "animate"}
                    style={{width: '300px', height: '300px'}}/>   
                </motion.div>
            </div> 
        </div>
    )
}

export default ImageContent;
import { useState } from 'react';
import { motion } from 'framer-motion';

import '../Life/Life.scss';


function Life() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    
    
    
    return( 
        <div className='wrapper1'>
        
        <motion.div     
        onClick={() => setIsOpen(!isOpen)} 
        className="life"
        transition={{layout: {duration: 1, type: "spring"}}}
        Layout
        
        >About Ghostemane
            <motion.h2
            Layout="position"
            ></motion.h2>
            {isOpen && (
                <motion.div className='modal-win'>
                    <p style={{opacity: 1, fontWeight: "600"}}>About Ghostemane</p>
                    <p> Began his career in local hardcore punk and doom metal bands around Florida.In 2015, he moved to Los Angeles, California, starting a career as a rapper, under the moniker Ill Bizz. Around this same time, he was a member of the hip hop collective Schemaposse.</p>
                    <p> Ghostemane's merging of trap and metal gained him popularity on SoundCloud. In 2018, Ghostemane released his seventh studio album, N/O/I/S/E, which was highly anticipated in the underground music scene due to its heavy influence from industrial and nu metal.</p>        
                </motion.div>
            )}    
        </motion.div>
        <motion.div 
        onClick={() => setIsOpen1(!isOpen1)} 
        className="life"
        transition={{layout: {duration: 1, type: "spring"}}}
        Layout
        
        >Early life
            <motion.h2
            Layout="position"
            ></motion.h2>
            {isOpen1 && (
                <motion.div className='modal-win'>
                    <p style={{opacity: 1, fontWeight: "600"}}>Early life</p>
                    <p>Eric Whitney was born on April 15, 1991, in Lake Worth, Florida to parents from New York. Whitney grew up in West Palm Beach, Florida. As a teenager, he was mainly interested in hardcore punk music. He learned to play the guitar and performed in several bands, including Nemesis and Seven Serpents. He also played football while he was in high school, saying he was practically forced to by his father, who died when Whitney was seventeen.</p>
                    <p>Whitney was introduced to rap music when he was the guitarist in the hardcore punk band Nemesis and a bandmate introduced him to Memphis rap.</p>        
                </motion.div>
            )}    
        </motion.div>
        <motion.div 
        onClick={() => setIsOpen2(!isOpen2)} 
        className="life"
        transition={{layout: {duration: 1, type: "spring"}}}
        Layout
        
        >Career
            <motion.h2
            Layout="position"
            ></motion.h2>
            {isOpen2 && (
                <motion.div className='modal-win'>
                    <p style={{opacity: 1, fontWeight: "600"}}>Career</p>
                    <p>Prior to his musical career, Whitney worked in several B2B sales positions. In 2015, due to not being able to musically thrive in Southern Florida, Whitney moved to Los Angeles, California. He also gave up his employment. Meeting up with JGRXXN, Whitney joined his collective Schemaposse, which included artists such as Craig Xen and Lil Peep.</p>
                    <p>In 2021, Ghostemane's music video "AI", directed by Nick Cinelli, was nominated for Most Bizarre at the Berlin Music Video Awards</p>        
                </motion.div>
            )}    
        </motion.div>
        <motion.div 
        onClick={() => setIsOpen3(!isOpen3)} 
        className="life"
      
        Layout
        
        >Artistry
            <motion.h2
            
            ></motion.h2>
            {isOpen3 && (
                <motion.div className='modal-win'>
                    <p style={{opacity: 1, fontWeight: "600"}}>Artistry</p>
                    <p>Lyrically, Ghostemane's themes focus on occultism, depression, nihilism, death and illuminism. He started his career as a musician playing guitar in hardcore punk bands, and drums in doom metal bands. He has stated that his biggest influence is black metal band Bathory.He spent most of his teenage years listening to extreme metal bands such as Deicide, Death, Carcass and Mayhem.In terms of rap music, Ghostemane is influenced by Southern rap groups such as Outkast and Three 6 Mafia. He has also gone on to cite Midwest rap group Bone Thugs-n-Harmony as an early influence.</p>
                    <p></p>        
                </motion.div>
            )}    
        </motion.div>

        </div>
      
    )

}

export default Life;
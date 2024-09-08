import { useEffect, useState } from 'react'
// import { CCarousel, CCarouselItem } from '@coreui/react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import ECG from './AllProjects/ECG/ECG'
import GeoGuesser from './AllProjects/UTSC GeoGuesser/GeoGuesser'
import HomeSecurity from './AllProjects/HomeSecurity/homesecurity'
import ecgpic from './AllProjects/ECG/ecg.png'
import andyscannedpic from './AllProjects/HomeSecurity/andybeingscanned.png'
import geoguesserpic from './AllProjects/UTSC GeoGuesser/geoguesser.jpg'

import './index.scss'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'Projects:'.split('')
    const jobArray = 'Some stuff I have done!'.split('')

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
    
      return () => clearTimeout(timeoutId);
    }, []);

    return (
      <>
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                    <br />
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                    />
                </h1>
            </div>
            <div className="projects-section">
                <div className='project-row'>
                    <ECG/>
                    <GeoGuesser/>
                </div>
                <div className='project-row'>
                    <HomeSecurity/>
                </div>
            </div>
        </div>
        {/* <CCarousel>
          <CCarouselItem>
            <CImage className="d-block w-100" src={ecgpic} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={andyscannedpic} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={geoguesserpic} alt="slide 3" />
          </CCarouselItem>
        </CCarousel> */}
        <Loader type="pacman"/>
      </>
    )
}

export default Projects
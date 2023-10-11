import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import ECG from './AllProjects/ECG/ECG'
import GeoGuesser from './AllProjects/UTSC GeoGuesser/GeoGuesser'
import HomeSecurity from './AllProjects/HomeSecurity/homesecurity'
import './index.scss'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Emotional Cardiography",
            image: ECG,
            link: "https://devpost.com/software/emotional-cardiography-ecg",
            description: "uOttaHack 5 project I created with 3 teammates."
        }
    ]
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'Projects:'.split('')
    const jobArray = 'Some stuff I have done!'.split('')

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
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
        <Loader type="pacman"/>
      </>
    )
}

export default Projects
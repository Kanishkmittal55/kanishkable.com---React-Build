import { faCss3, faDocker, faGitAlt, faGolang, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },3000)
    }, [])
    
    return (
        <><Sidebar /> <Layout/>
        <div className='container about-page'>
            
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    In bits and bytes, my dreams are spun,<br />
                    A systems engineer, second to none.<br />
                    From concept to code, my creativity flows,<br />
                    Through Raspberry Pi’s and web apps it shows.<br />
                </p>
                <p>
                    In challenges, a chance, in problems, a plea,<br />
                    To weave DevOps and data, a dance by me.<br />
                    A gamified journey on DailyPay's stage,<br />
                    Crafting AR realms, the new digital age.<br />
                </p>
                <p> 
                    Check my journey, in links that you click,<br />
                    A tale of tech, unfolded, dynamic and quick.<br />
                </p>
            </div>

            <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon ={faGolang} color="#DD0031" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon ={faDocker} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon ={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon ={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon ={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon ={faGitAlt} color="#EC4D28" />
                </div>
            </div>

        </div>
        </div>
        <Loader type="pacman" />
    
        </>
    )
}

export default About
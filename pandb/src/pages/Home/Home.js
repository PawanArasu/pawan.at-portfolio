import React, {useEffect} from 'react'
import introVideo from './Videos/intro-video.mp4'
import Aos from "aos"
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect( () => {
    Aos.init({duration:2000});
  },[])

  return (
    <div className='Home'>

      <div >
        <video autoPlay loop muted className='video-intro'>
          <source src={introVideo} type="video/mp4" />
        </video>
      </div>

      <h2 className='skills-h2'>Languages and Frameworks I know!</h2>

      <div className='skills-tab' data-aos="fade-up">

        <div className='skills-text'>
          <p>I started my Coding journey on 2020 because I was excited how code works and the things I would be able to do. In this very incredible journey of 2 years by far I should say i've really enjoyed it , and also leared a few things in the way.</p>
        </div>

        <div className='skills-imgs-div'>
          <img src='/assets/html.svg' className='skills-imgs' alt='html'/>
          <img src='/assets/css3.svg' className='skills-imgs' alt='css'/>
          <img src='/assets/javascript.svg' className='skills-imgs' alt='javascript'/>
          <img src='/assets/python.svg' className='skills-imgs' alt='python' />
          <img src='/assets/react.svg' className='skills-imgs' alt='react'/>
        </div>
      </div>

      <div className='about-me'  data-aos="fade-up">
        <div>
          <img src='/assets/ppf.png' className='ppf'/>
        </div>

        <div>
        <h1 className='abt-h1'>About Me</h1>
        <p  className='abt-p'>I am a 13 year old dude from India.My Goal: Richest Person in the world , My Hobbies: Read Book , Play &#40;Physical&#41; , Learn things that i like to know more about. I just would like to say everybody that it is never too early or late to <b>Pursue</b> your dreams!.</p>
        <h1 className='abt-cont-h1'>Contact Me</h1>
        
        <a href='mailto:pawanarasu8@gmail.com' className='abt-cont-hl'><FontAwesomeIcon icon={faEnvelope}  className="icons-cont" /></a>
        <a href='https://github.com/PawanArasu' className='abt-cont-hl'><FontAwesomeIcon icon={faGithub}  className="icons-cont" /></a>
        <a href='https://www.facebook.com/profile.php?id=100080294826322' className='abt-cont-hl'><FontAwesomeIcon icon={faFacebook}  className="icons-cont" /></a>
        <a href='https://www.instagram.com/paw_enthu/' className='abt-cont-hl'><FontAwesomeIcon icon={faInstagram}  className="icons-cont" /></a>
        </div>

      </div>

      <div className='ck-blog' data-aos="fade-up">
        <img src='/assets/blog-ck.jpg' alt='blog'  className='img-blog-ck'/>
        <div className='center-link'>
        <Link to="/blog" className='blog-ck-hl'>Check Out My Blog</Link>
        </div>
      </div>

      
    </div>
  )
}

export default Home
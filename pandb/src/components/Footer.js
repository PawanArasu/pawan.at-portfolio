import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>

        
        <a href='mailto:pawanarasu8@gmail.com' className='abt-cont-hl'><FontAwesomeIcon icon={faEnvelope}  className="icons-cont" /></a>
        <a href='https://github.com/PawanArasu' className='abt-cont-hl'><FontAwesomeIcon icon={faGithub}  className="icons-cont" /></a>
        <a href='https://www.facebook.com/profile.php?id=100080294826322' className='abt-cont-hl'><FontAwesomeIcon icon={faFacebook}  className="icons-cont" /></a>
        <a href='https://www.instagram.com/paw_enthu/' className='abt-cont-hl'><FontAwesomeIcon icon={faInstagram}  className="icons-cont" /></a>

        <h3 className='copyright'>&#169; owned by Pawan Arasu.T</h3>


    </div>
  )
}

export default Footer
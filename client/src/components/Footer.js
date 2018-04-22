import React from 'react';
import github from '../images/gitlogo.png';
import facebook from '../images/facebooklogo.png';
import linkedin from '../images/linkedinlogo.png';
import email from '../images/emaillogo.png'

const Footer = () => {
  return(
    <div className='footer'>
      <div className="container_for_tags">
      <a className="footer_link" href="https://github.com/britt-ryant"><img src={github} className="logo" alt="github" /></a>
      <a className="footer_link" href="https://www.facebook.com/profile.php?id=100007001626939"><img src={facebook} className="logo" alt="facebook" /></a>
      <a className="footer_link" href="https://www.linkedin.com/in/ryantbritt/"><img src={linkedin} className="logo" alt="linkedin" /></a>
      <a className="footer_link" href="mailto:britt.ryant@gamil.com?Subject=Hello" target="_top"><img src={email} className="email" alt="email" /></a>
    </div>
    </div>
  )
}

export default Footer;

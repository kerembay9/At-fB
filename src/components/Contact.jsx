import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./styles/Contact.css"; 
const Contact = () => {
  return (
    <div className='divcontacts' >
        <h1 className='Sosyal Medya' >Sosyal Medya</h1>
        <div className='contacts'>
        <a href="https://instagram.com/atifbayramoglu?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><p className='mediap'><InstagramIcon style={{verticalAlign:"bottom"}}/> Instagram : @atifbayramoglu</p></a>
        <a href="https://www.linkedin.com/in/atif-bayram-68b90265/" target="_blank" rel="noreferrer"><p className='mediap'><LinkedInIcon style={{verticalAlign:"bottom"}}/> LinkedIn</p> </a>
        <a href='#Gmail'><p className='mediap' id="Gmail"><GoogleIcon style={{verticalAlign:"bottom"}}/> atifbay@gmail.com</p></a>
        <a href="https://mobile.twitter.com/atifbay" target="_blank" rel="noreferrer"><p className='mediap'><TwitterIcon style={{verticalAlign:"bottom"}}/> Twitter</p></a>
        </div>
    </div>
    )
}

export default Contact
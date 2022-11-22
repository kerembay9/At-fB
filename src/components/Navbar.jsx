import logo from './../images/transparentLogoBlack.png';
import logowhite from './../images/transparentLogo.png';
import React,{useState} from 'react';
import './styles/Navbar.css';
import {Link} from 'react-scroll';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import IconButton from '@mui/material/IconButton';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

const Navbar = ({sections}) => {
  const [sidebar, setSidebar] = useState(false)
  const [menuClick, setMenuClick] = useState(false)
  window.addEventListener("resize",()=>{
    window.innerWidth > 1380 ?
    setSidebar(true):setSidebar(false)
  });
    const sectionsLength = sections.length;
    const handleClick = () =>{
      menuClick ? setMenuClick(false): setMenuClick(true)
    }
  return (
    sidebar ?
    <div className='Navbar' >
      <div>
      <img src={logo} alt="logo-img" style ={{maxWidth:"100%",maxHeight:"10vh", paddingTop:"1vh", paddingLeft:"1vw" }}/>
      </div>
       <div className='navcontainer'>
       <ul className='navul'>  
        {
            sections.map((section) => (
            <li style ={{ width: `${1/(sectionsLength+2)*100}%`, cursor: "pointer" }} className='section' key={section}>
              <Link to={section} style={{ color:"black"}} spy={true} smooth={true}><div>{section}</div></Link>  
            </li>
        ))}
        
        
        </ul>
        </div>
    </div>
    :
    menuClick ?
    <div className='sidebar'>
    <div className='sidebar-menu'>
    <IconButton onClick={handleClick} className="menu">
    <MenuSharpIcon />
    </IconButton>
    </div>
    <div>
      <img src={logo} alt="logo-img" style ={{maxWidth:"100%",maxHeight:"10vh", paddingTop:"1vh", paddingLeft:"1vw",  width: "100%" }}/>
    </div>
    </div>
    :
    <div className='sidebar'>
    <div className='black-bg'>
    <div>
    <img src={logowhite} alt="logo-img" style ={{maxWidth:"100%",maxHeight:"10vh", paddingTop:"10px", paddingLeft:"1vw", paddingBottom:"5%", width: "100%", objectFit:"contain"}} onClick={handleClick}/>
    </div>
      <div className='sidebar-menu'>
    <IconButton onClick={handleClick} className="menu">
    <CancelSharpIcon style={{color:"white" }}/>
    </IconButton>
    </div>
    <ul className='navul-sidebar'>
        {
            sections.map((section) => (
            <li style ={{ width: `${1/(sectionsLength+2)*100}%`, cursor: "pointer" }} className='section' key={section}>
              <Link to={section} className="link" spy={true} smooth={true}><button className='buto' onClick={handleClick}><div>{section}</div></button></Link>  
            </li>
        ))}       
        </ul>
    </div>
    </div>
  )
}

export default Navbar
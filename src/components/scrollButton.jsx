import React, {useState} from 'react';
import {FaAngleUp} from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';

  
const ScrollButton = () =>{
  const [visible, setVisible] = useState(window.innerWidth < 400 ? false:true)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50 && window.innerWidth > 400 ){
      setVisible(true)
    } 
    else if (scrolled <= 50){
      setVisible(false)
    }
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
     <IconButton
      sx={{height: "70px", width:"70px",color: "#e2d9d7",backgroundColor:"#c4bebd",}}
      style={{
        position: "fixed",
        bottom: 10,
        right: 12,
        display: visible ? 'block' : 'none'}}
      onClick={scrollToTop}
      >
        <FaAngleUp/>
      </IconButton>
  );
}
  
export default ScrollButton;
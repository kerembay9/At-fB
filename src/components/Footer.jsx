import React from 'react';
import "./styles/Footer.css";
const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className='Footer' >
      <p>Copyright <b> &copy; {date} Hive Mind </b> All Rights Reserved,
      please contact <b>kerembay9@gmail.com</b>, for a website like this.</p>
    </div>
  )
}

export default Footer

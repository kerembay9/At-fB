import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div style={{width:"100%", height:"8vh", paddingTop:"2vh"}}>
      <p>Copyright <b> &copy; {date} Hive Mind </b> All Rights Reserved,
      please contact <b>kerembay9@gmail.com</b>, for a website like this.</p>
    </div>
  )
}

export default Footer

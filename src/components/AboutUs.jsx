import React from 'react';
import './styles/Aboutus.css';
import About from './../images/transparentParent.png';

const AboutUs = () => {
  return (
    <div style={{width:"100%"}}>
      <div style={{padding:"3%", paddingTop:"0%"}}>
      <div className='Kimdir' style={{paddingTop:"3%"}}>
        <div>        
        <h2 className='About' >Atıf Bayramoğlu Kimdir ?</h2>
        </div>
        <div className='image-paragraph'>
        <div >
            <img src={About} alt="About Us" style ={{width:"100%", maxWidth:"100%",objectFit:"cover", marginBottom:"3px"}}/>
        </div>
          <div style={{paddingTop:"2%"}}>
        <p className='About-paragraph'>
        İnsandır. <br />
        Eştir. Babadır. <br />
        Doktordur. Acil Tıp Uzmanıdır. <br />
          Meraklıdır. Araştırır. İletişime açıktır. <br />
          Yürüyüş sever. İstirahat sever. Hayatın amatör tarafını sever. <br />
          Eskiden futbol oynamışlığı, basketbol oynamışlığı hatta maraton koşmuşluğu vardır. <br />
          Bir ara Forex’e ilgi duymuştur. <br />
          Şimdilerde anasınıfı çocuklarına ilk yardımı öğretmeye çalışıyor…
        </p>
        </div>
        </div>
        </div>
        <div className='About-extra' style={{paddingTop:"3%",paddingBottom:"3%"}}> 
        <p className='About-paragraph-extra'>Gelecek planları arasında hipnoz alanında doktora yapmak, sporu günlük hayatının düzenli bir parçası haline getirmek, yurtdışına daha sık seyahat etmek ve bağlama çalmayı öğrenmek bulunmaktadır.</p>
        </div>
        </div>
    </div>
  )
}

export default AboutUs

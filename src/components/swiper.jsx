import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/Swiper.css'
import 'swiper/css';

const Swipers = ({publicationList}) => {
  return (
    <div className='Yayınlar' >
      <div style={{marginTop:"80px"}}>
        <h1 className='pubh1'>Yayınlar</h1>
    <Swiper  slidesPerView={1} style={{zIndex:"0"}} >
    {publicationList.map((publication) =>( 
          <SwiperSlide style={{zIndex:"0"}}>
            <div className='slide-div' key={publication.id} style={{zIndex:"0",maxWidth:`${1/(publicationList.length)*100}%`}}> 
                    <a style={{zIndex:"0"}} className='slide-a' href={publication.link} target="_blank" rel="noreferrer" >
                        <h2 style={{zIndex:"0"}} className='slide-h2'>{publication.title}</h2>
                        <p style={{zIndex:"0"}} className='slide-p'>{publication.explanation} </p>
                    </a>
            </div>
            </SwiperSlide>
        ))}
    </Swiper>
    </div> 
    </div>
  )
}

export default Swipers
import React from 'react';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles/Swiper.css';
import './styles/swiper-bundle.min.css';
import 'swiper/css';

const Swipers = ({publicationList, isMobileDevice}) => {
  console.log(isMobileDevice);  
  if(isMobileDevice) {
  return (
    <div className='Yayınlar' >
      <div style={{marginTop:"80px", paddingTop:"30px"}}>
        <h1 className='pubh1'>Yayınlar</h1>
    <Swiper          
    modules={[Pagination]}
    slidesPerView={1}
    pagination
    style={{height:"74vh"}}>
    {publicationList.map((publication) =>( 
          <SwiperSlide >
            <div className='slide-div' key={publication.id}> 
                    <a  className='slide-a' href={publication.link} target="_blank" rel="noreferrer" >
                        <h2 className='slide-h2'>{publication.title}</h2>
                        <p className='slide-p'>{publication.explanation} </p>
                    </a>
            </div>
            </SwiperSlide>
        ))}
    </Swiper>
    </div> 
    </div>
  )}else{
    return(
      <div className='Yayınlar' >
      <div style={{marginTop:"80px", paddingTop:"30px"}}>
        <h1 className='pubh1'>Yayınlar</h1>
    <Swiper          
    modules={[Pagination,Navigation]}
    slidesPerView={1}
    pagination
    navigation
    style={{height:"80vh"}}>
    {publicationList.map((publication) =>( 
          <SwiperSlide >
            <div className='slide-div' key={publication.id}> 
                    <a  className='slide-a' href={publication.link} target="_blank" rel="noreferrer" >
                        <h2 className='slide-h2'>{publication.title}</h2>
                        <p className='slide-p'>{publication.explanation} </p>
                    </a>
            </div>
            </SwiperSlide>
        ))}
    </Swiper>
    </div> 
    </div>
    )
  }
}

export default Swipers
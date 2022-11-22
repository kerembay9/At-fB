import React, {useState} from 'react';
import "./styles/Publications.css";

const Publications = ({publicationList}) => {
  const [sizeToken, setSizeToken] = useState(window.innerWidth < 420 ? 0.98:1)
  window.addEventListener("resize",()=>{
    window.innerWidth < 420 ?
    setSizeToken(0.98):setSizeToken(1);
  });
  const [container, setContainer] = useState(document.getElementsByClassName("ulCarousel"))
  document.addEventListener("DOMContentLoaded", function () {
   setContainer(document.getElementsByClassName("ulCarousel"))
  });
let counter = 0;
  const handleClickNext =() => {
    let size = 100/publicationList.length;
    if(counter === publicationList.length -1) counter = -1;
    container[0].style.transition ="transform 0.4s ease-in-out";
    counter ++;
    container[0].style.transform = 'translateX(' +(-size*counter*sizeToken)+'%)';
  }
  const handleClickPrev =() => {
    if(counter === 0) counter = publicationList.length;
    let size = 100/publicationList.length;
    container[0].style.transition ="transform 0.4s ease-in-out";
    counter --;
    container[0].style.transform = 'translateX(' +(-size*counter*sizeToken)+'%)';
  }
  
  return (
    <div className='Yayınlar'>
        <h1 className='pubh1'>Yayınlar</h1>
        <button onClick={handleClickPrev} id="prevBtn"> &lt;</button>
        <button onClick={handleClickNext} id='nextBtn'> &gt; </button>
        <ul className='ulCarousel' style={{width: `${(publicationList.length)*100}%`}}>
          <div  className='pubdiv'>
        {publicationList.map((publication) =>( 
           <div className='mini-div' key={publication.id} style={{maxWidth:`${1/(publicationList.length)*100}%`}}> 
                <li className='publication-li' key={publication.id}>
                    <a href={publication.link} target="_blank" rel="noreferrer" >
                        <h2>{publication.title}</h2>
                        <p>{publication.explanation} </p>
                    </a>
                </li>
            </div>
        ))}
        </div>
    </ul>
    </div>

  )
}

export default Publications
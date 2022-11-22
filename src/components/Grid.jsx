import React from 'react';
import "./styles/Grid.css";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeartRounded';
import WaterIcon from '@mui/icons-material/WaterRounded';
import ImportContactsIcon from '@mui/icons-material/ImportContactsRounded';
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const Grid = ({elements}) => {
    elements[0].icon =VaccinesRoundedIcon 
    elements[1].icon =WaterIcon
    elements[2].icon =MonitorHeartIcon
    elements[3].icon =ImportContactsIcon
    elements[4].icon =MedicalInformationIcon
    elements[5].icon =AllInclusiveIcon

  return (
    <div className='grid' >
      <h1 className='Çalıştığı Alanlar'>Çalıştığı Alanlar</h1>
      <div className='flex-container'>
      <div className='grid-container'>
        {
            elements.map((element)=>(
                <div className='element-div' key={element.id}>
                    <div  className={"item" + element.id}>
                    <p className='mini-title'>{element.title}</p>
                      <div className="items"style={{height:"125px",display:"flex",alignItems:"center"}}>
                        < element.icon style={{fontSize:"300%",color:"rgb(83, 104, 120)",width:"100%",height:"75px" }}/>
                        </div>
                    <div className='container'>
                        <p className='grid-title'>{element.title} </p>
                    </div>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
    </div>
    
  )
}

export default Grid

import './App.css';
import Navbar from "./components/Navbar.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Biography from "./components/Biography.jsx";
import Publications from "./components/Publications.jsx";
import Contact from "./components/Contact.jsx";
import Grid from "./components/Grid.jsx";
import Footer from "./components/Footer.jsx";
import ScrollButton from "./components/scrollButton.jsx";
import axios from 'axios';
import React, {useState, useEffect} from "react";

function App() {
  
  const [publicationList, setPublicationList] = useState(()=>{return [
    {
      id: 1,
      reference:"Bayramoğlu, A., Sever, M., Uzun, N., Ceritli, S., & Mutlu, H.      (2020). Hyponatremia in COVID- 19 patient using angiotensin type 1 receptor (AT1R) blocker and diuretic: a case report. J Res Clin Med, 8(1). ",
      link:"https://avesis.atauni.edu.tr/yayin/ceebdb28-1312-4769-a262-fa2122c0fe8d/hyponatremia-in-covid-19-patient-using-angiotensin-type-1-receptor-at1r-blocker-and-diuretic-a-case-report",
      explanation:"Introduction On 31 December 2019, a cluster of pneumonia cases with unknown etiology was reported in Wuhan city, Hubei province of China. A novel coronavirus (SARS-CoV- 2) was later detected as the causative agent and the clinical condition was called coronavirus disease 19 (COVID-19). The SARS-CoV-2 infection has a wide clinical course that can progress from mild symptoms such as fever, sore throat, cough to pneumonia and acute severe respiratory failure. The S protein of SARS-CoV-2 is thought to bind to the host cell angiotensin-converting enzyme 2 (ACE2) receptor and cause the disease. Case Presentation An 82-year-old male patient presented to the emergency room with fever and cough. He had a history of diabetes mellitus, hypertension, Parkinson’s disease and coronary bypass, been on a regular prescription of metformin, rasagiline, telmisartan and hydrochlorothiazide."
    },
    { 
      id: 2,
      reference:"Bayramoglu, A., Kocak, A. O., & Kadioglu, E. (2018). Ischemic stroke due to carbon monoxide intoxication: Two case reports. World Journal of Emergency Medicine, 9(1), 73.",
      link:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5717382/",
      explanation:"Following its entrance into the human body through inhalation, carbon monoxide (CO) forms carboxyhemoglobin (COHb) by binding to hemoglobin (Hb) within the blood. Massive ischemic tissue necrosis occurs in 0.5%-1% of cases with CO poisoning.[1] The affinity of CO to Hb is 200-250 times more when compared to the affinity of oxygen. As a result of CO binding to Hb, oxygen delivery to the tissues is reduced, and tissue hypoxia develops. This affects mostly the brain and heart, which are the organs with the highest demand for oxygen. Hypoxia leads to oxidative stress, cellular necrosis, apoptosis, and inflammation in acute CO poisoning. Pathological changes in the brain observed in CO poisoning are hippocampal necrosis, demyelination of the cerebral white matter, and spongy necrosis of the globus pallidus and cerebral cortex."
    },
    { 
      id: 3,
      reference:"Bayramoğlu, A., & Kurt, E. (2018). The size of the study      population: Correspondance related “Measurement of blood lactate, D-dimer, and activated prothrombin time improves prediction of in-hospital mortality in adults blunt trauma”. The American Journal of Emergency Medicine, 36(12), 2334-2335.",
      link:"https://avesis.atauni.edu.tr/yayin/a3caade7-a817-41f9-bd45-c2ab6b26554a/the-size-of-the-study-population-correspondance-related-measurement-of-blood-lactate-d-dimer-and-activated-prothrombin-time-improves-prediction-of-in-hospital-mortality-in-adults-blunt-trauma",
      explanation:'The size of the study population: Correspondance related "Measurement of blood lactate, D-dimer, and activated prothrombin time improves prediction of in-hospital mortality in adults blunt trauma'
    },
    { 
      id: 4,
      reference:"Bayramoglu, A., Kocak, A. O., & Kadioglu, E. (2018). Ischemic stroke due to carbon monoxide intoxication: Two case reports. World Journal of Emergency Medicine, 9(1), 73.",
      link:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5717382/",
      explanation:"Following its entrance into the human body through inhalation, carbon monoxide (CO) forms carboxyhemoglobin (COHb) by binding to hemoglobin (Hb) within the blood. Massive ischemic tissue necrosis occurs in 0.5%-1% of cases with CO poisoning.[1] The affinity of CO to Hb is 200-250 times more when compared to the affinity of oxygen. As a result of CO binding to Hb, oxygen delivery to the tissues is reduced, and tissue hypoxia develops. This affects mostly the brain and heart, which are the organs with the highest demand for oxygen. Hypoxia leads to oxidative stress, cellular necrosis, apoptosis, and inflammation in acute CO poisoning. Pathological changes in the brain observed in CO poisoning are hippocampal necrosis, demyelination of the cerebral white matter, and spongy necrosis of the globus pallidus and cerebral cortex."
    },
    { 
      id: 5,
      reference:"Bayramoglu, A., Kocak, A. O., & Kadioglu, E. (2018). Ischemic stroke due to carbon monoxide intoxication: Two case reports. World Journal of Emergency Medicine, 9(1), 73.",
      link:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5717382/",
      explanation:"Following its entrance into the human body through inhalation, carbon monoxide (CO) forms carboxyhemoglobin (COHb) by binding to hemoglobin (Hb) within the blood. Massive ischemic tissue necrosis occurs in 0.5%-1% of cases with CO poisoning.[1] The affinity of CO to Hb is 200-250 times more when compared to the affinity of oxygen. As a result of CO binding to Hb, oxygen delivery to the tissues is reduced, and tissue hypoxia develops. This affects mostly the brain and heart, which are the organs with the highest demand for oxygen. Hypoxia leads to oxidative stress, cellular necrosis, apoptosis, and inflammation in acute CO poisoning. Pathological changes in the brain observed in CO poisoning are hippocampal necrosis, demyelination of the cerebral white matter, and spongy necrosis of the globus pallidus and cerebral cortex."
    },
  ]})
  const baseURL = "http://127.0.0.1:8000/publications/";
   function getPubs() {
      axios.get(baseURL, {
        auth: {
          username: 'admin',
          password: 'password123'
        }}).then((response) => {
          setPublicationList(response.data.results);
      },[]);
    };
  useEffect(() =>{
    getPubs();
  },[]);
  const gridElements = [
    {
      id:1,
      title:"Acil Tıp",
      explanation:"Acil Tıp"
    },
    {
      id:2,
      title:"Hiperbarik",
      explanation:"This is the image"
    },
    {
      id:3,
      title:"Yara Bakımı",
      explanation:"This is the image"
    },
    {
      id:4,
      title:"Akademi",
      explanation:"This is the image"
    },
    {
      id:5,
      title:"İlk Yardım",
      explanation:"This is the image"
    },
    {
      id:6,
      title:"Daha fazlası",
      explanation:"This is the image"
    }
  ]
  const sections = ["Kimdir","Biyografi","Çalıştığı Alanlar","Yayınlar","Sosyal Medya"];
  {/* 1: write required sections above*/}
  return (
    <div className="App">
      <div id='Navbar'>
          <Navbar sections={sections}/>
      </div>                                            {/* 2: change logo in navbar */}
          <AboutUs/>                                    {/* 3: add paragraph + image */}
          <Biography/>
          <Grid elements={gridElements} />
      <div id='Contact'>
          <Publications publicationList={publicationList} />
      </div>
          <Contact/>
          <Footer/>
          <ScrollButton/>
    </div>
  );
}

export default App;

import React from 'react';
import HeaderContainer from "./components/header/HeaderContainer";
import './styles/fonts/fonts.css';
import './styles/main/main.scss';
import BannerSwiper from "./components/banerSwiper/BannerSwiper";
import {images} from "./data/data";
import GetInfoForm from "./components/getInfoForm/GetInfoForm";
import ClassesContainer from "./components/classesContainer/ClassesContainer";
import FooterContainer from "./components/footer/FooterContainer";
import {montaCademyClassList} from "./data/data";
import {schedule} from "./data/data";
import Schedule from "./components/montaAcademySchedule/Schedule";
import WhyMonta from "./components/whyMonta/WhyMonta";
import {montaCademyOptions} from "./data/data";
function App() {
    const [time,setTime] = React.useState(false);
    setTimeout(function(){ setTime(true) }, 1500);
  return (
    <div className="App">
        {
            time ? <React.Fragment>
                <HeaderContainer/>
                <BannerSwiper images={images}/>
                <GetInfoForm/>
                <ClassesContainer data={montaCademyClassList}/>
                <Schedule title={schedule.title} items={schedule.items}/>
                <WhyMonta title={montaCademyOptions.title} data={montaCademyOptions.options}/>
                <FooterContainer/>
            </React.Fragment> : <div className='loading'>
                <img alt='loading' src="https://www.monta.ir/client_resources/images/img/loader.gif"/>
            </div>
        }
    </div>
  )
}
export default App;

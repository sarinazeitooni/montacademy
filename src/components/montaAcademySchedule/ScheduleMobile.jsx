import React from "react";
import {MontAcademyScheduleTexts} from "../../data/data";
import './styles/schedule-mobile.scss';
const ScheduleMobile = ()=>{
    return(
        <React.Fragment>
            <div className='schedule-mobile-container'>
                <div className='title'>
                    {MontAcademyScheduleTexts.title}
                </div>
                <div className='subtitle'>
                    {MontAcademyScheduleTexts.subtitle}
                </div>
                <a download href='../../data/schedule.pdf'>
                    <div className='get-btn'>
                        {MontAcademyScheduleTexts.btn}
                    </div>
                </a>
            </div>
        </React.Fragment>
    )
};
export default ScheduleMobile;
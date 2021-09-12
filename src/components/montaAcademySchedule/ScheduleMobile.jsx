import React from "react";
import {texts} from "./texts/texts";
import './styles/schedule-mobile.scss';
const ScheduleMobile = ()=>{
    return(
        <React.Fragment>
            <button className='submit-buy'>{texts.submit}</button>
            <div className='schedule-mobile-container'>
                <div className='title'>
                    {texts.title}
                </div>
                <div className='subtitle'>
                    {texts.subtitle}
                </div>
                <a download="schedule.pdf"  href='../../data/schedule.pdf'>
                    <div className='get-btn'>
                        {texts.btn}
                    </div>
                </a>
            </div>
        </React.Fragment>
    )
};
export default ScheduleMobile;
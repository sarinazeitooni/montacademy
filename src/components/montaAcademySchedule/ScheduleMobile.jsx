import React, {useState} from "react";
import {MontAcademyScheduleTexts} from "../../data/data";
import './styles/schedule-mobile.scss';
import Modal from "../getInfoForm/modal/Modal";
const ScheduleMobile = ()=>{
    const [show , setShow] = useState(false);
    return(
        <React.Fragment>
            <button className='submit-buy' onClick={()=>{setShow(true)}}>{MontAcademyScheduleTexts.submit}</button>
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
            <Modal close={()=>{setShow(false)}} show={show}/>
        </React.Fragment>
    )
};
export default ScheduleMobile;
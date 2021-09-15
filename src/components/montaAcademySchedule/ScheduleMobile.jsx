import React, {useState} from "react";
import {texts} from "./texts/texts";
import './styles/schedule-mobile.scss';
import Modal from "../getInfoForm/modal/Modal";
const ScheduleMobile = ()=>{
    const [show , setShow] = useState(false);
    return(
        <React.Fragment>
            <button className='submit-buy' onClick={()=>{setShow(true)}}>{texts.submit}</button>
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
            <Modal close={()=>{setShow(false)}} show={show}/>
        </React.Fragment>
    )
};
export default ScheduleMobile;
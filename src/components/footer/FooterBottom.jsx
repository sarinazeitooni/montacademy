import React from "react";
import {FooterData} from "../../data/data";
export const FooterBottom = ()=>{
    return(
    <div className='footer-bottom-container'>
        <div className='right'>
            {FooterData.footerRightFirst}
            <img alt='heart' src={FooterData.heart}/>
            {FooterData.footerRightSecond}
        </div>
        <div className='left'>
            {FooterData.footerleft}
        </div>
    </div>
    )
};
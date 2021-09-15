import React from "react";
import './styles/footer.scss';
import {FooterData} from "../../data/data";

const FooterContainer = () => {
    return (
        <div className='footer-container'>
            <div className='columns-container'>
                <div className='column'>
                    <img alt='monta-footer' className='monta' src='https://www.monta.ir/landings/Footer//Monta_Footer.svg'/>
                    <img alt='monta-footer-mobile' className='monta-mobile' src='https://www.monta.ir/landings/Footer//Monta%20Logo%20-%20landscape.svg'/>
                </div>
                {
                    FooterData.columns.map((item) => {
                        return (
                            <div key={item.title} className="column">
                                <div className='column-title'>{item.title}</div>
                                {item.links && <div className='links-container'>
                                    {item.links.map((link) => {
                                        return (
                                            <div key={link} className='link'>{link}</div>
                                        )
                                    })}
                                </div>}
                                {item.title === FooterData.columns[2].title ?<div className='column-title-mobile'>{FooterData.columns[2].title}</div> : '' }
                                {item.icons && <div className='icons-container'>
                                    {item.icons.map((icon) => {
                                        return (
                                            <img key={icon} alt='monta-icon' className='icon' src={icon}/>
                                        )
                                    })}
                                </div>}
                                {item.title === FooterData.columns[2].title ?<div className='column-mobile'><img alt='etemad' src={FooterData.Enamad}/></div> : '' }
                                {item.communication && <div className='communication-container'>
                                    <div className='tel-and-email'>
                                        <span>
                                            <img alt='communication' src={item.communication.telIcon}/>
                                            {item.communication.number}
                                        </span>
                                        <span>
                                           <img alt='communication' src={item.communication.mailIcon}/>
                                            {item.communication.email}
                                        </span>
                                    </div>
                                    <div className='address'>
                                        <img alt='location' src={item.communication.locationIcon}/>
                                        <span>{item.communication.address}</span>
                                    </div>
                                </div>}
                            </div>
                        )
                    })
                }
                <div className='column etemad'>
                    <img alt='etemad' src={FooterData.Enamad}/>
                </div>
            </div>
            <hr/>
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
        </div>
    )
}
export default FooterContainer;
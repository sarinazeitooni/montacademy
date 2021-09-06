import React from "react";
import './styles/footer.scss';
import FooterData from "./data/data";

const FooterContainer = () => {
    return (
        <div className='footer-container'>
            <div className='columns-container'>
                <div className='column'>
                    <img src='https://www.monta.ir/landings/Footer//Monta_Footer.svg'/>
                </div>
                {
                    FooterData.columns.map((item) => {
                        return (
                            <div className="column">
                                <div className='column-title'>{item.title}</div>
                                {item.links && <div className='links-container'>
                                    {item.links.map((link) => {
                                        return (
                                            <div className='link'>{link}</div>
                                        )
                                    })}
                                </div>}
                                {item.icons && <div className='icons-container'>
                                    {item.icons.map((icon)=>{
                                        return(
                                            <img src={icon}/>
                                        )
                                    })}
                                </div> }
                            </div>
                        )
                    })
                }
                <div className='column'>
                    <img src={FooterData.Enamad}/>
                </div>
            </div>
        </div>
    )
};
export default FooterContainer;
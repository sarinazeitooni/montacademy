import React from "react";
import './styles/why-monta.scss';
const WhyMonta = ({title,data})=>{
    return(
        <div className='why-monta-container'>
            <div className='why-monta-title'>{title}</div>
            <div className='why-monta-items'>
                <div className='item-container'>
                    {data.map((item)=>{return(
                        <div key={item.index} className='options'>
                            <span className='index'> {item.index}</span>
                            <span className='option'>{item.title}</span>
                        </div>
                    )})}
                </div>
                <div className='item-img'>
                    <img alt='whymonta' src={data[0].url}/>
                </div>
            </div>
        </div>
    )
};
export default WhyMonta;
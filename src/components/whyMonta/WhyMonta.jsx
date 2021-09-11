import React from "react";
import {useState} from "react";
import './styles/why-monta.scss';
const WhyMonta = ({title,data})=>{
    const [index, setIndex] = useState(3);
    function urlHandler(i){
        setIndex(i+1);
    }
    return(
        <div className='why-monta-container'>
            <div className='why-monta-title'>{title}</div>
            <div className='why-monta-items'>
                <div className='item-container'>
                    {data.map((item)=>{return(
                        <div onClick={()=>{urlHandler(item.index)}} key={item.index} className='options'>
                            <span className='index'> {item.index}</span>
                            <span className='option'>{item.title}</span>
                        </div>
                    )})}
                </div>
                <div className='item-img'>
                    <img alt='whymonta' src={data[index].url}/>
                </div>
            </div>
        </div>
    )
}
export default WhyMonta;
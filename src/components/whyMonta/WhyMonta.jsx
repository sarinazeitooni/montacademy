import React from "react";
import {useState} from "react";
import './styles/why-monta.scss';

const WhyMonta = ({title, data}) => {
    const [index, setIndex] = useState(0);

    function urlHandler(i) {
        setIndex(i - 1);
    }

    return (
        <div className='why-monta-container'>
            <div className='why-monta-title'>{title}</div>
            <div className='why-monta-items'>
                <div className='item-container'>
                    {data.map((item) => {
                        return (
                            <div className={index + 1 === item.index ? 'selected options' : 'options'} onClick={() => {
                                urlHandler(item.index)
                            }} key={item.index}>
                                <span className='index'> {item.index}</span>
                                <span className='option'>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
                <div className='item-img'>
                    <img alt='whymonta' src={data[index].url}/>
                </div>
            </div>
        </div>
    )
}
export default WhyMonta;
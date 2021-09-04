import React from 'react';
import './styles/get-info-form.css';
import texts from "./data/texts";
const GetInfoForm = ()=>{
    return(
        <div className='get-info-form-container'>
            <h3 className='form-title'>{texts.title}</h3>
            <div className='form-data-container'>
                <div className='data-fields'>
                    <input type='text' placeholder={texts.name}/>
                </div>
                <div className='data-fields'>
                    <input type='text' placeholder={texts.number}/>
                </div>
                <div className='data-fields'></div>
                <div className='data-fields'></div>
            </div>
        </div>
    )
};
export default GetInfoForm;
import React from 'react';
import './styles/get-info-form.css';
import texts from "./data/texts";
const GetInfoForm = () => {
    return (
        <div className='get-info-form-container'>
            <h3 className='form-title'>{texts.title}</h3>
            <div className='form-data-container'>
                <div className='data-fields'>
                    <input type='text' placeholder={texts.name}/>
                </div>
                <div className='data-fields'>
                    <input type='text' placeholder={texts.number}/>
                </div>
                <div className='data-fields'>
                    <select>
                        {texts.selectItems.map((item) => {
                            return (<option className='custom-option'>{item}</option>)
                        })}
                        <option className='custom-option' selected disabled hidden>{texts.selectTitle}</option>
                    </select>
                </div>
                <div className='data-fields submit'>{texts.submit}</div>
            </div>
        </div>
    )
};
export default GetInfoForm;
import React from 'react';
import './styles/get-info-form.scss';
import texts from "./data/texts";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Popup from "reactjs-popup";
import Modal from "./modal/Modal";
const GetInfoForm = () => {
    return (
        <div className='get-info-form-container'>
            <h3 className='form-title'>{texts.title}</h3>
            <h3 className='form-title-mobile'>{texts.mobileTitle}</h3>
            <div className='form-data-container'>
                <div className='data-fields'>
                    <input type='text' placeholder={texts.name}/>
                </div>
                <div className='data-fields'>
                    <input type='text' placeholder={texts.number}/>
                </div>
                <div className='data-fields'>
                    <ArrowDropDownIcon/>
                    <select>
                        {texts.selectItems.map((item) => {
                            return (<option key={item} className='custom-option'>{item}</option>)
                        })}
                        <option className='custom-option' selected disabled hidden>{texts.selectTitle}</option>
                    </select>
                </div>
                <Popup trigger={<div className='data-fields submit'>{texts.submit}</div>} position="right center">
                    <Modal/>
                </Popup>
            </div>
        </div>
    )
};
export default GetInfoForm;
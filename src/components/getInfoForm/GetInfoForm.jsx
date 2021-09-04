import React from 'react';
import './styles/get-info-form.css';
import texts from "./data/texts";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
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
                    <TextField id="select" label={texts.selectTitle} value="20" select>
                        {texts.selectItems.map((item) => {
                            return (<MenuItem>{item}</MenuItem>)
                        })}
                    </TextField>
                </div>
                <div className='data-fields submit'>{texts.submit}</div>
            </div>
        </div>
    )
};
export default GetInfoForm;
import React, {useState} from "react";
import './styles/modal.scss';
import {texts} from "./texts/texts";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Modal({show, close}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [numberClass, setNumberClass] = useState('item');
    const [nameClass, setNameClass] = useState('item');
    const [option, setOption] = useState(0);

    function ChangeHandler(field, value) {
        field(value.target.value);
    }
    function Validation(e) {
        if (name === '') {
            setNameClass('item error');
            if (number === '' || number.length > 11 || number.length < 11) {
                setNumberClass('item error');
            } else {
                setNumberClass('item');
            }
        } else {
            if (number === '' || number.length > 11 || number.length < 11) {
                setNumberClass('item error');
            } else {
                setNumberClass('item');
                Submit();
                setName('');
                setNumber('');
                setOption(0);
            }
            setNameClass('item');
        }
    }

    function Submit() {
        axios({
            method: 'post',
            url: 'https://reqres.in/api/login/data',
            data: {
                name: name,
                mobile: number,
                majorid: option
            }
        }).then((res) => {
            toast('با موفقیت انجام شد');
            console.log(res, 'res');
        })
            .catch((error) => {
                toast('خطا');
                console.log(error, 'error')
            })
        close();
    }

    return (
        <React.Fragment>
            {show ? <div className='modal-container'>
                <div className='modal-pop-up'>
                    <div className='icon-container'>
                        <PhoneInTalkIcon/>
                    </div>
                    <div className='title'>{texts.title}</div>
                    <input placeholder={texts.nameInput} value={name} className={nameClass} id='name' onChange={(e) => {
                        ChangeHandler(setName, e)
                    }} type='text'/>
                    <input placeholder={texts.mobileInput} value={number} className={numberClass} id='number'
                           onChange={(e) => {
                               ChangeHandler(setNumber, e)
                           }} type='number'/>
                    <ArrowDropDownIcon/>
                    <select className='options' onChange={(e) => {
                        ChangeHandler(setOption, e)
                    }} id='options' defaultValue={option}>
                        {texts.selectOptions.map((item) => {
                            return (<option key={item.text} value={item.value} className='option'>{item.text}</option>)
                        })}
                        <option className='option' value={0} disabled hidden>{texts.selectTitle}</option>
                    </select>
                    <div className='buttons'>
                        <button className='cancel' onClick={close}>{texts.cancel}</button>
                        <button className='submit' type='submit' onClick={(e) => {
                            Validation(e)
                        }}>{texts.submit}</button>
                    </div>
                </div>
            </div> : ''}
        </React.Fragment>
    )
}

export default Modal;
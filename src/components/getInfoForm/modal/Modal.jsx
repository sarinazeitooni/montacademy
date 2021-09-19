import React, {useState} from "react";
import './styles/modal.scss';
import {GetInfotexts} from "../../../data/data";
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
    const [optionClass , setOptionClass] = useState('options');
    function ChangeHandler(field, value) {
        field(value.target.value);
    }
    function Validation() {
        if(name!==''){
            setNameClass('item');
            if(number!=='' && number.length === 11 && number.charAt(0)=== '0'){
                setNumberClass('item');
                if(option!==0){
                    setOptionClass('options')
                    Submit();
                }else setOptionClass('error options')
            }else setNumberClass('error item');
        }else setNameClass('error item');
    }
    function Submit() {
        setName('');
        setNumber('');
        setOption(0);
        axios({
            method: 'post',
            url: 'https://reqres.in/api/login/data',
            data: {
                name: name,
                mobile: number,
                majorid : option
            }
        }).then((res) => {
            toast(GetInfotexts.success);
        })
            .catch((error) => {
                toast( GetInfotexts.error,error);
            })
        close();
    }
    return (
        <React.Fragment>
            {show && <div className='modal-container'>
                <div className='modal-pop-up'>
                    <div className='icon-container'>
                        <PhoneInTalkIcon/>
                    </div>
                    <div className='title'>{GetInfotexts.title}</div>
                    <input autoFocus placeholder={GetInfotexts.nameInput} value={name} className={nameClass} id='name' onChange={(e) => {
                        ChangeHandler(setName, e)
                    }} type='text'/>
                    <input placeholder={GetInfotexts.mobileInput} value={number} className={numberClass} id='number'
                           onChange={(e) => {
                               ChangeHandler(setNumber, e)
                           }} type='number'/>
                    <ArrowDropDownIcon/>
                    <select className={optionClass} value={option} onChange={(e) => {
                        ChangeHandler(setOption, e)
                    }} id='options'>
                        {GetInfotexts.selectOptions.map((item) => {
                            return (<option key={item.text} value={item.value} className='option'>{item.text}</option>)
                        })}
                        <option className='option' value={0} hidden>{GetInfotexts.selectTitle}</option>
                    </select>
                    <div className='buttons'>
                        <button className='cancel' onClick={close}>{GetInfotexts.cancel}</button>
                        <button className='submit' type='submit' onClick={(e) => {
                            Validation()
                        }}>{GetInfotexts.submit}</button>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}
export default Modal;
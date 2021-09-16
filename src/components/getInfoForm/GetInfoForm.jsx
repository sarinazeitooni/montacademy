import React, {useState} from 'react';
import './styles/get-info-form.scss';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Modal from "./modal/Modal";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {GetInfotexts} from "../../data/data";
const GetInfoForm = () => {
    const [show , setShow] = useState(false);
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [option , setOption] = useState(0);
    const [numberClass , setNumberClass] = useState('');
    const [nameClass , setNameClass] = useState('');
    const [optionClass , setOptionClass] = useState('');
    function ChangeHandler(field , value){
        field(value.target.value);
    }
    function Validation(){
        if(name!==''){
            setNameClass('');
            if(number!=='' && number.length === 11){
                setNumberClass('');
                if(option!==0){
                    setOptionClass('')
                    Submit();
                }else setOptionClass('error')
            }else setNumberClass('error');
        }else setNameClass('error');
    }
    function Submit(){
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
                toast('با موفقیت انجام شد');
            })
                .catch((error) => {
                    toast.error( 'خطا',error);
                })
    }
    return (
        <div className='get-info-form-container'>
            <h3 className='form-title'>{GetInfotexts.title}</h3>
            <h3 className='form-title-mobile'>{GetInfotexts.mobileTitle}</h3>
            <div className='form-data-container'>
                <div className='data-fields'>
                    <input className={nameClass} value={name} type='text' onChange={(e)=>{ChangeHandler(setName,e )}}  placeholder={GetInfotexts.nameInput}/>
                </div>
                <div className='data-fields'>
                    <input className={numberClass} value={number} type='number' onChange={(e)=>{ChangeHandler(setNumber,e )}}  placeholder={GetInfotexts.mobileInput}/>
                </div>
                <div className='data-fields'>
                    <ArrowDropDownIcon/>
                    <select value={option} className={optionClass} onChange={(e)=>{ChangeHandler(setOption,e)}}>
                        {GetInfotexts.selectOptions.map((item) => {
                            return (<option key={item.text} value={item.value} className='custom-option'>{item.text}</option>)
                        })}
                        <option className='custom-option' value={0} hidden>{GetInfotexts.selectTitle}</option>
                    </select>
                </div>
                <div onClick={(e)=>{Validation()}} className='data-fields submit'>{GetInfotexts.submit}</div>
                <div onClick={()=>{setShow(true)}} className='data-fields submit-mobile'>{GetInfotexts.submit}</div>
            </div>
            <Modal close={()=>{setShow(false)}} show={show}/>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={true}
                closeOnClick
                rtl={true}
                pauseOnHover
            />
        </div>
    )}
export default GetInfoForm;
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
    function ChangeHandler(field , value){
        field(value.target.value);
    }
    function Validation(e){
        if(name===''){
            setNameClass('error');
            if(number==='' || number.length > 11 || number.length < 11){
                setNumberClass('error');
            }else{
                setNumberClass('');
            }
        }else{
            if(number==='' || number.length > 11 || number.length < 11){
                setNumberClass('error');
            }else{
                setNumberClass('');
                        Submit();
                        setName('');
                        setNumber('');
                        setOption(0);
            }
                setNameClass('');
        }
    }
    function Submit(){
        if(option!== 0 ){
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
                setOption(0);
            })
                .catch((error) => {
                    toast( 'خطا',error);
                })
        }
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
                    <select onChange={(e)=>{ChangeHandler(setOption,e)}} defaultValue={option}>
                        {GetInfotexts.selectOptions.map((item) => {
                            return (<option key={item.text} value={item.value} className='custom-option'>{item.text}</option>)
                        })}
                        <option className='custom-option' value={0} disabled hidden>{GetInfotexts.selectTitle}</option>
                    </select>
                </div>
                <div onClick={(e)=>{Validation(e)}} className='data-fields submit'>{GetInfotexts.submit}</div>
                <div onClick={()=>{setShow(true)}} className='data-fields submit-mobile'>{GetInfotexts.submit}</div>
            </div>
            <Modal close={()=>{setShow(false)}} show={show}/>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
};
export default GetInfoForm;
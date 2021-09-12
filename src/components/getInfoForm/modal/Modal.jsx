import React from "react";
import './styles/modal.scss';
import {texts} from "./texts/texts";

function Modal({show , close}) {
    return (
        <React.Fragment>
            {show ? <div className='modal-container'>
                <div className='modal-pop-up'>

                <button onClick={close}>{texts.cancel}</button>
                </div>
            </div> : ''}
        </React.Fragment>
    )
}
export default Modal;
import React from 'react';
import './styles/classes-container.scss';
import Classes from "./classes/Classes";
const ClassesContainer = ({data})=>{
    return(
        <div className='classes-main-container'>
            <div className='classes-container'>
                {data.map((item)=>{
                    return(
                        <React.Fragment key={item.index}>
                            <Classes title={item.title} extraTitle={item.extraTitle} mobileTitle={item.mobileTitle} cards={item.cards}/>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
};
export default ClassesContainer;
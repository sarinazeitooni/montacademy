import React from 'react';
import {menuData} from "../../data/data";
const Menu = ()=>{
    return(
        <ul>
            <li className='monta-icon' key='monta'><img alt='monta' src={menuData.img}/></li>
            {menuData.items.map((item)=>{
                return(
                    <li key={item.text}><a href={item.href ? item.href : ''}>{item.text}</a></li>
                )
            })}
        </ul>
    )
}
export default Menu;

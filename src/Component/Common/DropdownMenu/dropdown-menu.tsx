import React from 'react';
import style from './dropdown-menu.module.scss';
// import { userMenuItems } from '../../../data';
import MenuItem from './menu-item';

export interface IDropdownMenu {
    userMenuItems: string[]
}

const DropdownMenu = ({ userMenuItems }: IDropdownMenu) => {
    
    return (
        <ul className={style.menuList}>
            {userMenuItems.map((item: string) => {
                return (
                    <MenuItem children={item}/>
                )})
            }
        </ul>
    )
}

export default DropdownMenu
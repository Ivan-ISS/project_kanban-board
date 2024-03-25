import React from 'react';
import style from './dropdown-menu.module.scss';

interface IMenuItem {
    children: string
}

const MenuItem = ({ children }: IMenuItem) => {

    return (
        <li>
            <span className={style.menuItem}>
                {children}
            </span>
        </li>
    )
}

export default MenuItem
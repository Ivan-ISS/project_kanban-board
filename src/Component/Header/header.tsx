import React from 'react';
import style from './header.module.scss';
import UserAvatar from "../UserAvatar/user-avatar";
import Title from "../Title/title";
import DropdownMenu from '../Common/DropdownMenu/dropdown-menu';
import { userMenuItems } from '../../data';

const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.titleWrap}>
                <Title />
            </div>
            <UserAvatar>
                <DropdownMenu userMenuItems={userMenuItems} />
            </UserAvatar>
        </header>
    )
}

export default Header
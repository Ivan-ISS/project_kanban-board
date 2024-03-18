import React from 'react';
import style from './header.module.scss';
import UserAvatar from "../UserAvatar/user-avatar";
import Title from "../Title/title";

const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.titleWrap}>
                <Title />
            </div>
            <UserAvatar />
        </header>
    )
}

export default Header
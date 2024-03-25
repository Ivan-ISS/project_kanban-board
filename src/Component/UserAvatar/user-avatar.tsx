import React, { HTMLAttributes, useState } from 'react';
import iconArrow from '../../images/svg/arrow-up.svg'
import iconAvatar from '../../images/svg/user-avatar.svg'
import style from './user-avatar.module.scss';

export interface IUserAvatar extends HTMLAttributes<HTMLDivElement> {
    children?: JSX.Element | never[]
}

const UserAvatar = ({ children, ...props }: IUserAvatar) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const onClickButton = () => {
        setMenuOpen(v => !v)
    }

    return (
        <div {...props} className={style.avatar}>
            <button className={style.btnUser} onClick={onClickButton}>
                <img src={iconAvatar} alt="avatar" />
                <img className={menuOpen && children ? style.arrow : ''} src={iconArrow} alt="arrow" />
            </button>
            {
                menuOpen
                ? children
                : null
            }
        </div>
    )
}

export default UserAvatar
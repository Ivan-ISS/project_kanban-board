import React from 'react';
import iconArrow from '../../images/svg/arrow-up.svg'
import iconAvatar from '../../images/svg/user-avatar.svg'
import style from './userAvatar.module.scss';

const useAvatar = () => {

    return (
        <button className={style.btnUser}>
            <img src={iconAvatar} alt="avatar" />
            <img className={style.arrow} src={iconArrow} alt="arrow" />
        </button>
    )
}

export default useAvatar
import React from "react";
import style from './button.module.scss'
// import { IIdBlock } from '../../../types/blocks-types';

interface IButton {
    handleClickBtn: () => void,
    name: string,
    disabled?: boolean
}

const Button = ({ handleClickBtn, name, disabled }: IButton) => {

    return (
            <button className={style.button} type="button" onClick={handleClickBtn} disabled={disabled}>
                {name}
            </button>
    )
}
       
export default Button
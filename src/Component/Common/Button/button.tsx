import React, { ButtonHTMLAttributes } from "react";
import style from './button.module.scss'
// import { IIdBlock } from '../../../types/blocks-types';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    handleClickBtn: () => void,
    name: string,
    disabled?: boolean
}

const Button = ({ handleClickBtn, name, disabled, ...props }: IButton) => {

    return (
            <button {...props} className={style.button} type="button" onClick={handleClickBtn} disabled={disabled}>
                {name}
            </button>
    )
}

export default Button
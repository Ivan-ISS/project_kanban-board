import React from "react";
import style from './button.module.scss'
// import { IIdBlock } from '../../../types/blocks-types';

interface IButton {
    handleClickBtn: () => void,
    name: string
}

const Button = ({ handleClickBtn, name }: IButton) => {

    return (
            <button className={style.buttonAdd} type="button" onClick={handleClickBtn}>
                {name}
            </button>
    )
}
       
export default Button
import React from "react";
import style from './button.module.scss'
// import { IIdBlock } from '../../../types/blocks-types';

interface IButton {
    handleClickBtn: () => void
}

const Button = ({ handleClickBtn }: IButton) => {

    return (
            <button className={style.buttonAdd} type="button" onClick={handleClickBtn}>
                Clear board
            </button>
    )
}
       
export default Button
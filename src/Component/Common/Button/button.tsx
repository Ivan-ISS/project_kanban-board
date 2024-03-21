import React from "react";
import style from './button.module.scss'
// import { IIdBlock } from '../../../types/blocks-types';

const ButtonAdd = () => {

    const handleClickBtn = () => {
        localStorage.removeItem('tasksListJSON')
        window.location.reload();
    }

    return (
            <button className={style.buttonAdd} type="button" onClick={handleClickBtn}>
                Clear board
            </button>
    )
}
       
export default ButtonAdd
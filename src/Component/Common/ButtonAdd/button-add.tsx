import React, { useContext } from "react";
import style from './button-add.module.scss'
import { IIdBlock } from '../../../types/blocks-types';
import iconPlus from '../../../images/svg/plus.svg'
import { CanbanContext } from "../../Context/canban-context";

const ButtonAdd = ({ idBlock }: IIdBlock) => {
    const { handlerClickAddTask } = useContext(CanbanContext)

    return (
            <button className={style.buttonAdd} type="button" onClick={() => (handlerClickAddTask ? handlerClickAddTask(idBlock) : null)}>
                <img className={style.iconPlus} src={iconPlus} alt="plus add card" />
                Add card
            </button>
    )
}
       
export default ButtonAdd
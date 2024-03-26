import React, { useContext } from "react";
import style from './button-add.module.scss'
import { CanbanContext } from "../../Context/canban-context";

interface IIdBlock {
    idBlock: number,
    disabled?: boolean
}

const ButtonAdd = ({ idBlock, disabled }: IIdBlock) => {
    const { handlerClickAddTask } = useContext(CanbanContext)

    return (
            <button className={style.buttonAdd} type="button" disabled={disabled} onClick={() => (handlerClickAddTask ? handlerClickAddTask(idBlock) : null)} data-testid={idBlock}>
                <span className={style.plus}>+</span> Add card
            </button>
    )
}
       
export default ButtonAdd
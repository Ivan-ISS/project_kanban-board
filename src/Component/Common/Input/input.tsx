import React, { useContext } from "react";
import { useState } from "react";
import style from './input.module.scss'
import { IIdBlock } from '../../../types/blocks-types';
import { CanbanContext } from "../../Context/canban-context";

const Input = ({ idBlock }: IIdBlock) => {
    const { tasksList, handleTasksListValue, handlerClickAddTask } = useContext(CanbanContext)
    const [inputValue, setInput] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            tasksList?.push({
                block: idBlock,
                id: 1,
                name: inputValue,
                description: '',
            })
            //console.log(tasksMock)
            if (handleTasksListValue) {handleTasksListValue(tasksList)}
            if (handlerClickAddTask) {handlerClickAddTask(idBlock)}
            setInput('')
        }
    }

    return (
        <div className={style.form}>
                <input
                    className={style.input}
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <label className={style.label}>Введите задачу...</label>
        </div>
    )
}
       
export default Input
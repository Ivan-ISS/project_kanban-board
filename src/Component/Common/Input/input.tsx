import React, { useContext } from "react";
import { useState } from "react";
import style from './input.module.scss'
import { IIdBlock } from '../../../types/blocks-types';
import { CanbanContext } from "../../Context/canban-context";
import Button from "../Button/button";

const Input = ({ idBlock }: IIdBlock) => {
    const { tasksList, handleTasksListValue, handlerClickAddTask } = useContext(CanbanContext)
    const [inputValue, setInput] = useState('')

    const handleClickCancel = () => {
        if (handlerClickAddTask) {handlerClickAddTask(idBlock)}
    }

    const handleClickSubmit = () => {
        if (inputValue === '') return
        tasksList?.push({
            block: idBlock,
            id: tasksList.length + 1,
            name: inputValue,
            description: 'Описание',
        })
        if (handleTasksListValue) {handleTasksListValue(tasksList)}
        if (handlerClickAddTask) {handlerClickAddTask(idBlock)}
        setInput('')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (inputValue === '') return
        if (event.key === 'Enter') {
            tasksList?.push({
                block: idBlock,
                id: tasksList.length + 1,
                name: inputValue,
                description: 'Описание',
            })
            if (handleTasksListValue) {handleTasksListValue(tasksList)}
            if (handlerClickAddTask) {handlerClickAddTask(idBlock)}
            setInput('')
        }
    }

    return (
        <div>
            <div className={style.form}>
                    <input
                        className={style.input}
                        value={inputValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        required
                    />
                    <label className={style.label}>Введите задачу...</label>
            </div>
            <Button handleClickBtn={handleClickSubmit} name={"Submit"}/>
            <Button handleClickBtn={handleClickCancel} name={"Cancel"}/>
        </div>
    )
}
       
export default Input
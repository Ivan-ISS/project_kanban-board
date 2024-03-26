import React, { useContext } from "react";
import { useState } from "react";
import style from './input.module.scss'
import { IIdBlock } from '../../../types/blocks-types';
import { CanbanContext } from "../../Context/canban-context";
import Button from "../Button/button";
import { random } from "../../../utils/randomNum";

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
            id: tasksList.length + random(1, 10000),
            name: inputValue,
            description: 'This task has no description',
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
                id: tasksList.length + random(1, 10000),
                name: inputValue,
                description: 'This task has no description',
            })
            if (handleTasksListValue) {handleTasksListValue(tasksList)}
            if (handlerClickAddTask) {handlerClickAddTask(idBlock)}
            setInput('')
        }
    }

    return (
        <div className={style.addTaskPanel}>
            <div className={style.form}>
                    <input
                        className={style.input}
                        value={inputValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        data-testid="name-input"
                        required
                    />
                    <label className={style.label}>Введите задачу...</label>
            </div>
            <div className={style.btnPanel}>
                <Button handleClickBtn={handleClickSubmit} name={"Submit"} disabled={inputValue === ''} data-testid="submit-button"/>
                <Button handleClickBtn={handleClickCancel} name={"Cancel"}/>
            </div>
        </div>
    )
}
       
export default Input
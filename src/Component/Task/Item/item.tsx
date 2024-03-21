import React, { useContext, useEffect, useState } from 'react';
import style from './item.module.scss';
import { useParams } from 'react-router';
import { CanbanContext } from '../../Context/canban-context';
import { IListTaskItem } from '../../../types/tasks-types';

const TaskItem = () => {
    const { taskId } = useParams()
    const { tasksList, handleTasksListValue } = useContext(CanbanContext)

    const numTaskId = parseFloat(taskId as string)

    const item = tasksList?.find(item => item.id === numTaskId)
    const [inputValue, setInput] = useState(item?.description)
 
    //console.log('here', tasksList?.[numTaskId - 1].description)

    useEffect(() => {
        setInput(item?.description)
    }, [item])

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value)
        /* console.log(event.target.value) */
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {

            const updatedTasksList = [...tasksList as IListTaskItem[]];
            updatedTasksList[numTaskId - 1] = { ...updatedTasksList[numTaskId - 1], description: inputValue as string };

            if (handleTasksListValue) {handleTasksListValue(updatedTasksList)}
        }
    }

    return (
        <div className={style.itemTask}>
            <div className={style.heading}>
                <h2 className={style.taskName}>{item?.name}</h2>
                <button className={style.btnClose}>&#215;</button>
            </div>
            <textarea className={inputValue && inputValue === "Описание" ? style.description : style.descriptions} value={inputValue} onChange={(handleChange)} onKeyDown={handleKeyPress} />
        </div>
    )
}

export default TaskItem
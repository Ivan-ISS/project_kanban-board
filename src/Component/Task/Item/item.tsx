import React, { useContext, useEffect, useState } from 'react';
import style from './item.module.scss';
import { useNavigate, useParams } from 'react-router';
import { CanbanContext } from '../../Context/canban-context';
import { IListTaskItem } from '../../../types/tasks-types';
import iconClose from '../../../images/svg/close.svg'

const TaskItem = () => {
    const navigate = useNavigate()
    const { taskId } = useParams()
    const { tasksList, handleTasksListValue } = useContext(CanbanContext)

    const numTaskId = parseFloat(taskId as string)

    const item = tasksList?.find(item => item.id === numTaskId)
    const [inputValue, setInput] = useState(item?.description)
    console.log('Выбранная задача ', item)
 
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
            //updatedTasksList[numTaskId - 1] = { ...updatedTasksList[numTaskId - 1], description: inputValue as string };

            updatedTasksList.forEach((element, index) => {
                if (element.id === numTaskId) {
                    updatedTasksList[index] = { ...updatedTasksList[index], description: inputValue as string }
                }
            });

            if (handleTasksListValue) {handleTasksListValue(updatedTasksList)}
            navigate(`/`)
        }
    }

    const handleClick = () => {
            const updatedTasksList = [...tasksList as IListTaskItem[]];

            updatedTasksList.forEach((element, index) => {
                if (element.id === numTaskId) {
                    updatedTasksList[index] = { ...updatedTasksList[index], description: inputValue as string }
                }
            });

            if (handleTasksListValue) {handleTasksListValue(updatedTasksList)}
            navigate(`/`)
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                navigate(`/`)
            }
        }
    
        document.addEventListener('keydown', handleKeyDown)
    
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
      }, [])

    return (
        <div className={style.itemTask}>
            <div className={style.heading}>
                <h2 className={style.taskName}>{item?.name}</h2>
                <button className={style.btnClose} onClick={handleClick}>
                    <img className={style.iconClose} src={iconClose} alt="close icon" />
                </button>
            </div>
            <textarea className={inputValue === "This task has no description" ? style.description : style.descriptions} value={inputValue} onChange={(handleChange)} onKeyDown={handleKeyPress} />
        </div>
    )
}

export default TaskItem
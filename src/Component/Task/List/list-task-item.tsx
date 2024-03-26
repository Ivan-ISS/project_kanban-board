import React, { useContext } from 'react';
import style from './task.module.scss';
import { IListTaskItem } from '../../../types/tasks-types';
import { useNavigate } from 'react-router';
import { CanbanContext } from '../../Context/canban-context';
import iconClose from '../../../images/svg/close.svg'

const ListTaskItem = ({ block, id, name, description }: IListTaskItem) => {
    const { tasksList, handleTasksListValue, handlerClickAddTask } = useContext(CanbanContext)
    const navigate = useNavigate()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let dataAttr = (event.currentTarget as HTMLButtonElement).dataset.attr  // извлекаем дата-атрибут с номером id задачи
        let dataAttrNum: number
        if (dataAttr) {dataAttrNum = parseFloat(dataAttr)}
        // console.log(dataAttr)


        tasksList?.forEach((element, index) => {
            if (element.id === dataAttrNum) {   // ищем в списке задач ту, номер id которой совпадает с номером дата-атрибута задачи (по которой кликнули)
                tasksList.splice(index, 1)
            }
        });
        if (handleTasksListValue) {handleTasksListValue(tasksList)}
        if (handlerClickAddTask) {handlerClickAddTask(1)}
        if (handlerClickAddTask) {handlerClickAddTask(1)}
    }

   return (
        <div className={style.taskWrap}>
            <div className={style.task} data-attr={id} onClick={() => navigate(`/${id}`)}>
                {name}
            </div>
            <button className={style.btnDelete} data-attr={id} onClick={handleClick}>
                <img className={style.iconClose} src={iconClose} alt="close icon" />
            </button>
        </div>
   )
}

export default ListTaskItem
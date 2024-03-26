import React, { MouseEvent, useContext } from 'react';
import style from './dropdown.module.scss';
import { CanbanContext } from '../../Context/canban-context';

interface IDropdownListItem {
    text: string,
    idBlock: number,
    id: number
}

const DropdownListItem = ({ text, idBlock, id }: IDropdownListItem) => {
    const { tasksList, handlerClickAddTask, handleTasksListValue } = useContext(CanbanContext)

    const handleClick = (event: MouseEvent) => {
        // console.log((event.currentTarget as HTMLDivElement).dataset.value)
        let dataAttr = (event.currentTarget as HTMLDivElement).dataset.value    // извлекаем дата-атрибут с номером id задачи
        let dataAttrNum: number
        if (dataAttr) {dataAttrNum = parseFloat(dataAttr)}

        tasksList?.forEach(task => {
            if (task.id === dataAttrNum) {   // ищем в списке задач ту, номер id которой совпадает с номером дата-атрибута задачи (по которой кликнули)
                task.block += 1              // при клике на задачу увеличиваем номер блока, в котором она находится на 1, чтобы переместить в соседний блок
            }
        });

        if (handleTasksListValue) {handleTasksListValue(tasksList)}
        if (handlerClickAddTask) {handlerClickAddTask(idBlock)}
    }

    return (
        <div className={style.item} data-value={id} onClick={handleClick}>
            {text}
        </div>
    )
}

export default DropdownListItem
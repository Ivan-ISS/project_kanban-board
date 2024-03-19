import React, { MouseEvent, useContext } from 'react';
import style from './dropdown.module.scss';
import { CanbanContext } from '../../Context/canban-context';

interface IDropdownListItem {
    text: number,
    idBlock: number,
    id: number
}

const DropdownListItem = ({ text, idBlock, id }: IDropdownListItem) => {
    const { tasksList, handlerClickAddTask, handleTasksListValue } = useContext(CanbanContext)

    const handleClick = (event: MouseEvent) => {
        console.log((event.currentTarget as HTMLDivElement).dataset.value)
        let dataAttr = (event.currentTarget as HTMLDivElement).dataset.value
        let dataAttrNum: number
        if (dataAttr) {dataAttrNum = parseFloat(dataAttr)}

        tasksList?.forEach(task => {
            if (task.id === dataAttrNum) {
                task.block += 1
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
import React from 'react';
import style from './task.module.scss';
import { tasksMock } from '../../../data';
import ListTaskItem from './list-task-item';

const ListTask = () => {

    return (
        <div className={style.listBlocks}>
            {tasksMock.map((task) => {
                return (
                    <ListTaskItem block={task.block} id={task.id} name={task.name} description={task.description}/>
                )}
            )}
        </div>
    )
}

export default ListTask
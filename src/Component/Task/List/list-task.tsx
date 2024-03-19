import React, { useContext } from 'react';
import style from './task.module.scss';
import { IIdBlock } from '../../../types/blocks-types';
// import { tasksMock } from '../../../data';
import ListTaskItem from './list-task-item';
import { CanbanContext } from '../../Context/canban-context';

const ListTask = ({ idBlock }: IIdBlock) => {
    const { tasksList } = useContext(CanbanContext)

    return (
        <div className={style.listTask}>
            {tasksList?.map((task, index) => {
                return (
                    <>
                        {
                            task.block === idBlock  // отображаем только те задачи, которые соответствуют текущему блоку (номеру блока)
                            ? <div key={index}><ListTaskItem block={task.block} id={task.id} name={task.name} description={task.description}/></div>
                            : null
                        }
                    </>
                )}
            )}
        </div>
    )
}

export default ListTask
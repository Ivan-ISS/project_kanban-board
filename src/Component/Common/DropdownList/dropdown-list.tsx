import React, { useContext } from 'react';
import style from './dropdown.module.scss';
import { IIdBlock } from '../../../types/blocks-types';
import DropdownListItem from './dropdown-list-item';
import { CanbanContext } from '../../Context/canban-context';

const DropdownList = ({ idBlock }: IIdBlock) => {
    const { tasksList, handlerClickAddTask } = useContext(CanbanContext)

    return (
        <div className={style.dropdownList}>
            <div className={style.arrow} onClick={() => { if (handlerClickAddTask) {handlerClickAddTask(idBlock)} }}>
                &#8744;
            </div>
            <ul className={style.list}>
                    {tasksList?.map((task, index) => {
                        return (
                            <div className={style.wrapItem} key={index}>
                                <DropdownListItem text={task.block} idBlock={idBlock} id={task.id}/>
                            </div>
                        )}
                    )}
            </ul>
        </div>
    )
}

export default DropdownList
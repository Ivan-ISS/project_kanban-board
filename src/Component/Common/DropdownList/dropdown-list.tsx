import React, { useContext } from 'react';
import style from './dropdown.module.scss';
import { IIdBlock } from '../../../types/blocks-types';
import DropdownListItem from './dropdown-list-item';
import { CanbanContext } from '../../Context/canban-context';
import iconArrow from '../../../images/svg/big-arrow.svg'

const DropdownList = ({ idBlock }: IIdBlock) => {
    const { tasksList, handlerClickAddTask } = useContext(CanbanContext)

    return (
        <div className={style.dropdownList}>
            <div className={style.arrow} onClick={() => { if (handlerClickAddTask) {handlerClickAddTask(idBlock)} }}>
                <img className={style.iconClose} src={iconArrow} alt="close icon" />
            </div>
            <ul className={style.list}>
                    {tasksList?.map((task, index) => {
                        return (
                            <>
                                {task.block === idBlock - 1 // отображаем в списке только те задачи, которые соответствуют предыдущему блоку (номеру блока)
                                ?
                                    <div className={style.wrapItem} key={index}>
                                        <DropdownListItem text={task.name} idBlock={idBlock} id={task.id}/>
                                    </div>
                                : null
                                }
                            </>
                        )}
                    )}
            </ul>
        </div>
    )
}

export default DropdownList
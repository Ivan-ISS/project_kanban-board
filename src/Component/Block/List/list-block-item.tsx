import React, { useContext } from 'react';
import style from './block.module.scss';
import { IListBlockItem } from '../../../types/blocks-types';
import ListTask from '../../Task/List/list-task';
import ButtonAdd from '../../Common/ButtonAdd/button-add';
import Input from '../../Common/Input/input';
import DropdownList from '../../Common/DropdownList/dropdown-list';
import { CanbanContext } from '../../Context/canban-context';

const ListBlockItem = ({ title, idBlock }: IListBlockItem) => {
    const { addCard } = useContext(CanbanContext)

    return (
        <div className={style.block}>
            <div>{title}</div>
            <ListTask idBlock={idBlock}/>
            {
                idBlock === 1 && addCard && addCard[idBlock]
                ? <Input idBlock={idBlock}/>
                : null
            }
            {
                idBlock !== 1 && addCard && addCard[idBlock]
                ? <DropdownList idBlock={idBlock}/>
                : null
            }
            <ButtonAdd idBlock={idBlock}/>
        </div>
    )
}

export default ListBlockItem
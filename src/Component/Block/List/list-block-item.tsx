import React, { useContext, useEffect, useState } from 'react';
import style from './block.module.scss';
import { IListBlockItem } from '../../../types/blocks-types';
import ListTask from '../../Task/List/list-task';
import ButtonAdd from '../../Common/ButtonAdd/button-add';
import Input from '../../Common/Input/input';
import DropdownList from '../../Common/DropdownList/dropdown-list';
import toArrayNumBlocks from '../../../utils/to-array-helper';
import { CanbanContext } from '../../Context/canban-context';

const ListBlockItem = ({ title, idBlock }: IListBlockItem) => {
    const [arrayNumBlocks, setArrayNumBlocks] = useState<number[]>();
    const { addCard, tasksList } = useContext(CanbanContext)

    useEffect(() => {
        setArrayNumBlocks(toArrayNumBlocks(tasksList))        // Надо переделать переменную arrayNumBlocks из массива в map чтоли
        console.log(arrayNumBlocks)
    },[addCard])

    return (
        <div className={style.block}>
            <div>{title}</div>
            <ListTask idBlock={idBlock}/>
            {
                idBlock === 1 && addCard && addCard[idBlock]  // Если id блока совпадает с номером в переменной, а под этим номером указано true, то показываем
                ? <Input idBlock={idBlock}/>                  // (true на false меняется при нажатии на addCard)
                : null
            }
            {
                idBlock !== 1 && addCard && addCard[idBlock]  // Если id блока совпадает с номером в переменной, а под этим номером указано true, то показываем
                ? <DropdownList idBlock={idBlock}/>           // (true на false меняется при нажатии на addCard)  
                : null
            }
            {
                idBlock !== 1 && !arrayNumBlocks?.includes(idBlock - 1)  // Проверяем - если массив с предшествующем номером блока задач пуст, то кнопка disabled
                ? <ButtonAdd idBlock={idBlock} disabled={true}/>
                : <ButtonAdd idBlock={idBlock} disabled={false}/>
            }
            {/* <ButtonAdd idBlock={idBlock} disabled={false}/> */}
        </div>
    )
}

export default ListBlockItem
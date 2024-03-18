import React from 'react';
import style from './block.module.scss';
import { IListBlockItem } from '../../../types/blocks-types';
import ListTask from '../../Task/List/list-task';

const ListBlockItem = ({ title, id }: IListBlockItem) => {

   return (
        <div className={style.block}>
            {title}
            <ListTask />
        </div>
   )
}

export default ListBlockItem
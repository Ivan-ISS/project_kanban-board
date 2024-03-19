import React from 'react';
import style from './task.module.scss';
import { IListTaskItem } from '../../../types/tasks-types';

const ListTaskItem = ({ block, id, name, description }: IListTaskItem) => {

   return (
        <div className={style.task} data-attr={id}>
            {name}
        </div>
   )
}

export default ListTaskItem
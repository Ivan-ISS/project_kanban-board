import React from 'react';
import style from './task.module.scss';
import { IListTaskItem } from '../../../types/tasks-types';
import { useNavigate } from 'react-router';

const ListTaskItem = ({ block, id, name, description }: IListTaskItem) => {
    const navigate = useNavigate()

   return (
        <div className={style.task} data-attr={id} onClick={() => navigate(`/${id}`)}>
            {name}
        </div>
   )
}

export default ListTaskItem
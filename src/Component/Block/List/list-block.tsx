import React from 'react';
import style from './block.module.scss';
import { blocks } from '../../../data';
import ListBlockItem from './list-block-item';

const ListBlock = () => {

    return (
        <div className={style.listBlocks}>
            {blocks.map((block) => {
                return (
                    <ListBlockItem title={block.title} id={block.id}/>
                )}
            )}
        </div>
    )
}

export default ListBlock
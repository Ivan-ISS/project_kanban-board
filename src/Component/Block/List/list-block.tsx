import React, { useContext } from 'react';
import style from './block.module.scss';
import { CanbanContext } from '../../Context/canban-context';
// import { blocks } from '../../../data';
import ListBlockItem from './list-block-item';

const ListBlock = () => {
    const { blocks } = useContext(CanbanContext)

    return (
        <div className={style.listBlocks}>
            {blocks?.map((block, index) => {
                return (
                    <div className={style.wrapBlock} key={index}>
                        <ListBlockItem title={block.title} idBlock={block.idBlock}/>
                    </div>
                )}
            )}
        </div>
    )
}

export default ListBlock
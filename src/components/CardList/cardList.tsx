import styles from './cardList.module.scss';
import { IBlocks } from '../../types/entityTypes';
import { FunctionComponent } from 'react';

import { Card } from '../Card';

export interface ICardListProps {
    blocks: IBlocks[];
}

const CardList: FunctionComponent<ICardListProps> = ({ blocks }): JSX.Element => {
    return (
        <div className={styles.cardList}>
            {blocks.map((block) => (
                <Card key={block.blockId} title={block.title} tasks={block.tasks} />
            ))}
        </div>
    );
};

export { CardList };

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
            {blocks.map((block, index) => (
                <Card
                    key={block.blockId}
                    blockId={block.blockId}
                    blocks={blocks}
                    title={block.title}
                    tasks={block.tasks}
                    isDisabledAddTask={block.blockId > 1 && !blocks[index - 1].tasks.length}
                />
            ))}
        </div>
    );
};

export { CardList };

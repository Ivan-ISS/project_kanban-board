import styles from './cardList.module.scss';
import { ITasks, IBlock } from '../../types/entityTypes';
import { FunctionComponent } from 'react';

import { Card } from '../Card';

export interface ICardProps {
    blocks: IBlock[];
    tasks: ITasks[];
}

const CardList: FunctionComponent<ICardProps> = ({ blocks, tasks }): JSX.Element => {
    const tasksData = tasks.find((task, index) => blocks[index].blockId === task.blockId);

    return (
        <div className={styles.cardList}>
            {blocks.map((block) => (
                <Card key={block.blockId} title={block.title} tasks={tasksData?.tasks} />
            ))}
        </div>
    );
};

export { CardList };

import styles from './cardList.module.scss';
import { ITasks, IBlock } from '../../types/entityTypes';
import { FunctionComponent } from 'react';

import { Card } from '../Card';

export interface ICardProps {
    blocks: IBlock[];
    tasks: ITasks[];
}

const CardList: FunctionComponent<ICardProps> = ({ blocks, tasks }): JSX.Element => {
    return (
        <div className={styles.cardList}>
            {blocks.map((block) => (
                <Card
                    key={block.blockId}
                    title={block.title}
                    tasks={tasks.find((task) => block.blockId === task.blockId)?.tasks}
                />
            ))}
        </div>
    );
};

export { CardList };

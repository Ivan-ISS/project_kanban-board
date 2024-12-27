import styles from './cardList.module.scss';
import { FunctionComponent, useContext } from 'react';

import { KanbanContext } from '../../context/kanbanContext';
import { Card } from '../Card';

const CardList: FunctionComponent = (): JSX.Element => {
    const { blocks } = useContext(KanbanContext);

    return (
        <div className={styles.cardList}>
            {blocks.map((block, index) => {
                const isFirstBlock = block.blockId === 1;
                const tasksPrevBlock = !isFirstBlock ? blocks[index - 1].tasks : [];

                return (
                    <Card
                        key={index}
                        block={block}
                        isFirstBlock={isFirstBlock}
                        tasksPrevBlock={tasksPrevBlock}
                    />
                );
            })}
        </div>
    );
};

export { CardList };

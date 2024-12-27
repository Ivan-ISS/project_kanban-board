import styles from './card.module.scss';
import { IBlock, ITask } from '../../types/entityTypes';
import { FunctionComponent, useContext } from 'react';

import { KanbanContext } from '../../context/kanbanContext';
import { TaskList } from './TaskList';
import { TaskForm } from './TaskForm';
import { SecondaryButton } from '../Common/Buttons/SecondaryButton';
import { TaskListDropdown } from './TaskListDropdown';

export interface ICardProps {
    block: IBlock;
    tasksPrevBlock: ITask[];
    isFirstBlock: boolean;
}

const Card: FunctionComponent<ICardProps> = ({
    block,
    tasksPrevBlock,
    isFirstBlock,
}): JSX.Element => {
    const { isAddPressed, handlePressAdd } = useContext(KanbanContext);
    const { blockId, title, tasks } = block;

    const isShowForm = isFirstBlock && isAddPressed[blockId];
    const isShowList = !isFirstBlock && isAddPressed[blockId];
    const isShowAdd = !isAddPressed[blockId];

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <TaskList tasks={tasks} />
            {isShowForm && <TaskForm blockId={blockId} />}
            {isShowList && <TaskListDropdown blockId={blockId} tasksPrevBlock={tasksPrevBlock} />}
            {isShowAdd && (
                <SecondaryButton
                    text={'Add card'}
                    symbol={'+'}
                    onClick={() => handlePressAdd(blockId)}
                    isDisabled={!isFirstBlock && !tasksPrevBlock.length}
                />
            )}
        </div>
    );
};

export { Card };

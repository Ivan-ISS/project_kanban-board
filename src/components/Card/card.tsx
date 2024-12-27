import styles from './card.module.scss';
import { IBlock, ITask } from '../../types/entityTypes';
import { FunctionComponent, useContext } from 'react';

import { KanbanContext } from '../../context/kanbanContext';
import { TaskList } from './TaskList';
import { TaskAddForm } from './TaskAddForm';
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
    const { isAddPressed, handleAddTask } = useContext(KanbanContext);
    const { blockId, title, tasks } = block;

    const isShowForm = isFirstBlock && isAddPressed[blockId];
    const isShowList = !isFirstBlock && isAddPressed[blockId];

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <TaskList tasks={tasks} />
            {isShowForm && <TaskAddForm />}
            {isShowList && <TaskListDropdown blockId={blockId} tasksPrevBlock={tasksPrevBlock} />}
            <SecondaryButton
                text={'Add card'}
                symbol={'+'}
                onClick={() => handleAddTask(blockId)}
                isDisabled={!isFirstBlock && !tasksPrevBlock.length}
            />
        </div>
    );
};

export { Card };

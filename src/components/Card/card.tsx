import styles from './card.module.scss';
import { IBlocks, ITask } from '../../types/entityTypes';
import { FunctionComponent, useContext } from 'react';

import { KanbanContext } from '../../context/kanbanContext';
import { LineList } from './LineList';
import { TaskAddForm } from './TaskAddForm';
import { SecondaryButton } from '../Common/Buttons/SecondaryButton';

export interface ICardProps {
    blockId: number;
    blocks: IBlocks[];
    title: string;
    tasks: ITask[] | undefined;
    isDisabledAddTask: boolean;
}

const Card: FunctionComponent<ICardProps> = ({
    blockId,
    blocks,
    title,
    tasks,
    isDisabledAddTask,
}): JSX.Element => {
    const { isAddPressed, handleAddTask } = useContext(KanbanContext);

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            {tasks && <LineList tasks={tasks} blocks={blocks} blockId={blockId} />}
            {blockId === 1 && isAddPressed[blockId] && <TaskAddForm />}
            <SecondaryButton
                text={'Add card'}
                symbol={'+'}
                onClick={() => handleAddTask(blockId)}
                isDisabled={blockId > 1 ? isDisabledAddTask : false}
            />
        </div>
    );
};

export { Card };

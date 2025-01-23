import styles from './taskListDropdown.module.scss';
import { IBlock, ITask } from '../../../types/entityTypes';

import { KanbanContext } from '../../../context/kanbanContext';
import { FunctionComponent, useContext } from 'react';
import { TaskDropdown } from './/TaskDropdown';

export interface ITaskListDropdownProps {
    blockId: number;
    tasksPrevBlock: ITask[];
}

const TaskListDropdown: FunctionComponent<ITaskListDropdownProps> = ({
    blockId,
    tasksPrevBlock,
}): JSX.Element => {
    const { blocks, handlePressAdd, handleMoveTask } = useContext(KanbanContext);

    const handleClickArrow = (blockId: number) => {
        handlePressAdd(blockId);
    };

    const handleClickTask = (taskId: number, blockId: number, blocks: IBlock[]) => {
        handleMoveTask(taskId, blockId, blocks);
        handlePressAdd(blockId);
    };

    return (
        <div className={styles.taskListDropdown}>
            <div className={styles.arrow} onClick={() => handleClickArrow(blockId)}>
                &#8897;
            </div>
            <div className={styles.list}>
                {tasksPrevBlock.map((task, index) => (
                    <TaskDropdown
                        key={index}
                        task={task}
                        onClick={() => handleClickTask(task.taskId, blockId, blocks)}
                    />
                ))}
            </div>
        </div>
    );
};

export { TaskListDropdown };

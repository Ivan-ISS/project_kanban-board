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
    const { blocks, handleAddTask, handleSelectTask } = useContext(KanbanContext);

    const handleClickArrow = (blockId: number) => {
        handleAddTask(blockId);
    };

    const handleClickTask = (taskId: number, blockId: number, blocks: IBlock[]) => {
        handleSelectTask(taskId, blockId, blocks);
        handleAddTask(blockId);
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
                        task={task.name}
                        onClick={() => handleClickTask(task.taskId, blockId, blocks)}
                    />
                ))}
            </div>
        </div>
    );
};

export { TaskListDropdown };

import styles from './dropdownTaskList.module.scss';
import { ITask } from '../../../types/entityTypes';

import { KanbanContext } from '../../../context/kanbanContext';
import { FunctionComponent, useContext } from 'react';
import { DropdownTask } from './DropdownTask';

export interface IDropdownLineListProps {
    blockId: number;
    tasksPrevBlock: ITask[];
}

const DropdownTaskList: FunctionComponent<IDropdownLineListProps> = ({
    blockId,
    tasksPrevBlock,
}): JSX.Element => {
    const { blocks, handleAddTask, handleSelectTask } = useContext(KanbanContext);

    return (
        <div className={styles.dropdownTaskList}>
            <div className={styles.arrow} onClick={() => handleAddTask(blockId)}>
                &#8897;
            </div>
            <div className={styles.list}>
                {tasksPrevBlock.map((task, index) => (
                    <DropdownTask
                        key={index}
                        task={task.name}
                        onClick={() => handleSelectTask(task.taskId, blockId, blocks)}
                    />
                ))}
            </div>
        </div>
    );
};

export { DropdownTaskList };

import styles from './dropdownLineList.module.scss';
import { ITask } from '../../../types/entityTypes';

import { KanbanContext } from '../../../context/kanbanContext';
import { FunctionComponent, useContext } from 'react';
import { DropdownLine } from './DropdownLine';

export interface IDropdownLineListProps {
    blockId: number;
    tasksPrevBlock: ITask[];
}

const DropdownLineList: FunctionComponent<IDropdownLineListProps> = ({
    blockId,
    tasksPrevBlock,
}): JSX.Element => {
    const { blocks, handleAddTask, handleSelectTask } = useContext(KanbanContext);

    return (
        <div className={styles.dropdownLineList}>
            <div className={styles.arrow} onClick={() => handleAddTask(blockId)}>
                &#8897;
            </div>
            <div className={styles.list}>
                {tasksPrevBlock.map((task, index) => (
                    <DropdownLine
                        key={index}
                        text={task.name}
                        onClick={() => handleSelectTask(task.taskId, blockId, blocks)}
                    />
                ))}
            </div>
        </div>
    );
};

export { DropdownLineList };

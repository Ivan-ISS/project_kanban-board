import styles from './lineList.module.scss';
import { IBlocks, ITask } from '../../../types/entityTypes';
import { FunctionComponent, useContext } from 'react';

import { KanbanContext } from '../../../context/kanbanContext';
import { Line } from './Line';

export interface ILineListProps {
    blocks: IBlocks[];
    blockId: number;
    tasks: ITask[];
}

const LineList: FunctionComponent<ILineListProps> = ({ blocks, tasks, blockId }): JSX.Element => {
    const { handleSelectTask } = useContext(KanbanContext);

    return (
        <div className={styles.lineList}>
            {tasks.map((task) => (
                <Line
                    key={task.taskId}
                    text={task.name}
                    onClick={() => handleSelectTask(task.taskId, blockId + 1, blocks)}
                />
            ))}
        </div>
    );
};

export { LineList };

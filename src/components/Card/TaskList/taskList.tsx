import styles from './taskList.module.scss';
import { ITask } from '../../../types/entityTypes';
import { FunctionComponent } from 'react';

import { Task } from './Task';

export interface ILineListProps {
    tasks: ITask[];
}

const TaskList: FunctionComponent<ILineListProps> = ({ tasks }): JSX.Element => {
    return (
        <div className={styles.taskList}>
            {tasks.map((task, index) => (
                <Task key={index} task={task.name} />
            ))}
        </div>
    );
};

export { TaskList };

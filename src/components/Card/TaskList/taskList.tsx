import styles from './taskList.module.scss';
import { ITask } from '../../../types/entityTypes';
import { FunctionComponent } from 'react';

import { Task } from './Task';

export interface ITaskListProps {
    tasks: ITask[];
}

const TaskList: FunctionComponent<ITaskListProps> = ({ tasks }): JSX.Element => {
    return (
        <div className={styles.taskList}>
            {tasks.map((task, index) => (
                <Task key={index} task={task.name} />
            ))}
        </div>
    );
};

export { TaskList };

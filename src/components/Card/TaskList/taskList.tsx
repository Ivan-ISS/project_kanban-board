import styles from './taskList.module.scss';
import routes from '../../../routes';
import { ITask } from '../../../types/entityTypes';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Task } from './Task';

export interface ITaskListProps {
    tasks: ITask[];
}

const TaskList: FunctionComponent<ITaskListProps> = ({ tasks }): JSX.Element => {
    const navigate = useNavigate();

    const handleClickTask = (taskId: ITask['taskId']) => {
        navigate(`${routes.task()}/${taskId}`);
    };

    return (
        <div className={styles.taskList}>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onClick={() => handleClickTask(task.taskId)} />
            ))}
        </div>
    );
};

export { TaskList };

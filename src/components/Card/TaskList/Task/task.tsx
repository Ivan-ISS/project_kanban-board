import styles from './task.module.scss';
import { ITask } from '../../../../types/entityTypes';
import { FunctionComponent, HTMLAttributes } from 'react';

export interface ITaskProps extends HTMLAttributes<HTMLDivElement> {
    task: ITask;
}

const Task: FunctionComponent<ITaskProps> = ({ task, ...props }): JSX.Element => {
    return (
        <div {...props} className={styles.task}>
            {task.name}
        </div>
    );
};

export { Task };

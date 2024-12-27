import styles from './task.module.scss';
import { FunctionComponent, HTMLAttributes } from 'react';

export interface ITaskProps extends HTMLAttributes<HTMLDivElement> {
    task: string;
}

const Task: FunctionComponent<ITaskProps> = ({ task, ...props }): JSX.Element => {
    return (
        <div {...props} className={styles.task}>
            {task}
        </div>
    );
};

export { Task };

import styles from './task.module.scss';
import { FunctionComponent, HTMLAttributes } from 'react';

export interface ILineProps extends HTMLAttributes<HTMLDivElement> {
    task: string;
}

const Task: FunctionComponent<ILineProps> = ({ task, ...props }): JSX.Element => {
    return (
        <div {...props} className={styles.task}>
            {task}
        </div>
    );
};

export { Task };

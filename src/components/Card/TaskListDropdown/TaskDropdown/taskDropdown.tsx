import styles from './taskDropdown.module.scss';
import { ITask } from '../../../../types/entityTypes';

import { FunctionComponent, HTMLAttributes } from 'react';

export interface ITaskDropdownProps extends HTMLAttributes<HTMLDivElement> {
    task: ITask;
}

const TaskDropdown: FunctionComponent<ITaskDropdownProps> = ({ task, ...props }): JSX.Element => {
    return (
        <div {...props} className={styles.taskDropdown}>
            {task.name}
        </div>
    );
};

export { TaskDropdown };

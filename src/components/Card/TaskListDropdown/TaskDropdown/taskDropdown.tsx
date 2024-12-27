import styles from './taskDropdown.module.scss';

import { FunctionComponent, HTMLAttributes } from 'react';

export interface ITaskDropdownProps extends HTMLAttributes<HTMLDivElement> {
    task: string;
}

const TaskDropdown: FunctionComponent<ITaskDropdownProps> = ({ task, ...props }): JSX.Element => {
    return (
        <div {...props} className={styles.taskDropdown}>
            {task}
        </div>
    );
};

export { TaskDropdown };

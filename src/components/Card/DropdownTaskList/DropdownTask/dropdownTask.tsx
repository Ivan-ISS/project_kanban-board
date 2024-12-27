import styles from './dropdownTask.module.scss';

import { FunctionComponent, HTMLAttributes } from 'react';

export interface IDropdownLineProps extends HTMLAttributes<HTMLDivElement> {
    task: string;
}

const DropdownTask: FunctionComponent<IDropdownLineProps> = ({ task, ...props }): JSX.Element => {
    return (
        <div {...props} className={styles.dropdownTask}>
            {task}
        </div>
    );
};

export { DropdownTask };

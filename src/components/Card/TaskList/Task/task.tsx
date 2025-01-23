import styles from './task.module.scss';
import { ITask } from '../../../../types/entityTypes';
import { FunctionComponent, HTMLAttributes } from 'react';

import { CloseButton } from '../../../Common/Buttons/CloseButton';

export interface ITaskProps extends HTMLAttributes<HTMLDivElement> {
    task: ITask;
}

const Task: FunctionComponent<ITaskProps> = ({ task, ...props }): JSX.Element => {
    return (
        <div {...props} className={styles.task}>
            <div>{task.name}</div>
            <CloseButton color={'rose'} size={'small'} />
        </div>
    );
};

export { Task };

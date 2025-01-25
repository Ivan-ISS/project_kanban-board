import styles from './task.module.scss';
import { ITask } from '../../../../types/entityTypes';
import { FunctionComponent, HTMLAttributes, useContext } from 'react';

import { KanbanContext } from '../../../../context/kanbanContext';
import { CloseButton } from '../../../Common/Buttons/CloseButton';

export interface ITaskProps extends HTMLAttributes<HTMLDivElement> {
    task: ITask;
}

const Task: FunctionComponent<ITaskProps> = ({ task, ...props }): JSX.Element => {
    const { handleRemoveTask, blocks } = useContext(KanbanContext);

    const handleClickClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        handleRemoveTask(task.taskId, blocks);
    };

    return (
        <div {...props} className={styles.task}>
            <div>{task.name}</div>
            <CloseButton color={'burgundy'} size={'small'} onClick={handleClickClose} />
        </div>
    );
};

export { Task };

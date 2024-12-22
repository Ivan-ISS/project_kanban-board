import styles from './card.module.scss';
import { ITask } from '../../types/entityTypes';
import { FunctionComponent } from 'react';

import { LineList } from './LineList';
import { TaskAddForm } from './TaskAddForm';
import { SecondaryButton } from '../Common/Buttons/SecondaryButton';

export interface ICardProps {
    title: string;
    tasks: ITask[] | undefined;
    isDisabledAddTask: boolean;
}

const Card: FunctionComponent<ICardProps> = ({ title, tasks, isDisabledAddTask }): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            {tasks && <LineList tasks={tasks} />}
            {title === 'Backlog' && <TaskAddForm />}
            <SecondaryButton text={'Add card'} symbol={'+'} isDisabled={isDisabledAddTask} />
        </div>
    );
};

export { Card };

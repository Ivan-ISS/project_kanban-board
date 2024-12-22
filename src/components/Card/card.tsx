import styles from './card.module.scss';
import { ITask, IBlocks } from '../../types/entityTypes';
import { FunctionComponent } from 'react';

import { LineList } from './LineList';
import { ButtonPanel } from './ButtonPanel';

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
            <div className={styles.inputPanel}></div>
            <ButtonPanel isDisabledAddTask={isDisabledAddTask} />
        </div>
    );
};

export { Card };

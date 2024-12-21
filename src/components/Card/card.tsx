import styles from './card.module.scss';
import { ITask } from '../../types/entityTypes';
import { FunctionComponent } from 'react';

export interface ICardProps {
    title: string;
    tasks: ITask[] | undefined;
}

const Card: FunctionComponent<ICardProps> = ({ title, tasks }): JSX.Element => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            {tasks && <div className={styles.body}>{tasks.map((task) => task.name)}</div>}
            <div className={styles.inputPanel}></div>
            <div className={styles.buttonPanel}></div>
        </div>
    );
};

export { Card };

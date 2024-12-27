import styles from './lineList.module.scss';
import { ITask } from '../../../types/entityTypes';
import { FunctionComponent } from 'react';

import { Line } from './Line';

export interface ILineListProps {
    tasks: ITask[];
}

const LineList: FunctionComponent<ILineListProps> = ({ tasks }): JSX.Element => {
    return (
        <div className={styles.lineList}>
            {tasks.map((task, index) => (
                <Line key={index} text={task.name} />
            ))}
        </div>
    );
};

export { LineList };

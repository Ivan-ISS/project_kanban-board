import styles from './cardTask.module.scss';
import { FunctionComponent, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { KanbanContext } from '../../context/kanbanContext';

const CardTask: FunctionComponent = (): JSX.Element => {
    const { blocks } = useContext(KanbanContext);
    const { taskId } = useParams();

    const task = blocks
        .flatMap((block) => block.tasks)
        .find((task) => task.taskId.toString() === taskId);

    if (!task) {
        return <></>;
    }

    return <div className={styles.itemTask}>{task.name}</div>;
};

export { CardTask };

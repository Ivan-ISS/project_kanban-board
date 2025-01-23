import styles from './cardTask.module.scss';
import routes from '../../routes';
import { FunctionComponent, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { KanbanContext } from '../../context/kanbanContext';

const CardTask: FunctionComponent = (): JSX.Element => {
    const { blocks, handleEditDescription } = useContext(KanbanContext);
    const { taskId } = useParams();
    const navigate = useNavigate();

    const task = blocks
        .flatMap((block) => block.tasks)
        .find((task) => task.taskId.toString() === taskId);

    const handleClickClose = () => {
        navigate(routes.blocks());
    };

    const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (taskId) handleEditDescription(event.target.value, parseFloat(taskId), blocks);
    };

    if (!task) {
        return <></>;
    }

    return (
        <div className={styles.cardTask}>
            <div className={styles.heading}>
                <div className={styles.taskName}>{task.name}</div>
                <button className={styles.btnClose} onClick={handleClickClose}>
                    {'X'}
                </button>
            </div>
            <textarea
                className={styles.description}
                value={task.description}
                onChange={handleChangeDescription}
            />
        </div>
    );
};

export { CardTask };

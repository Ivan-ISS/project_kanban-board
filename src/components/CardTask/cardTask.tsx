import styles from './cardTask.module.scss';
import routes from '../../routes';
import { FunctionComponent, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { KanbanContext } from '../../context/kanbanContext';
import { CrossButton } from '../Common/Buttons/CrossButton';
import { Description } from './Description';

const CardTask: FunctionComponent = (): JSX.Element => {
    const { blocks, handleEditDescription } = useContext(KanbanContext);
    const { taskId } = useParams();
    const navigate = useNavigate();

    const task = blocks
        .flatMap((block) => block.tasks)
        .find((task) => task.taskId.toString() === taskId);

    const [description, setDescription] = useState(task?.description || '');

    const handleClickCross = () => {
        if (taskId) handleEditDescription(taskId, description, blocks);
        navigate(routes.blocks());
    };

    if (!task) {
        return <></>;
    }

    return (
        <div className={styles.cardTask}>
            <div className={styles.heading}>
                <div className={styles.taskName}>{task.name}</div>
                <CrossButton onClick={handleClickCross} color={'blue'} size={'big'} />
            </div>
            <Description description={description} setDescription={setDescription} />
        </div>
    );
};

export { CardTask };

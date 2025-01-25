import styles from './description.module.scss';
import { ITask } from '../../../types/entityTypes';
import { FunctionComponent } from 'react';

export interface IDescriptionProps {
    description: ITask['description'];
    setDescription: (description: ITask['description']) => void;
}

const Description: FunctionComponent<IDescriptionProps> = ({
    description,
    setDescription,
}): JSX.Element => {
    const handleChangeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    return (
        <textarea
            className={styles.description}
            value={description}
            onChange={handleChangeDescription}
        />
    );
};

export { Description };

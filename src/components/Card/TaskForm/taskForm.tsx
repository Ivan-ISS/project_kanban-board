import styles from './taskForm.module.scss';
import { IBlock } from '../../../types/entityTypes';
import { FunctionComponent, FormEvent, useState, useContext } from 'react';

import { KanbanContext } from '../../../context/kanbanContext';
import { PrimaryButton } from '../../Common/Buttons/PrimaryButton';
import { Input } from '../../Common/Input';

export interface ITaskFormProps {
    blockId: IBlock['blockId'];
}

const TaskForm: FunctionComponent<ITaskFormProps> = ({ blockId }): JSX.Element => {
    const { blocks, handleCreateTask, handlePressAdd } = useContext(KanbanContext);
    const [formData, setFormData] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleCreateTask(formData, blocks);
        handlePressAdd(blockId);
        setFormData('');
    };

    return (
        <form className={styles.taskForm} onSubmit={handleSubmit}>
            <Input value={formData} placeholder={'Enter task ...'} setInputValue={setFormData} />
            <div className={styles.buttonPanel}>
                <PrimaryButton text={'Submit'} type={'submit'} isDisabled={!formData} />
                <PrimaryButton
                    text={'Cancel'}
                    type={'button'}
                    onClick={() => handlePressAdd(blockId)}
                />
            </div>
        </form>
    );
};

export { TaskForm };

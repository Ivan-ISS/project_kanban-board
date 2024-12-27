import styles from './taskForm.module.scss';
import { FunctionComponent, FormEvent, useState, useContext } from 'react';

import { KanbanContext } from '../../../context/kanbanContext';
import { PrimaryButton } from '../../Common/Buttons/PrimaryButton';
import { Input } from '../../Common/Input';

export interface ITaskFormProps {
    blockId: number;
}

const TaskForm: FunctionComponent<ITaskFormProps> = ({ blockId }): JSX.Element => {
    const { blocks, handleCreateTask, handleAddTask } = useContext(KanbanContext);
    const [formData, setFormData] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('formData: ', formData);
        handleCreateTask(formData, blocks);
        handleAddTask(blockId);
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
                    onClick={() => handleAddTask(blockId)}
                />
            </div>
        </form>
    );
};

export { TaskForm };

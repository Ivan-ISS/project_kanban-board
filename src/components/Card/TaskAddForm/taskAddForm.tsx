import styles from './taskAddForm.module.scss';
import { FunctionComponent, FormEvent, useState } from 'react';

import { PrimaryButton } from '../../Common/Buttons/PrimaryButton';
import { Input } from '../../Common/Input';

const TaskAddForm: FunctionComponent = (): JSX.Element => {
    const [formData, setFormData] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('formData: ', formData);
        setFormData('');
    };

    return (
        <form className={styles.taskAddForm} onSubmit={handleSubmit}>
            <Input value={formData} placeholder={'Enter task ...'} setInputValue={setFormData} />
            <div className={styles.buttonPanel}>
                <PrimaryButton text={'Submit'} type={'submit'} isDisabled={!formData} />
                <PrimaryButton text={'Cancel'} type={'button'} />
            </div>
        </form>
    );
};

export { TaskAddForm };

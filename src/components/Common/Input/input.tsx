import styles from './input.module.scss';
import { FC /* , useState */ } from 'react';

export interface IInputProps {
    value: string;
    placeholder?: string;
    setInputValue: (inputValue: string) => void;
}

const Input: FC<IInputProps> = ({ value, placeholder, setInputValue }): JSX.Element => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={styles.inputWrap}>
            <input
                className={styles.input}
                value={value}
                type={'text'}
                onChange={handleChange}
                required
            />
            {placeholder && <label className={styles.label}>{placeholder}</label>}
        </div>
    );
};

export { Input };

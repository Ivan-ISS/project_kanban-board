import styles from './primaryButton.module.scss';
import { FunctionComponent, ButtonHTMLAttributes } from 'react';

export interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: number | string;
    isDisabled?: boolean;
}

const PrimaryButton: FunctionComponent<IPrimaryButtonProps> = ({ text, isDisabled, ...props }) => {
    const handleClickBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.onClick) {
            props.onClick(e);
        }
    };

    return (
        <button
            {...props}
            onClick={handleClickBtn}
            className={`
                ${styles.button}
                ${isDisabled ? styles.disabled : null}
            `}
            disabled={isDisabled}
        >
            <div>{text}</div>
        </button>
    );
};

export { PrimaryButton };

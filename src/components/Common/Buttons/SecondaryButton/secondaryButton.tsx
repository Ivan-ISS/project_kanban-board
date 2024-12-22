import styles from './secondaryButton.module.scss';
import { FunctionComponent, ButtonHTMLAttributes } from 'react';

export interface ISecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: number | string;
    symbol?: string;
    isDisabled?: boolean;
}

const SecondaryButton: FunctionComponent<ISecondaryButtonProps> = ({
    text,
    symbol,
    isDisabled,
    ...props
}) => {
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
            {symbol && <span className={styles.plus}>{symbol}</span>}
            <div>{text}</div>
        </button>
    );
};

export { SecondaryButton };

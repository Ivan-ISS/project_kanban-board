import styles from './crossButton.module.scss';
import { FunctionComponent, HTMLAttributes } from 'react';

export interface ICrossButtonProps extends HTMLAttributes<HTMLButtonElement> {
    color: 'burgundy' | 'blue';
    size: 'small' | 'big';
}

const CrossButton: FunctionComponent<ICrossButtonProps> = ({
    color,
    size,
    ...props
}): JSX.Element => {
    return (
        <button
            {...props}
            className={`${styles.crossButton} ${styles[color]} ${styles[size]}`}
        ></button>
    );
};

export { CrossButton };

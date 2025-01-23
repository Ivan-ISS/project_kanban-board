import styles from './closeButton.module.scss';
import { FunctionComponent, HTMLAttributes } from 'react';

export interface ICloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
    color: 'rose' | 'blue';
    size: 'small' | 'big';
}

const CloseButton: FunctionComponent<ICloseButtonProps> = ({
    color,
    size,
    ...props
}): JSX.Element => {
    return (
        <button
            {...props}
            className={`${styles.closeButton} ${styles[color]} ${styles[size]}`}
        ></button>
    );
};

export { CloseButton };

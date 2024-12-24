import styles from './line.module.scss';
import { FunctionComponent, HTMLAttributes } from 'react';

export interface ILineProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
}

const Line: FunctionComponent<ILineProps> = ({ text, ...props }): JSX.Element => {
    return (
        <div {...props} className={styles.line}>
            {text}
        </div>
    );
};

export { Line };

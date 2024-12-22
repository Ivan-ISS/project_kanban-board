import styles from './line.module.scss';
import { FunctionComponent } from 'react';

export interface ILineProps {
    text: string;
}

const Line: FunctionComponent<ILineProps> = ({ text }): JSX.Element => {
    return <div className={styles.line}>{text}</div>;
};

export { Line };

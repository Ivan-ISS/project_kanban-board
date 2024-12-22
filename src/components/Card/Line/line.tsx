import styles from './line.module.scss';
import { FunctionComponent } from 'react';

export interface ILineProps {
    text: string;
}

const Line: FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.Line}>
            <div></div>
        </div>
    );
};

export { Line };

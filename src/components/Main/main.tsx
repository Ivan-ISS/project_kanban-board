import styles from './main.module.scss';
import { FunctionComponent, ReactNode } from 'react';

interface IMainProps {
    children: ReactNode;
}

const Main: FunctionComponent<IMainProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.main}>
            <div
                className={`
                    ${styles.mainContainer}
                    ${'containerCommon'}
                `}
            >
                {children}
            </div>
        </div>
    );
};

export { Main };

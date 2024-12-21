import styles from './header.module.scss';
import { FunctionComponent, ReactNode } from 'react';

interface IHeaderProps {
    children: ReactNode;
}

const Header: FunctionComponent<IHeaderProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.header}>
            <div
                className={`
                    ${styles.headerContainer}
                    ${'containerCommon'}`}
            >
                {children}
            </div>
        </div>
    );
};

export { Header };

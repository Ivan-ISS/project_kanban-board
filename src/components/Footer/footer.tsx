import styles from './footer.module.scss';
import { FunctionComponent, ReactNode } from 'react';

interface IFooterProps {
    children: ReactNode;
}

const Footer: FunctionComponent<IFooterProps> = ({ children }): JSX.Element => {
    return (
        <div className={styles.footer}>
            <div
                className={`
                    ${styles.footerContainer}
                    ${'containerCommon'}`}
            >
                {children}
            </div>
        </div>
    );
};

export { Footer };

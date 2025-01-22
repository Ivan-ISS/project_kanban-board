import styles from './layout.module.scss';
import { FunctionComponent } from 'react';

import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { Content } from '../Content';

const Layout: FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.layout}>
            <Header children={'Header'}></Header>
            <Main>
                <Content />
            </Main>
            <Footer children={'Footer'}></Footer>
        </div>
    );
};

export { Layout };

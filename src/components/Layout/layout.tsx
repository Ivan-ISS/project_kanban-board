import styles from './layout.module.scss';
import { blocks, tasks } from '../../data';
import { FunctionComponent } from 'react';

import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { CardList } from '../CardList';

const Layout: FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.layout}>
            <Header children={'Header'}></Header>
            <Main>
                <CardList blocks={blocks} tasks={tasks} />
            </Main>
            <Footer children={'Footer'}></Footer>
        </div>
    );
};

export { Layout };

import styles from './layout.module.scss';
/* import { blocks } from '../../data'; */
import { FunctionComponent, useContext } from 'react';

import { KanbanContext } from '../../context/kanbanContext';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { CardList } from '../CardList';

const Layout: FunctionComponent = (): JSX.Element => {
    const { blocks } = useContext(KanbanContext);

    return (
        <div className={styles.layout}>
            <Header children={'Header'}></Header>
            <Main>
                <CardList blocks={blocks} />
            </Main>
            <Footer children={'Footer'}></Footer>
        </div>
    );
};

export { Layout };

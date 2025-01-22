import routes from '../../routes';
import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import { CardList } from '../CardList';
import { CardTask } from '../CardTask';

const Content: FunctionComponent = (): JSX.Element => {
    return (
        <Routes>
            <Route path={routes.blocks()} element={<CardList />}></Route>
            <Route path={`${routes.task()}/:taskId`} element={<CardTask />}></Route>
        </Routes>
    );
};

export { Content };

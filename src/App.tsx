import { IBlock } from './types/entityTypes';
import { createTask } from './helpers/createTask';
import { moveTask } from './helpers/moveTask';
import { FunctionComponent, useContext, useState } from 'react';

import { KanbanContext, initialState } from './context/kanbanContext';
import { IIsAddPressed } from './context/kanbanContext';
import { Layout } from './components/Layout';

const App: FunctionComponent = (): JSX.Element => {
    const { blocks: defBlocks } = useContext(KanbanContext);

    const [blocks, setBlocks] = useState<IBlock[]>(defBlocks);
    const [isAddPressed, setIsAddPressed] = useState<IIsAddPressed>(initialState.isAddPressed);

    const handleAddTask = (blockId: number) => {
        setIsAddPressed((prevState) => ({ ...prevState, [blockId]: !prevState[blockId] }));
    };

    const handleCreateTask = (task: string, blocks: IBlock[]) => {
        setBlocks(createTask(task, blocks));
    };

    const handleMoveTask = (taskId: number, blockId: number, blocks: IBlock[]) => {
        setBlocks(moveTask(taskId, blockId, blocks));
    };

    console.log('addCard: ', isAddPressed);
    console.log('defBlocks: ', blocks);

    return (
        <KanbanContext.Provider
            value={{
                blocks,
                isAddPressed,
                handleCreateTask,
                handleAddTask,
                handleMoveTask,
            }}
        >
            <Layout />;
        </KanbanContext.Provider>
    );
};

export default App;

// Все hendle переименовать на hendler
// Переименовать kanbanContext
// Переименовать Blocks в Cards
// Посмотреть переменные в contsxt - может переименовать тоже
// В карточки (в пропс) много чего передается включая и сам blocks - есть ли смысл столько всего тогда передавать, может просто blockId и blocks
// Сделать Cards - это то что сейчас line, а все остальное просто блоки - blocks
// Сделать типы в пропсах и в хелперах зависимыми от типов в сущностях
// Убрать получение данных из контекста в App, т.к. он не обернут в Provider. Сделать получение исходного значения в нем напрямую из data

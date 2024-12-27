import { IBlock } from './types/entityTypes';
import { putTaskInBlock } from './helpers/putTaskInBlock';
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

    const handleSelectTask = (taskId: number, blockId: number, blocks: IBlock[]) => {
        setBlocks(putTaskInBlock(taskId, blockId, blocks));
    };

    console.log('addCard: ', isAddPressed);
    console.log('defBlocks: ', defBlocks);

    return (
        <KanbanContext.Provider
            value={{
                blocks,
                isAddPressed,
                handleAddTask,
                handleSelectTask,
            }}
        >
            <Layout />;
        </KanbanContext.Provider>
    );
};

export default App;

// Все hendle переименовать на hendler
// Переименовать kanbanContext
// Переименовать defaultValue в initialState
// Переименовать Blocks в Cards
// Посмотреть переменные в contsxt - может переименовать тоже
// В карточки (в пропс) много чего передается включая и сам blocks - есть ли смысл столько всего тогда передавать, может просто blockId и blocks
// Сделать Cards - это то что сейчас line, а все остальное просто блоки - blocks
// Сделать типы в пропсах зависимыми от типов в сущностях
// IBlocks - переименовать в IBlock - это же один блок
// Blocks передавать не из layot а прямо в CardList вставить получение blocks из context
// Переименовать компоненты в Card (в TaskForm, TaskList, DropdownTaskList)

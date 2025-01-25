import { IBlock } from './types/entityTypes';
import { createTask } from './helpers/createTask';
import { removeTask } from './helpers/removeTask';
import { moveTask } from './helpers/moveTask';
import { editDescription } from './helpers/editDescription';
import { saveData } from './helpers/saveData';
import { loadData } from './helpers/loadData';
import { FunctionComponent, useContext, useEffect, useState } from 'react';

import { KanbanContext, IIsAddPressed } from './context/kanbanContext';
import { Layout } from './components/Layout';

const App: FunctionComponent = (): JSX.Element => {
    const storageData = loadData();
    const { isAddPressed: defIsAddPressed } = useContext(KanbanContext);

    const [blocks, setBlocks] = useState<IBlock[]>(storageData);
    const [isAddPressed, setIsAddPressed] = useState<IIsAddPressed>(defIsAddPressed);

    const handlePressAdd = (blockId: number) => {
        setIsAddPressed((prevState) => ({ ...prevState, [blockId]: !prevState[blockId] }));
    };

    const handleCreateTask = (task: string, blocks: IBlock[]) => {
        setBlocks(createTask(task, blocks));
    };

    const handleRemoveTask = (taskId: number, blocks: IBlock[]) => {
        setBlocks(removeTask(taskId, blocks));
    };

    const handleMoveTask = (taskId: number, blockId: number, blocks: IBlock[]) => {
        setBlocks(moveTask(taskId, blockId, blocks));
    };

    const handleEditDescription = (description: string, taskId: number, blocks: IBlock[]) => {
        setBlocks(editDescription(description, taskId, blocks));
    };

    useEffect(() => {
        saveData(blocks);
    }, [blocks]);

    console.log('addCard: ', isAddPressed);

    return (
        <KanbanContext.Provider
            value={{
                blocks,
                isAddPressed,
                handleCreateTask,
                handleRemoveTask,
                handlePressAdd,
                handleMoveTask,
                handleEditDescription,
            }}
        >
            <Layout />
        </KanbanContext.Provider>
    );
};

export default App;

// Все hendle переименовать на hendler
// Переименовать Blocks в Cards
// В карточки (в пропс) много чего передается включая и сам blocks - есть ли смысл столько всего тогда передавать, может просто blockId и blocks
// Сделать Cards - это то что сейчас line, а все остальное просто блоки - blocks
// Сделать типы в пропсах и в хелперах зависимыми от типов в сущностях - как в description
// Убрать получение данных из контекста в App, т.к. он не обернут в Provider. Сделать получение исходного значения в нем напрямую из data
// taskId сделать строковой переменной (так будет универсальнее)

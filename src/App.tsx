import { IBlock, ITask } from './types/entityTypes';
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

    const handlePressAdd = (blockId: IBlock['blockId']) => {
        setIsAddPressed((prevState) => ({ ...prevState, [blockId]: !prevState[blockId] }));
    };

    const handleCreateTask = (taskName: ITask['name'], blocks: IBlock[]) => {
        setBlocks(createTask(taskName, blocks));
    };

    const handleRemoveTask = (taskId: ITask['taskId'], blocks: IBlock[]) => {
        setBlocks(removeTask(taskId, blocks));
    };

    const handleMoveTask = (
        taskId: ITask['taskId'],
        blockId: IBlock['blockId'],
        blocks: IBlock[]
    ) => {
        setBlocks(moveTask(taskId, blockId, blocks));
    };

    const handleEditDescription = (
        taskId: ITask['taskId'],
        description: ITask['description'],
        blocks: IBlock[]
    ) => {
        setBlocks(editDescription(taskId, description, blocks));
    };

    useEffect(() => {
        saveData(blocks);
    }, [blocks]);

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
// Сделать Cards - это то что сейчас line, а все остальное просто блоки - blocks
// Список импортов упорядочить везде
// В data значения по умолчанию все свести

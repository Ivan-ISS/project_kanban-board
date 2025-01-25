import { IBlock, ITask } from '../types/entityTypes';
import { blocks } from '../data';
import { createContext } from 'react';

export interface IIsAddPressed {
    [key: number]: boolean;
}

export interface IKanbanContext {
    blocks: IBlock[];
    isAddPressed: IIsAddPressed;
    handlePressAdd: (blockId: IBlock['blockId']) => void;
    handleCreateTask: (taskName: ITask['name'], blocks: IBlock[]) => void;
    handleRemoveTask: (taskId: ITask['taskId'], blocks: IBlock[]) => void;
    handleMoveTask: (taskId: ITask['taskId'], blockId: IBlock['blockId'], blocks: IBlock[]) => void;
    handleEditDescription: (
        taskId: ITask['taskId'],
        description: ITask['description'],
        blocks: IBlock[]
    ) => void;
}

export const initialState: IKanbanContext = {
    blocks,
    isAddPressed: {},
    handlePressAdd: () => {},
    handleCreateTask: () => {},
    handleRemoveTask: () => {},
    handleMoveTask: () => {},
    handleEditDescription: () => {},
};

blocks.forEach((block) => {
    initialState.isAddPressed = {
        ...initialState.isAddPressed,
        [block.blockId]: false,
    };
});

export const KanbanContext = createContext<IKanbanContext>(initialState);

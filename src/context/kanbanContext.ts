import { IBlock } from '../types/entityTypes';
import { blocks } from '../data';
import { createContext } from 'react';

export interface IIsAddPressed {
    [key: number]: boolean;
}

export interface IKanbanContext {
    blocks: IBlock[];
    isAddPressed: IIsAddPressed;
    handlePressAdd: (blockId: number) => void;
    handleCreateTask: (task: string, blocks: IBlock[]) => void;
    handleMoveTask: (taskId: number, blockId: number, blocks: IBlock[]) => void;
}

export const initialState: IKanbanContext = {
    blocks,
    isAddPressed: {},
    handlePressAdd: () => {},
    handleCreateTask: () => {},
    handleMoveTask: () => {},
};

blocks.forEach((block) => {
    initialState.isAddPressed = {
        ...initialState.isAddPressed,
        [block.blockId]: false,
    };
});

export const KanbanContext = createContext<IKanbanContext>(initialState);

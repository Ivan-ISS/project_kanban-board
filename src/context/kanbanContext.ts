import { IBlock } from '../types/entityTypes';
import { blocks } from '../data';
import { createContext } from 'react';

export interface IIsAddPressed {
    [key: number]: boolean;
}

export interface IKanbanContext {
    blocks: IBlock[];
    isAddPressed: IIsAddPressed;
    handleAddTask: (blockId: number) => void;
    handleSelectTask: (taskId: number, blockId: number, blocks: IBlock[]) => void;
}

export let initialState: IKanbanContext = {
    blocks,
    isAddPressed: {},
    handleAddTask: () => {},
    handleSelectTask: () => {},
};

blocks.forEach((block) => {
    initialState.isAddPressed = {
        ...initialState.isAddPressed,
        [block.blockId]: false,
    };
});

export const KanbanContext = createContext<IKanbanContext>(initialState);

import { IBlocks } from '../types/entityTypes';
import { blocks } from '../data';
import { createContext } from 'react';

export interface IIsAddPressed {
    [key: number]: boolean;
}

export interface IKanbanContext {
    blocks: IBlocks[];
    isAddPressed: IIsAddPressed;
    handleAddTask: (blockId: number) => void;
    handleSelectTask: (taskId: number, blockId: number, blocks: IBlocks[]) => void;
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

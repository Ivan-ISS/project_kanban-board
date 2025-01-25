import { IBlock } from '../types/entityTypes';
import { blocks } from '../data';

const loadData = (): IBlock[] | [] => {
    try {
        const serializedState = localStorage.getItem('kanbanBoard');
        if (serializedState === null) return blocks;
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return blocks;
    }
};

export { loadData };

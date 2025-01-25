import { IBlock } from '../types/entityTypes';

const saveData = (data: IBlock[]) => {
    try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem('kanbanBoard', serializedState);
    } catch (error) {
        console.log(error);
    }
};

export { saveData };

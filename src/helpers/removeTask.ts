import { IBlock, ITask } from '../types/entityTypes';

export const removeTask = (taskId: ITask['taskId'], blocks: IBlock[]): IBlock[] => {
    const newBlocks = blocks.map((block) => ({
        ...block,
        tasks: block.tasks.map((task) => ({ ...task })),
    }));

    let currentBlockIndex = -1;
    let currentTaskIndex = -1;

    for (let i = 0; i < newBlocks.length; i++) {
        const taskIndex = newBlocks[i].tasks.findIndex((task) => task.taskId === taskId);
        if (taskIndex !== -1) {
            currentBlockIndex = i;
            currentTaskIndex = taskIndex;
            break;
        }
    }

    if (currentBlockIndex !== -1 && currentTaskIndex !== -1) {
        newBlocks[currentBlockIndex].tasks.splice(currentTaskIndex, 1);
    }

    return newBlocks;
};

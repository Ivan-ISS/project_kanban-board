import { IBlock, ITask } from '../types/entityTypes';

export const moveTask = (taskId: number, blockId: number, blocks: IBlock[]): IBlock[] => {
    const newBlocks = blocks.map((block) => ({ ...block, tasks: [...block.tasks] }));

    const currentBlockIndex = newBlocks.findIndex((block) => block.blockId === blockId);
    const previousBlockIndex = currentBlockIndex - 1;
    const previousBlock = newBlocks[previousBlockIndex];

    let taskToMove: ITask | undefined = undefined;
    const taskIndex = previousBlock.tasks.findIndex((task) => task.taskId === taskId);

    taskToMove = previousBlock.tasks[taskIndex];

    newBlocks[previousBlockIndex].tasks.splice(taskIndex, 1);
    newBlocks[currentBlockIndex].tasks.push(taskToMove);

    return newBlocks;
};

import { IBlock, ITask } from '../types/entityTypes';

export const editDescription = (
    taskId: ITask['taskId'],
    description: ITask['description'],
    blocks: IBlock[]
): IBlock[] => {
    const newBlocks = blocks.map((block) => ({
        ...block,
        tasks: block.tasks.map((task) =>
            task.taskId === taskId ? { ...task, description } : task
        ),
    }));

    return newBlocks;
};

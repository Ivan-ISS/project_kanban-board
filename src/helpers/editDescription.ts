import { IBlock } from '../types/entityTypes';

export const editDescription = (
    description: string,
    taskId: number,
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

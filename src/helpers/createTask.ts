import { IBlock, ITask } from '../types/entityTypes';
import { random } from '../helpers/random';

export const createTask = (taskName: ITask['name'], blocks: IBlock[]): IBlock[] => {
    const newBlocks = blocks.map((block) => ({ ...block, tasks: [...block.tasks] }));

    const firstBlock = newBlocks[0];
    const randomId = blocks[0].tasks.length + random(0, 100000);

    firstBlock.tasks.push({
        taskId: randomId.toString(),
        name: taskName,
        description: 'New description',
    });

    return newBlocks;
};

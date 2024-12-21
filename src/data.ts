import { ITasks, IBlock } from './types/entityTypes';

export const tasks: ITasks[] = [
    {
        blockId: 1,
        title: 'backlog',
        tasks: [
            {
                taskId: 111,
                name: 'Task 1',
                description: 'Description 1',
            },
            {
                taskId: 112,
                name: 'Task 2',
                description: 'Description 2',
            },
            {
                taskId: 113,
                name: 'Task 3',
                description: 'Description 3',
            },
        ],
    },
    {
        blockId: 2,
        title: 'ready',
        tasks: [
            {
                taskId: 111,
                name: 'Task 1',
                description: 'Description 1',
            },
        ],
    },
    {
        blockId: 3,
        title: 'in progress',
        tasks: [
            {
                taskId: 111,
                name: 'Task 1',
                description: 'Description 1',
            },
        ],
    },
    {
        blockId: 4,
        title: 'finished',
        tasks: [
            {
                taskId: 111,
                name: 'Task 1',
                description: 'Description 1',
            },
        ],
    },
];

export const blocks: IBlock[] = [
    { title: 'Backlog', blockId: 1 },
    { title: 'Ready', blockId: 2 },
    { title: 'in Progress', blockId: 3 },
    { title: 'Finished', blockId: 4 },
];

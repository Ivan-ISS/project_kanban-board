import { IBlocks } from './types/entityTypes';

export const blocks: IBlocks[] = [
    {
        blockId: 1,
        title: 'Backlog',
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
        title: 'Ready',
        tasks: [
            {
                taskId: 114,
                name: 'Task 1',
                description: 'Description 1',
            },
        ],
    },
    {
        blockId: 3,
        title: 'In progress',
        tasks: [],
    },
    {
        blockId: 4,
        title: 'Finished',
        tasks: [
            {
                taskId: 115,
                name: 'Task 1',
                description: 'Description 1',
            },
        ],
    },
];

import { IListBlockItem } from './types/blocks-types';
import { IListTaskItem } from './types/tasks-types';

interface IInscriptionsFooter {
    name: string;
}

export const blocks: IListBlockItem[] = [
    {title: 'Backlog', idBlock: 1},
    {title: 'Ready', idBlock: 2},
    {title: 'in Progress', idBlock: 3},
    {title: 'Finished', idBlock: 4}
]

export const tasksMock: IListTaskItem[] = [
    {
        block: 3,
        id: 1,
        name: 'Task 1',
        description: 'Description 1'
    },
    {
        block: 1,
        id: 2,
        name: 'Task 2',
        description: 'Description 2'
    },
    {
        block: 2,
        id: 3,
        name: 'Task 3',
        description: 'Description 3'
    },
    {
        block: 3,
        id: 4,
        name: 'Task 4',
        description: 'Description 4'
    },
    {
        block: 4,
        id: 5,
        name: 'Task 5',
        description: 'Description 5'
    },
    {
        block: 2,
        id: 6,
        name: 'Task 6',
        description: 'Description 6'
    }
]

export const userMenuItems: string[] = ['Profile', 'Log Out']

export const inscriptionsFooter: IInscriptionsFooter[] = [
    {name: 'Active tasks'},
    {name: 'Finished tasks'},
    {name: 'Kanban board by'},
]
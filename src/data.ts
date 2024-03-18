import { IListBlockItem } from './types/blocks-types';
import { IListTaskItem } from './types/tasks-types';

interface IInscriptionsFooter {
    name: string;
}

export const blocks: IListBlockItem[] = [
    {title: 'Backlog', id: 1},
    {title: 'Ready', id: 2},
    {title: 'in Progress', id: 3},
    {title: 'Finished', id: 4}
]

export const tasksMock: IListTaskItem[] = [
    {
        block: 3,
        id: 1,
        name: 'Task 1',
        description: 'Description 1'
    },
    {
        block: 3,
        id: 2,
        name: 'Task 2',
        description: 'Description 2'
    },
    {
        block: 1,
        id: 3,
        name: 'Task 3',
        description: 'Description 3'
    }
]

export const inscriptionsFooter: IInscriptionsFooter[] = [
    {name: 'Active tasks'},
    {name: 'Finished tasks'},
    {name: 'Kanban board by'},
]
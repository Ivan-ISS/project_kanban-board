interface IBlocks {
    title: string;
    id: number;
}

interface IInscriptionsFooter {
    name: string;
}

export const blocks: IBlocks[] = [
    {title: 'Backlog', id: 1},
    {title: 'Ready', id: 1},
    {title: 'in Progress', id: 1},
    {title: 'Finished', id: 1}
]

export const inscriptionsFooter: IInscriptionsFooter[] = [
    {name: 'Active tasks'},
    {name: 'Finished tasks'},
    {name: 'Kanban board by'},
]
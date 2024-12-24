export interface ITask {
    taskId: number;
    name: string;
    description: string;
}

export interface IBlocks {
    blockId: number;
    title: string;
    tasks: ITask[];
}

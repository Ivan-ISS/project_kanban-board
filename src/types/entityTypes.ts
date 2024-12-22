export interface ITask {
    taskId: number;
    name: string;
    description: string;
}

export interface IBlocks {
    title: string;
    blockId: number;
    tasks: ITask[];
}

export interface ITask {
    taskId: string;
    name: string;
    description: string;
}

export interface IBlock {
    blockId: number;
    title: string;
    tasks: ITask[];
}

export interface ITask {
    taskId: number;
    name: string;
    description: string;
}

export interface IBlock {
    blockId: number;
    title: string;
    tasks: ITask[];
}

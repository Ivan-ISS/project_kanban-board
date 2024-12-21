export interface ITasks {
    blockId: number;
    title: string;
    tasks: ITask[];
}

export interface ITask {
    taskId: number;
    name: string;
    description: string;
}

export interface IBlock {
    title: string;
    blockId: number;
}

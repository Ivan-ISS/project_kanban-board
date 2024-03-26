export interface IIdBlock {
    idBlock: number
}

export interface IListBlockItem {
    title: string;
    idBlock: number;
    children?: JSX.Element
}
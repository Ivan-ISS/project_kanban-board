import { IListTaskItem } from '../types/tasks-types';

type IToArrayNumBlocks = (listTaskItem: IListTaskItem[] | undefined) => number[]

const toArrayNumBlocks: IToArrayNumBlocks = (listTaskItem: IListTaskItem[] | undefined): number[] => {
    
    let arrayNumBlocks: number[] = []

    listTaskItem?.forEach(element => {
        arrayNumBlocks.push(element.block)
    });

    return arrayNumBlocks
}

export default toArrayNumBlocks
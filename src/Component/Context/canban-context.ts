import { createContext } from 'react';
import { IListTaskItem } from '../../types/tasks-types';
import { IListBlockItem } from '../../types/blocks-types';
import { IAddCard } from '../../types/selection-field';

interface ICanbanContext {
    blocks?: IListBlockItem[],
    tasksList?: IListTaskItem[],
    addCard?: IAddCard,
    handlerClickAddTask?: (idBlock: number) => void,
    handleTasksListValue?: (tasksList: IListTaskItem[] | undefined) => void
}

export const CanbanContext = createContext<ICanbanContext>({})
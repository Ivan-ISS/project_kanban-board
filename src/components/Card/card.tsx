import styles from './card.module.scss';
import { ITask, IBlocks } from '../../types/entityTypes';
import { FunctionComponent } from 'react';

import { LineList } from './LineList';
import { ButtonPanel } from './ButtonPanel';

export interface ICardProps {
    title: string;
    numBlock: number;
    blocks: IBlocks[];
    tasks: ITask[] | undefined;
}

const Card: FunctionComponent<ICardProps> = ({ title, numBlock, blocks, tasks }): JSX.Element => {
    let checkDisabled = blocks.find((block) => block.blockId === numBlock - 1)?.tasks.length;
    if (numBlock === 1) {
        checkDisabled = 1;
    }

    console.log('checkDisabled: ', checkDisabled);

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            {tasks && <LineList tasks={tasks} />}
            <div className={styles.inputPanel}></div>
            <ButtonPanel secBtnDisabled={!checkDisabled} />
        </div>
    );
};

export { Card };

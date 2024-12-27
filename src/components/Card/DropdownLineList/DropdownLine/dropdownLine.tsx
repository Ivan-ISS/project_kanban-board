import styles from './dropdownLine.module.scss';

import { FunctionComponent, HTMLAttributes } from 'react';

export interface IDropdownLineProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
}

const DropdownLine: FunctionComponent<IDropdownLineProps> = ({ text, ...props }): JSX.Element => {
    return (
        <div {...props} className={styles.dropdownLine}>
            {text}
        </div>
    );
};

export { DropdownLine };

import styles from './buttonPanel.module.scss';
import { FunctionComponent } from 'react';

import { PrimaryButton } from '../../Common/Buttons/PrimaryButton';
import { SecondaryButton } from '../../Common/Buttons/SecondaryButton/secondaryButton';

export interface IButtonPanelProps {
    isDisabledAddTask: boolean;
}

const ButtonPanel: FunctionComponent<IButtonPanelProps> = ({ isDisabledAddTask }): JSX.Element => {
    return (
        <div className={styles.buttonPanel}>
            <div className={styles.topPanel}>
                <PrimaryButton text={'Submit'} />
                <PrimaryButton text={'Cancel'} />
            </div>
            <div className={styles.botPanel}>
                <SecondaryButton text={'Add card'} symbol={'+'} isDisabled={isDisabledAddTask} />
            </div>
        </div>
    );
};

export { ButtonPanel };

import React from 'react';
import style from './inscription.module.scss';

export interface IInscriptionProps {
    name: string;
    meaningFirst: number | string;
    meaningSecond?: number;
}

const Inscription = ({ name, meaningFirst, meaningSecond }: IInscriptionProps) => {

   return (
        <div className={style.inscription}>
            {
                !meaningSecond 
                ? `${name}: ${meaningFirst}`
                : `${name} ${meaningFirst}, ${meaningSecond}`
            }
        </div>
   )
}

export default Inscription
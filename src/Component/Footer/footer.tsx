import React from 'react';
import style from './footer.module.scss';
import Inscription from "../Common/Inscription/inscription";
import Button from "../Common/Button/button";
import toArrayNumBlocks from '../../utils/to-array-helper';

const Footer = () => {
    const dataFromLocalStorage = localStorage.getItem('tasksListJSON');
    const pars = dataFromLocalStorage !== null ? JSON.parse(dataFromLocalStorage) : [];
    const arrayNumBlocks = toArrayNumBlocks(pars)

    const valueFinish = 4
    const valueBacklog = 1
    const countFinish = arrayNumBlocks.filter(item => item === valueFinish).length
    const countBacklog = arrayNumBlocks.filter(item => item === valueBacklog).length

    const handleClickBtn = () => {
        localStorage.removeItem('tasksListJSON')
        window.location.reload();
    }

   return (
        <footer className={style.footer}>
            <div className={style.taskCounter}>
                <Inscription name={"Active tasks"} meaningFirst={countBacklog} />
                <Inscription name={"Finished tasks"} meaningFirst={countFinish} />
            </div>
                <Button handleClickBtn={handleClickBtn} name={"Clear board"}/>
                <Inscription name={"Kanban board by"} meaningFirst={"ISS"} meaningSecond={2024}/>
        </footer>
   )
}

export default Footer
import React from 'react';
import style from './footer.module.scss';
import Inscription from "../Common/Inscription/inscription";
import Button from "../Common/Button/button";

const Footer = () => {

   return (
        <footer className={style.footer}>
            <div className={style.taskCounter}>
                <Inscription name={"Active tasks"} meaningFirst={5} />
                <Inscription name={"Finished tasks"} meaningFirst={10} />
            </div>
                <Button />
                <Inscription name={"Kanban board by"} meaningFirst={"ISS"} meaningSecond={2024}/>
        </footer>
   )
}

export default Footer
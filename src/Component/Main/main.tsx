import React from 'react';
import style from './main.module.scss';
import Content from "../Content/Content";

const Main = () => {

   return (
        <main className={style.main}>
            <Content />
        </main>
   )
}

export default Main
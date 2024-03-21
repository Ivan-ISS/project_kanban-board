import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IListTaskItem } from './types/tasks-types';
import { IAddCard } from './types/selection-field';
import { CanbanContext } from './Component/Context/canban-context';
import { blocks } from './data';
import { tasksMock } from './data';
import Layout from "./Component/Layout/layout";
import Header from "./Component/Header/header";
import Main from "./Component/Main/main";
import Footer from "./Component/Footer/footer";

function App() {
    const [tasksList, setTasksList] = useState<IListTaskItem[] | undefined>([]);
    const [addCard, setaddCard] = useState<IAddCard>({});  // Переменная содержащая номер блока и значение - открыто поле для инпута или селектора или закрыто

    const handlerClickAddTask = (idBlock: number) => {
        setaddCard((prevState) => ({ ...prevState, [idBlock]: !prevState[idBlock] }));
        /* setaddCard(prevValue => !prevValue) */
        console.log('Состояние кнопок изменилось:', addCard)
    }

    const handleTasksListValue = (tasksList: IListTaskItem[] | undefined) => {
        setTasksList(tasksList)
        localStorage.setItem('tasksListJSON', JSON.stringify(tasksList));
        console.log('tasksList изменился:', tasksList)
    }

    useEffect(() => {
        const dataFromLocalStorage = localStorage.getItem('tasksListJSON');
        const pars = dataFromLocalStorage !== null ? JSON.parse(dataFromLocalStorage) : null;
        const par = pars as IListTaskItem[]
        console.log('local', par as IListTaskItem[])
        setTasksList(par as IListTaskItem[])
        // const pars = JSON.parse(localStorage.getItem('booksInShopBag'))
        //setTasksList(JSON.parse(localStorage.getItem('tasksListJSON')!))
    }, [])
  
    return (
        <BrowserRouter>
            <CanbanContext.Provider value={{ blocks, tasksList, addCard, handlerClickAddTask, handleTasksListValue }}>
                <Layout
                    HeaderComponent={<Header />}
                    MainComponent={<Main />}
                    FooterComponent={<Footer />}
                />
            </CanbanContext.Provider>
        </BrowserRouter>
    );
}

export default App;

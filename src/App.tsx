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
    const [tasksList, setTasksList] = useState<IListTaskItem[] | undefined>([]);  // создание переменной для списка задач
    const [addCard, setaddCard] = useState<IAddCard>({});  // создание переменной содержащей номер блока и значение boolean (открыто поле для инпута или селектора или закрыто)

    const handlerClickAddTask = (idBlock: number) => {
        setaddCard((prevState) => ({ ...prevState, [idBlock]: !prevState[idBlock] }));  // функция для изменения значения переменной на противоположное для конкретного блока
        // setaddCard(prevValue => !prevValue)
        // console.log('Состояние кнопок изменилось:', addCard)
    }

    const handleTasksListValue = (tasksList: IListTaskItem[] | undefined) => {
        setTasksList(tasksList)                                                         // функция для установки нового значения (обновления) списка задач
        if (tasksList) localStorage.setItem('tasksListJSON', JSON.stringify(tasksList)) // и обновления localStorage
        // console.log('tasksList изменился:', tasksList)
    }

    useEffect(() => {
        const dataFromLocalStorage = localStorage.getItem('tasksListJSON');             // при первом рендере достаем данные из localStorage для вывода их на экран
        setTasksList(dataFromLocalStorage !== null ? JSON.parse(dataFromLocalStorage) : []);
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

// выше все исходные данные и функции для управления состоянием складываем в контекст
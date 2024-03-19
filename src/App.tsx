import React, { useState } from 'react';
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
        console.log(addCard)
    }

    const handleTasksListValue = (tasksList: IListTaskItem[] | undefined) => {
      setTasksList(tasksList)
      console.log(tasksList)
  }
  
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

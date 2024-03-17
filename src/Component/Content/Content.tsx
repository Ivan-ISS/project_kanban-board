import React from 'react';
import { Route, Routes } from 'react-router';
import TaskBlocks from "./task-blocks";
import TaskItem from "./task-item";

const Header = () => {

    return (
        <Routes>
            <Route path='/' element={<TaskBlocks />}/>
            <Route path='/tasks' element={<TaskItem />}/>
        </Routes>
    )
}

export default Header
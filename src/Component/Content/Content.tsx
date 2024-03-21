import React from 'react';
import { Route, Routes } from 'react-router';
import TaskBlocks from "./task-blocks";
import TaskItem from "./task-item";

const Content = () => {

    return (
        <Routes>
            <Route path='/' element={<TaskBlocks />}/>
            <Route path='/:taskId' element={<TaskItem />}/>
            {/* <Route path='/tasks' element={<TaskItem />}/> */}
        </Routes>
    )
}

export default Content
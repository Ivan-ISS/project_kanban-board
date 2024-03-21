import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { CanbanContext } from '../../Context/canban-context';

const TaskItem = () => {
    const { taskId } = useParams()
    const { tasksList } = useContext(CanbanContext)

    const numTaskId = parseFloat(taskId as string)

    // const item = tasksList?.find(item => console.log(item.id))
    const item = tasksList?.find(item => item.id === numTaskId)
    if (item) {const { name, description } = item }

    return (
        <div>
            {item?.name}
            {item?.description}
        </div>
    )
}

export default TaskItem
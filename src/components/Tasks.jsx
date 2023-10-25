import React from 'react';
import Item from './item';

const Tasks = ({ tasks, handleTaskId, handleTaskDelition }) => {

    return (
        <>
            {tasks.map((item) => (
                <Item item={item} handleTaskId={handleTaskId}
                handleTaskDelition={handleTaskDelition}/>
            ))}
        </>
    )
}

export default Tasks;
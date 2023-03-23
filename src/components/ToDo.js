import React from 'react';
import { useQuery } from 'react-query';
import ToDoCard from './ToDoCard';
import ToDoCards from './ToDoCards';

const ToDo = () => {
    
    return (
        <div className='flex gap-3 w-[2500px]'>
            <ToDoCards/>
            <ToDoCards/>
            <ToDoCards/>
            <ToDoCards/>
            <ToDoCards/>
        </div>
    );
};

export default ToDo;
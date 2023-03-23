import React from 'react';
import { useQuery } from 'react-query';
import ToDoCard from './ToDoCard';

const ToDoCards = () => {
    const {data: does = [], refetch} = useQuery({
        queryKey: ['does'],
        queryFn: async() =>{
            const res = await fetch('/toDo.json');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='mt-5 h-[100vh] overflow-auto bg-gray-200 p-4'>
            <div>
                <h1>{does[0]?.title}</h1>
            </div>
            <div className=''>
                {
                    does.map((doe) => <ToDoCard
                    key={doe._id}
                    doe={doe}
                    ></ToDoCard>)
                }
            </div>
        </div>
    );
};

export default ToDoCards;
import React from 'react';
import { HiDatabase, HiOutlineClipboardList, HiOutlineChatAlt2, HiLink, HiOutlineCalendar } from "react-icons/hi";

const ToDoCard = ({doe}) => {
    const {title, client, clientImg, author, authorImg, reactImgOne, reactImgTwo, textDivision, totalView, comment, date} = doe;
    return (
        <div className='my-2 p-3 rounded-md bg-white'>
            <div>
                <div className='flex justify-between gap-8 mt-5'>
                    <div className='flex gap-2 items-center'>
                        <img className='rounded-full w-12 h-12' src={clientImg} alt="" />
                        <p>{client}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img className='rounded-full w-12 h-12' src={authorImg} alt="" />
                        <p>{author}</p>
                    </div>
                </div>
                <div className='my-5 flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <HiDatabase/>
                        <input type="text" name="" className='enabled:hover:border-gray-400 w-full' placeholder='lorem ipusm dolar sit awet.....' id="" />
                    </div>
                    <div className='flex gap-1 items-center bg-gray-200 px-2'>
                        <HiOutlineClipboardList/>
                        <p>{textDivision}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                   <div className='flex gap-3 items-center'>
                   <img  className='rounded-full w-12 h-12' src={reactImgOne} alt="" />
                    <img  className='rounded-full w-12 h-12' src={reactImgTwo} alt="" />
                    <p className='bg-gray-200 p-3 rounded-full'>{totalView}</p>
                   </div>
                   <div className='flex gap-1 items-center'>
                    <HiOutlineChatAlt2/>
                    <p>{comment}</p>
                   </div>
                   <div className='flex gap-1 items-center'>
                    <HiLink/>
                    <p>25</p>
                   </div>
                   <div className='flex gap-1 items-center'>
                    <HiOutlineCalendar/>
                    <p>{date}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoCard;
/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const ToDo = () => {
    return (
        <div className='toDo'>
            ToDo
            <div className='icons'>
                <AiFillEdit className='icon' />
                <RxCross1 className='icon' />
            </div>
        </div>
    )
}

export default ToDo
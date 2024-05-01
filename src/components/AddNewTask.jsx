import addTask from '../images/Add_round.svg'
import { ModalTaskDetailsContext } from '../context/ModalTaskDetailsContext'
import { useContext, useState } from 'react'

export function AddNewTask() {

    const {toggleShowTaskDetails}  = useContext(ModalTaskDetailsContext)


    return(
        <button 
            className="flex rounded-xl justify-between text-[#3662E3] bg-[#DEE9FC] px-[12px] py-[8px]"
            onClick={toggleShowTaskDetails}
            >
            <span className='font-semibold'>Add new task card</span>
            <img src={addTask}></img>
        </button>
    )
}
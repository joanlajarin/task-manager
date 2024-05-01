import Task from "./Task"
import {AddNewTask} from './AddNewTask.jsx'
import { useState } from "react"

export function Column({ column, tasks , updateBoard}) {

    const handleDrop = (event) => {
        console.log("ending drag")
        const taskId = event.dataTransfer.getData("Text")
        const storedTask = JSON.parse(localStorage.getItem(taskId))
        if (storedTask) {
            storedTask.state = column.title
            localStorage.setItem(taskId, JSON.stringify(storedTask))
        }
        updateBoard()
    }

    const handleDragOver = (e) => {
        console.log("handleDragOver")
        e.preventDefault()
      }

    return(

            <div
                id={column.id} 
                className="flex flex-col gap-[20px]"
                onDragOver={handleDragOver}
                onDrop={handleDrop} 
            > 
                <div className="flex gap-[8px] items-center">
                    <div style={{ backgroundColor: `${column.color}`}} className='rounded-full size-[8px]'></div>
                    <span>{`${column.title}(${ tasks ? tasks.length : 0})` }</span>
                </div>
                {   tasks  ? 
                    tasks.map( (task,index) => <Task key={index} task={task}/> )
                    : <span className="text-[#7E878D] font-semibold">No tasks</span>
                }
                {
                    column.title === 'Backlog' && <AddNewTask/>
                }
            </div>
    )
}

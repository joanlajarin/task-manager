import Task from "./Task"
import {AddNewTask} from './AddNewTask.jsx'

export function Column({ column, tasks }) {

    return(

            <div className="flex flex-col gap-[20px]"> 
                <div className="flex gap-[8px] items-center">
                    <div style={{ backgroundColor: `#${column.color}`}} className='rounded-full  size-[8px]'></div>
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

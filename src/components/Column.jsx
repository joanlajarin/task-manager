import Task from "./Task"
import {AddNewTask} from './AddNewTask.jsx'

export function Column({ column: { color, title, tasks } }) {

    return(
            <div className="flex flex-col gap-[20px]"> 
                <div className="flex gap-[8px] items-center">
                    <div style={{ backgroundColor: `#${color}`}} className='rounded-full  size-[8px]'></div>
                    <span>{`${title}(${tasks.length})`}</span>
                </div>
                {   tasks.length > 0  ? 
                    tasks.map( (task,index) => <Task key={index} task={task}/> )
                    : <span className="text-[#7E878D] font-semibold">No tasks</span>
                }
                {
                    title === 'Backlog' && <AddNewTask/>
                }
            </div>
    )
}

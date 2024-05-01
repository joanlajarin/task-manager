import { useContext, useEffect } from 'react'
import Tag from './Tag.jsx'
import { DarkModeContext } from '../context/DarkModeContext.jsx'
import { ModalTaskDetailsContext } from '../context/ModalTaskDetailsContext.jsx'

export default function Task({task}){
    const {id, title, src, tags} = task
    const {darkMode}  = useContext(DarkModeContext)
    const {toggleShowTaskDetails, fetchData}  = useContext(ModalTaskDetailsContext)

    const editTask = () => {
        toggleShowTaskDetails()
        fetchData(task)
    }

    const dragStart = (event) => {
        console.log("starting drag")
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    // useEffect(() => {
    //     console.log(newStatus)
    //     if(newStatus && newStatus !== "" ) {
    //         console.log("has changed status")
    //     }
    // },[newStatus])

    return(
    
        <button 
        id={id}
        className={`rounded-lg flex flex-col gap-[12px] p-[12px] ${darkMode ? 'bg-[#191B1F]' : 'bg-[#FEF7EE]'}`}
        onClick={editTask}
        onDragStart={dragStart}
        draggable="true"
    >
        {src && 
            <div
                className='h-[100px] overflow-hidden'
            >
                <img 
                    src={src}
                    alt="Task Image"
                    draggable="false"
                />
            </div>
        }
        <span className='text-left	 text-ellipsis	 text-pretty '>{title}</span>
        <div className='flex gap-[8px]'>
            { tags.map((tag, index) => <Tag tag={tag} key={index} />)}
        </div>
    </button>
    )
}
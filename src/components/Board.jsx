import { Column } from "./Column"
import statesData from '../data/states.json';
import { useState,useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import {ShowTasksBoardByIdContext} from "../context/ShowTasksBoardByIdContext";

export function Board() {
    const [updateBoard, setUpdateBoard] = useState(false)
    const {darkMode}  = useContext(DarkModeContext)
    const {boardId}  = useContext(ShowTasksBoardByIdContext)


    // Retrieve all items from localStorage
    const allTasks = Object.values(localStorage);
    // Parse each item string into an object
    const parsedTasks = allTasks.map(task => JSON.parse(task))
    const filteredTasks =  parsedTasks.filter(item => item.board === boardId).sort((a, b) => new Date(a.date) - new Date(b.date));


    const onUpdateBoard = () => {
      setUpdateBoard(!updateBoard)
    }
    
    return(
        <section className={`${darkMode ? 'bg-[#2A2D32]' : 'bg-[#DEE9FC]' } w-full rounded-lg  px-[12px] py-[16px] grid grid-cols-4 gap-[12px]`}>
           {statesData.columns.map((column, index) => <Column key={`${column.title}_${index}`}  column={column} tasks={filteredTasks.filter(item => item.state === column.title)} updateBoard={onUpdateBoard}/>)}

      </section>
    )
}

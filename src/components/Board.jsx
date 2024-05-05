import { Column } from "./Column"
import statesData from '../data/states.json';
import { useState,useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export function Board() {
    const [updateBoard, setUpdateBoard] = useState(false)
    const {darkMode}  = useContext(DarkModeContext)


    // Retrieve all items from localStorage
    const allTaks = Object.values(localStorage);

    // Parse each item string into an object
    const parsedTasks = allTaks.map(item => JSON.parse(item))

    const onUpdateBoard = () => {
      setUpdateBoard(!updateBoard)
    }
    
    return(
        <section className={`${darkMode ? 'bg-[#2A2D32]' : 'bg-[#DEE9FC]' } w-full rounded-lg  px-[12px] py-[16px] grid grid-cols-4 gap-[12px]`}>
           {statesData.columns.map((column, index) => <Column key={`${column.title}_${index}`}  column={column} tasks={parsedTasks.filter(item => item.state === column.title)} updateBoard={onUpdateBoard}/>)}

      </section>
    )
}

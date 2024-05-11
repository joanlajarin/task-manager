import React, { createContext, useEffect, useState } from 'react'
import { getUniqueId } from '../services/getUniqueID';

const ShowTasksBoardByIdContext = createContext()

function ShowTasksBoardByIdProvider(props) { 
    
    
            // Retrieve all items from localStorage
    const allBoards = Object.values(localStorage);

    let idBoard = 0;
    if(allBoards.length === 0) {
        const boardId =  getUniqueId()
        const newBoard = {
            "id": boardId,
            "title":'Default Board', 
            "logo": 'src/images/board-logo-13.svg',
            "type": 'board',
            "date": Date()   
         }
         localStorage.setItem(boardId, JSON.stringify(newBoard))
         idBoard  = boardId
         const taskId =  getUniqueId()
         const newTask = {
                "id": taskId,
                "title": "Default", 
                "state": "Backlog", 
                "src": "",
                "tags": [{title: "Concept", colorBg: "#F9E3E2", colorFont: "#AA2E26"}] ,
                "type": 'task',
                "board": boardId,  
                "date":Date()    
             }
             localStorage.setItem(taskId, JSON.stringify(newTask))
    } else {
        const filteredBoards  = allBoards.map(board => JSON.parse(board)).filter(board => board.type === 'board')
        // Sort the filtered boards by date from older to newer
        filteredBoards.sort((a, b) => new Date(a.date) - new Date(b.date));
        // Get the first board found after sorting
        idBoard  = filteredBoards[0].id;
    }   
    const [boardId, setBoardId] = useState(idBoard)
    
    // useEffect(() => {
    //     if(boardId) {
    //         console.log(boardId)
    //         setBoardId(boardId)
    //     }
    // }, [boardId])

    useEffect(() => {
            console.log(idBoard)
            setBoardId(idBoard)
        
    }, [idBoard])

    const changeBoard = (id) => {
        setBoardId(id)
    }

    return (
        <ShowTasksBoardByIdContext.Provider value={{boardId,changeBoard }}>
                {props.children}
        </ShowTasksBoardByIdContext.Provider>
    )
}

export {ShowTasksBoardByIdContext, ShowTasksBoardByIdProvider}
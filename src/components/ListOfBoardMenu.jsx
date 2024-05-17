import { useState } from "react";
import { BoardMenu } from "./BoardMenu"


export function ListOfBoardMenu ({compressMenu}) {

        const [render, setRender] = useState(false)
        // Retrieve all items from localStorage
        const allBoards = Object.values(localStorage);
        // Parse each item string into an object
        const parsedBoards = allBoards.map(board => JSON.parse(board)).filter(board => board.type === 'board').sort((a, b) => new Date(a.date) - new Date(b.date))

        const change = () => {
            setRender(!render)
        }    
    return(

        <div className="flex flex-col gap-[12px] pt-[36px]">
        {
            parsedBoards &&  parsedBoards.map(board => <BoardMenu key={board.id} id={board.id} title={board.title} logo={board.logo} compressMenu={compressMenu} change={change}/>)
        }
        </div>
    )
}
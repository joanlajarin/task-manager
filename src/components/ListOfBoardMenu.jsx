import { BoardMenu } from "./BoardMenu"
export function ListOfBoardMenu () {
    const BOARDS = [
        {"id": 1, "title": "Default Board", "logo": "#5aafed"},
        {"id": 2, "title": "Backlog", "logo": "#5aafed"},
        {"id": 3, "title": "Backlog", "logo": "#5aafed"},
        {"id": 4, "title": "Backlog", "logo": "#5aafed"},
    ]
    return(
        <div className="flex flex-col gap-[12px] pt-[36px]">
        {
            BOARDS.map(board => <BoardMenu title={board.title} logo={board.logo}/>)
        }
        </div>
    )
}
import { BoardMenu } from "./BoardMenu"
import { useFetchDb } from "../services/useFetchDb"

export function ListOfBoardMenu ({compressMenu}) {

        // Retrieve all items from localStorage
        //const allBoards = Object.values(localStorage);
        //MongoDb
        const {dataDb, loading} = useFetchDb("api/boards")

        // Parse each item string into an object
//        const parsedBoards = allBoards.map(board => JSON.parse(board)).filter(board => board.type === 'board')

    return(

        <div className="flex flex-col gap-[12px] pt-[36px]">
        { loading &&  <li>Loading...</li>}

        {
            dataDb &&  dataDb.map(board => <BoardMenu key={board._id} id={board._id} title={board.title} logo={board.logo} compressMenu={compressMenu}/>)
        }
        </div>
    )
}
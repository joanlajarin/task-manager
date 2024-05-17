import { DarkModeContext } from '../context/DarkModeContext.jsx'
import { ShowTasksBoardByIdContext } from '../context/ShowTasksBoardByIdContext.jsx'
import { useContext } from 'react'



export function BoardMenu({id, title, logo, compressMenu}) {

    const {darkMode}  = useContext(DarkModeContext)
    const {boardId, changeBoard}  = useContext(ShowTasksBoardByIdContext)

    const changeBoardApp = () => {
        changeBoard(id)
    }

    return(
        <button
            className={`${id === boardId ? 'border-2 border-blue-500' : ''} ${compressMenu ? 'rounded-full' : 'rounded-3xl'} flex p-[8px] gap-[8px] items-center`}
            onClick={changeBoardApp}
        >
            <img src={logo}></img>
            {
                !compressMenu && <span className={`${darkMode ? 'text-[#FEF7EE]' : 'text-[#191B1F]' }  text-[14px] font-semibold`}>{title}</span>    

            }
        </button>)
}

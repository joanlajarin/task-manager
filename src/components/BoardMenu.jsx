import { DarkModeContext } from '../context/DarkModeContext.jsx'
import { ShowTasksBoardByIdContext } from '../context/ShowTasksBoardByIdContext.jsx'

import { useContext } from 'react'



export function BoardMenu({id, title, logo, compressMenu}) {

    const {darkMode}  = useContext(DarkModeContext)
    const {changeBoard}  = useContext(ShowTasksBoardByIdContext)

    const changeBoardApp = () => {
        changeBoard(id)
    }

    return(
        <button
            className="flex rounded-xl p-[8px] gap-[8px] items-center"
            onClick={changeBoardApp}
        >
            <img src={logo}></img>
            {
                !compressMenu && <span className={`${darkMode ? 'text-[#FEF7EE]' : 'text-[#191B1F]' }  text-[14px] font-semibold`}>{title}</span>    

            }
        </button>)
}

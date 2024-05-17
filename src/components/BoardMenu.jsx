import { DarkModeContext } from '../context/DarkModeContext.jsx'
import { ShowTasksBoardByIdContext } from '../context/ShowTasksBoardByIdContext.jsx'
import { useContext, useState } from 'react'
import trashImg from '../images/Trash.svg' 


export function BoardMenu({id, title, logo, compressMenu, change}) {

    const {darkMode}  = useContext(DarkModeContext)
    const {boardId, changeBoard}  = useContext(ShowTasksBoardByIdContext)
    const [showBtnRemove, setShowBtnRemove] = useState(false)

    const changeBoardApp = () => {
        changeBoard(id)
    }

    const handleMouseEnter = () => {
        setShowBtnRemove(true)
    }
    
    const handleMouseLeave = () => {
        setShowBtnRemove(false)
    }    
    const handleRemoveConversation = () => {
        localStorage.removeItem(id)
        setShowBtnRemove(false)
        change()
    }

    return(
        <div className='relative w-full'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`${id === boardId ? 'border-2 border-blue-500' : ''} ${compressMenu ? 'rounded-full' : 'rounded-3xl'} w-full flex p-[8px] gap-[8px] items-center`}
                onClick={changeBoardApp}
            >
                <img src={logo}></img>
                {
                    !compressMenu && <span className={`${darkMode ? 'text-[#FEF7EE]' : 'text-[#191B1F]' }  text-[14px] font-semibold`}>{title}</span>    
                }
            </button>
            {
                showBtnRemove && <button className='absolute top-[10px] right-[20px]' onClick={handleRemoveConversation}><img className="size-[20px]" src={trashImg}></img></button>
            }
        </div>
)
}

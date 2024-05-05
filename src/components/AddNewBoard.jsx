import addRoundImg from '../images/Add_round_fill.svg'
import addRoundBlackImg from '../images/Add_round_fill_black.svg'
import { DarkModeContext } from '../context/DarkModeContext'
import { ModalBoardDetailsContext } from '../context/ModalBoardDetailsContext'
import { useContext } from 'react'

export function AddNewBoard ({compressMenu}) {
    
    const {toggleShowBoardDetails}  = useContext(ModalBoardDetailsContext)
    const {darkMode}  = useContext(DarkModeContext)


    return (  
        <>
        {
            compressMenu ?            
            <button 
                className="flex p-[8px] mt-[8px] items-center"
                onClick={toggleShowBoardDetails}>
                <img src={ darkMode ? addRoundImg : addRoundBlackImg}></img> 
            </button>
            :
            <button 
                className="flex gap-[8px] p-[8px] mt-[8px] items-center"
                onClick={toggleShowBoardDetails}
            >
                <img src={darkMode ? addRoundImg : addRoundBlackImg}></img>
                <span className='text-[14px] font-medium'>Add new board</span>
            </button>
        } 
        </>         
 
)}
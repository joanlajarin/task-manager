import addRoundImg from '../images/Add_round_fill.svg'
import { ModalBoardDetailsContext } from '../context/ModalBoardDetailsContext'
import { useContext } from 'react'

export function AddNewBoard ({compressMenu}) {
    
    const {toggleShowBoardDetails}  = useContext(ModalBoardDetailsContext)


    return (  
        <>
        {
            compressMenu ?            
            <button 
                className="flex p-[8px] mt-[8px] items-center"
                onClick={toggleShowBoardDetails}>
                <img src={addRoundImg}></img> 
            </button>
            :
            <button 
                className="flex gap-[8px] p-[8px] mt-[8px] items-center"
                onClick={toggleShowBoardDetails}
            >
                <img src={addRoundImg}></img>
                <span className='text-[14px] font-medium'>Add new board</span>
            </button>
        } 
        </>         
 
)}
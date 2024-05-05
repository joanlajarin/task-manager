import { useState, useContext } from "react"
import { ListOfBoardMenu } from "./ListOfBoardMenu"
import { ToggleSection } from "./ToggleSection"
import closeRoundImg from '../images/Close_round.svg'
import closeRoundBlackImg from '../images/Close_round_black.svg'
import menuImg from '../images/Menu.svg'
import menuBlackImg from '../images/Menu_black.svg'
import { AddNewBoard } from "./AddNewBoard"
import { DarkModeContext } from '../context/DarkModeContext.jsx'

export function Menu() {

    const {darkMode}  = useContext(DarkModeContext)

    const [compressMenu, setCompressMenu] = useState(false)
    const toggleMenuHandler = () => {
        setCompressMenu(!compressMenu)
    }



    return (
            <section 
                className={`${darkMode ? 'bg-[#191B1F]': 'bg-[#FEF7EE]'} flex flex-col ${compressMenu && 'items-center' }`} 
            >
            <button 
                className={`${darkMode ? 'bg-[#2A2D32]': 'bg-[#DEE9FC]'} size-[40px] rounded-full flex items-center justify-center`}
                onClick={toggleMenuHandler}
                >
                    <img     
                        src={darkMode 
                                ? (compressMenu ? menuImg : closeRoundImg)
                                : (compressMenu ? menuBlackImg : closeRoundBlackImg)}
                        alt="Menu Icon"
                    ></img>
                    
            </button>
            <ListOfBoardMenu compressMenu={compressMenu}/>
            <AddNewBoard compressMenu={compressMenu}/>
            <div className="grow flex flex-col-reverse	">
            <ToggleSection compressMenu={compressMenu}/>
            </div>
            </section>
    )
  }
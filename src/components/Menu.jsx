import { useState } from "react"
import { ListOfBoardMenu } from "./ListOfBoardMenu"
import { ToggleSection } from "./ToggleSection"
import closeRoundImg from '../images/Close_round.svg'
import menuImg from '../images/Menu.svg'
import { AddNewBoard } from "./AddNewBoard"

export function Menu() {

    const [compressMenu, setCompressMenu] = useState(false)
    const toggleMenuHandler = () => {
        setCompressMenu(!compressMenu)
    }



    return (
            <section 
                className={`bg-[#191B1F] flex flex-col ${compressMenu && 'items-center' }`} 
            >
            <button 
                className="bg-[#2A2D32] size-[40px] rounded-full flex items-center justify-center"
                onClick={toggleMenuHandler}
                >
                    <img src={compressMenu ? menuImg : closeRoundImg}></img>
                    
            </button>
            <ListOfBoardMenu compressMenu={compressMenu}/>
            <AddNewBoard compressMenu={compressMenu}/>
            <div className="grow flex flex-col-reverse	">
            <ToggleSection compressMenu={compressMenu}/>
            </div>
            </section>
    )
  }
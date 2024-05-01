import { useState } from "react"
import { ListOfBoardMenu } from "./ListOfBoardMenu"
import { ToggleSection } from "./ToggleSection"
import closeRoundImg from '../images/Close_round.svg'
import { AddNewBoard } from "./AddNewBoard"
export function Menu() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleMenuHandler = () => {
        setToggleMenu(!toggleMenu)
    }



    return (
            <section 
                className='bg-[#191B1F] flex flex-col'
                onClick={toggleMenuHandler}
            >
            <button 
                className="bg-[#2A2D32] size-[40px] rounded-full flex items-center justify-center"
                >
                    <img src={closeRoundImg}></img>
            </button>
            <ListOfBoardMenu/>
            <AddNewBoard/>
            <div className="grow flex flex-col-reverse	">
              <ToggleSection/>

            </div>
            </section>
    )
  }
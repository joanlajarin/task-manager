import moonFillBlackImg from '../images/Moon_fill_black.svg'
import moonFillWhiteImg from '../images/Moon_fill_white.svg'
import sunFillBlackImg from '../images/Sun_fill_black.svg'
import sunFillWhiteImg from '../images/Sun_fill_white.svg'

import { DarkModeContext } from './DarkModeContext'
import { useContext } from 'react'

export function ToggleSection() {
    const {darkMode, toggleDarkMode}  = useContext(DarkModeContext)

    const changeDarkModeOn = () => {
        if(darkMode === false)
        {
            toggleDarkMode()
        }
    }
    const changeDarkModeOff = () => {
        if(darkMode === true)
        {
            toggleDarkMode()
        }
    }
    return  (
        <div>
            <button><img src={darkMode ? moonFillWhiteImg : moonFillBlackImg} onClick={changeDarkModeOn}></img>Dark</button>
            <button><img src={darkMode ? sunFillWhiteImg : sunFillBlackImg} onClick={changeDarkModeOff}></img>Light</button>
        </div>
    )     
 
}
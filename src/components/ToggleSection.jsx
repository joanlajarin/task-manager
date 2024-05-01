import moonFillBlackImg from '../images/Moon_fill_black.svg'
import moonFillWhiteImg from '../images/Moon_fill_white.svg'
import sunFillBlackImg from '../images/Sun_fill_black.svg'
import sunFillWhiteImg from '../images/Sun_fill_white.svg'

import { DarkModeContext } from '../context/DarkModeContext'
import { useContext, useState } from 'react'

export function ToggleSection() {
    const [isDark, setIsDark] = useState(true)
    const {darkMode, toggleDarkMode}  = useContext(DarkModeContext)

    const changeDarkModeOn = () => {
        if(darkMode === false)
        {
            toggleDarkMode()
            setIsDark(!isDark)
        }
    }
    const changeDarkModeOff = () => {
        if(darkMode === true)
        {
            toggleDarkMode()
            setIsDark(!isDark)
        }
    }
    return  (
        <div className={`rounded-lg flex p-[4px] w-fit ${darkMode ? 'bg-[#3A3E44]' : 'bg-[#FEF7EE]'}`}>
            <button 
                className={`rounded-lg py-[8px] px-[30px] flex items-center gap-[4px] ${isDark ? 'bg-[#191B1F]' : 'bg-[#FEF7EE]'}`}
                onClick={changeDarkModeOn}
            >
                <img src={darkMode ? moonFillWhiteImg : moonFillBlackImg}></img>
                <span className='text-[0.875rem] font-semibold'>Dark</span>
            </button>
            <button 
                className={`rounded-lg py-[8px]  px-[30px] flex items-center gap-[4px] ${isDark ? 'bg-[#3A3E44]' : 'bg-[#d7d7d7]'}`}
                onClick={changeDarkModeOff}
            >
                <img src={darkMode ? sunFillWhiteImg : sunFillBlackImg}></img>
                <span className='text-[0.875rem] font-semibold'>Light</span>
            </button>
        </div>
    )     
 
}
import moonFillBlackImg from '../images/Moon_fill_black.svg'
import moonFillWhiteImg from '../images/Moon_fill_white.svg'
import sunFillBlackImg from '../images/Sun_fill_black.svg'
import sunFillWhiteImg from '../images/Sun_fill_white.svg'

import { DarkModeContext } from '../context/DarkModeContext'
import { useContext, useState } from 'react'

export function ToggleSection({compressMenu}) {
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

    const changeMode = () => {
            toggleDarkMode()
            setIsDark(!isDark)  
    }
    return  (
        <>
        {
            compressMenu ? 
                <img 
                    className="size-[35px]" src={darkMode 
                        ? (isDark ? moonFillWhiteImg : moonFillBlackImg)
                        : (isDark ? sunFillWhiteImg : sunFillBlackImg)}
                    onClick={changeMode}
                ></img>

            : 
                <div className={`rounded-lg flex p-[4px] w-fit ${darkMode ? 'bg-[#3A3E44]' : 'bg-[#DEE9FC]'}`}>
                    <button 
                        className={`rounded-lg py-[8px] px-[30px] flex items-center gap-[4px] ${isDark ? 'bg-[#191B1F]' : 'bg-[#DEE9FC]'}`}
                        onClick={changeDarkModeOn}
                    >
                        <img src={darkMode ? moonFillWhiteImg : moonFillBlackImg}></img>
                        <span className='text-[0.875rem] font-semibold'>Dark</span>
                    </button>
                    <button 
                        className={`rounded-lg py-[8px]  px-[30px] flex items-center gap-[4px] ${isDark ? 'bg-[#3A3E44]' : 'bg-[#FEF7EE]'}`}
                        onClick={changeDarkModeOff}
                    >
                        <img src={darkMode ? sunFillWhiteImg : sunFillBlackImg}></img>
                        <span className='text-[0.875rem] font-semibold'>Light</span>
                    </button>
                </div>
        }
        </>

    )     
 
}
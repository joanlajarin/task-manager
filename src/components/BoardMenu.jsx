import { DarkModeContext } from '../context/DarkModeContext.jsx'
import { useContext } from 'react'



export function BoardMenu({title, logo, compressMenu}) {

    const {darkMode}  = useContext(DarkModeContext)

    return(
        <button className="flex rounded-xl p-[8px] gap-[8px] items-center">
            <img src={logo}></img>
            {
                !compressMenu && <span className={`${darkMode ? 'text-[#FEF7EE]' : 'text-[#191B1F]' }  text-[14px] font-semibold`}>{title}</span>    

            }
        </button>)
}

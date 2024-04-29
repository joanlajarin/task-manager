import { useContext } from 'react'
import Tag from './Tag.jsx'

import { DarkModeContext } from './DarkModeContext'

export default function Task({task: {title, src, tags}}){
    const {darkMode}  = useContext(DarkModeContext)

    return(
    
    <div className={`rounded-lg flex flex-col gap-[12px] p-[12px] ${darkMode ? 'bg-[#191B1F]' : 'bg-[#FEF7EE]'}`}>
        {src && <img src={src}></img>}
        <span>{title}</span>
        <div className='flex gap-[8px]'>
        { tags.map((tag,index)  => <Tag tag={tag} key={index}/>)}
        </div>
    </div>
    )
}
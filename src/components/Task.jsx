import { useContext } from 'react'
import Tag from './Tag.jsx'

import { DarkModeContext } from './DarkModeContext'

export default function Task({task: {title, source, tags}}){
    const {darkMode}  = useContext(DarkModeContext)

    return(
    
    <div className={`rounded-lg flex flex-col gap-[12px] p-[12px] ${darkMode ? 'bg-[#191B1F]' : 'bg-[#FEF7EE]'}`}>
        {source && <img src={source}></img>}
        <span>{title}</span>
        {tags.map( tag => <Tag tag={tag}/>)}
    </div>
    )
}
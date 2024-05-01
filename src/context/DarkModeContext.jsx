import React, { createContext, useContext, useState, useEffect } from 'react'

const DarkModeContext = createContext()

function DarkModeProvider(props) {

    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        const isDark = localStorage.getItem('darkMode') === 'true'
        setDarkMode(isDark)
      }, [])
    
      useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
        const className = darkMode ? 'dark' : 'light'
        document.documentElement.className = className
      }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (  
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContext, DarkModeProvider}
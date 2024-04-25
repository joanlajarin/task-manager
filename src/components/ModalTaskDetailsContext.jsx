import React, { createContext, useContext, useState, useEffect } from 'react'

const ModalTaskDetailsContext = createContext()

function ModalTaskDetailsProvider(props) {

    const [showTaskDetails, setShowTaskDetails] = useState(false)

    const toggleShowTaskDetails = () => {
        setShowTaskDetails(!showTaskDetails)
    }

    return (
        <ModalTaskDetailsContext.Provider value={{showTaskDetails, toggleShowTaskDetails}}>
                {props.children}
        </ModalTaskDetailsContext.Provider>
    )
}

export {ModalTaskDetailsContext, ModalTaskDetailsProvider}
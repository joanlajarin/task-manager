import React, { createContext, useState } from 'react'

const ModalBoardDetailsContext = createContext()

function ModalBoardDetailsProvider(props) {

    const [showBoardDetails, setShowBoardDetails] = useState(false)
    const [boardData, setBoardData] = useState()

    const toggleShowBoardDetails = () => {
        setShowBoardDetails(!showBoardDetails)
        if(showBoardDetails) {
            setBoardData()
        }
    }

    const fetchData = (data) => {
        setTaskData(data)
    }

    return (
        <ModalBoardDetailsContext.Provider value={{showBoardDetails, toggleShowBoardDetails, fetchData, boardData}}>
                {props.children}
        </ModalBoardDetailsContext.Provider>
    )
}

export {ModalBoardDetailsContext, ModalBoardDetailsProvider}
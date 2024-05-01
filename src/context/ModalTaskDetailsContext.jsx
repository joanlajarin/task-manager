import React, { createContext, useState } from 'react'

const ModalTaskDetailsContext = createContext()

function ModalTaskDetailsProvider(props) {

    const [showTaskDetails, setShowTaskDetails] = useState(false)
    const [taskData, setTaskData] = useState()

    const toggleShowTaskDetails = () => {
        setShowTaskDetails(!showTaskDetails)
        if(showTaskDetails) {
            setTaskData()
        }
    }

    const fetchData = (data) => {
        setTaskData(data)
    }

    return (
        <ModalTaskDetailsContext.Provider value={{showTaskDetails, toggleShowTaskDetails, fetchData, taskData}}>
                {props.children}
        </ModalTaskDetailsContext.Provider>
    )
}

export {ModalTaskDetailsContext, ModalTaskDetailsProvider}
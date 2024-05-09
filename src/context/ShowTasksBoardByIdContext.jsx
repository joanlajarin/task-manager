import React, { createContext, useEffect, useState } from 'react'
import { useFetchDb } from '../services/useFetchDb'


const ShowTasksBoardByIdContext = createContext()

function ShowTasksBoardByIdProvider(props) { 

    const {dataDb, loading} = useFetchDb('api/defaultBoard')
    const [boardId, setBoardId] = useState()

    useEffect(() => {
        if(dataDb) {
            console.log(dataDb[0]._id)
            setBoardId(dataDb[0]._id)
        }
    }, [dataDb])

    const changeBoard = (id) => {
        setBoardId(id)
    }

    return (
        <ShowTasksBoardByIdContext.Provider value={{boardId,changeBoard }}>
                {props.children}
        </ShowTasksBoardByIdContext.Provider>
    )
}

export {ShowTasksBoardByIdContext, ShowTasksBoardByIdProvider}
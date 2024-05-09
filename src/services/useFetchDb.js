import {useEffect, useState} from "react"

export function useFetchDb(urlApi) {

    const [dataDb, setDataDb] = useState(null)
    const [loading, setLoading] = useState(true)

    const url = `http://localhost:8000/${urlApi}`

    useEffect(() => {
        console.log("Searching for data")
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => { setDataDb(data), console.log(data)})
            .finally(() => setLoading(false))
    },[])

     return {dataDb, loading}
}
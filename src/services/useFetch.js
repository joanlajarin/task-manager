import {useEffect, useState} from "react"


export function useFetch() {

    const [urlPhoto, setUrlPhoto] = useState(null)
    const [loading, setLoading] = useState(true)

    const url = `http://localhost:8000/urlphoto`

    useEffect(() => {
        console.log("Searching for a photo")
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => { setUrlPhoto(data)})
            .finally(() => setLoading(false))
    },[])

     return {urlPhoto, loading}
}
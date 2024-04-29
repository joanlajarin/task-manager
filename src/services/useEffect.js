import {useEffect, useState} from "react"


export function useEffect() {

    const [urlPhoto, setUrlPhoto] = useState(null)
    const [loading, setLoading] = useState(true)

    const url = "https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY'"

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((data) => { setUrlPhoto(data.urls.regular)})
            .finally(() => setLoading(false))
    },[])

     return {urlPhoto, loading}
}
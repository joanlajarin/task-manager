import { useEffect } from "react"
import { useFetch } from "../services/useFetch"

export function ImgBackground({onReceivePhoto }) {

    const {urlPhoto, loading} = useFetch()

    useEffect(() => {
        if (urlPhoto) {
            onReceivePhoto(urlPhoto)
        }
    },[urlPhoto])

    return (
        <>
            { loading &&  <li>Loading...</li>}
            { urlPhoto && <img src={urlPhoto}></img> }
        </>
    )
}
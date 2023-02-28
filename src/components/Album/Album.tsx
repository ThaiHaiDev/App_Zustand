import { useEffect } from "react";
import useAlbumStore from "../../hooks/useAlbum";
import Header from "../Header/Header";

const Album = () => {
    const dataAlbums = useAlbumStore((state: any) => state.albums);

    const callApi = useAlbumStore((state:any) => state.fetch);

    useEffect(() => {
        callApi()
    }, [callApi])
      
    return (
        <div>
            <Header />
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-5">
                List album from call API
            </h1>
            {dataAlbums?.map((album: any, index: number) => (
                <p key={index}>{album.title}</p>
            ))}
        </div>
    )
}

export default Album
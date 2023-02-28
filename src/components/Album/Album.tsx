import { useEffect } from "react";
import useAlbumStore from "../../hooks/useAlbum";

const Album = () => {
    const dataAlbums = useAlbumStore((state: any) => state.albums);

    const callApi = useAlbumStore((state:any) => state.fetch);

    useEffect(() => {
        callApi()
    }, [callApi])
      
    return (
        <div>
            {dataAlbums?.map((album: any, index: number) => (
                <p key={index}>{album.title}</p>
            ))}
        </div>
    )
}

export default Album
import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import Seccion from "./components/Seccion";
type Video = {
    portada?: string,
    link?: string,
}
function Carreras() {
    // JSON con informacion del canal de youtube de FMA
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=UCM9TFnuRQoYUp3PyzCgXT8A';
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        fetch(url)
            .then(res => { return res.json() }
            ).then(data => {
                // Obtengo los ultimos 10 elementos y los recorro para almacenarlos
                let videosFormateados = [];

                // Pregunto cual pantalla tengo, para traer mas o menos info
                videosFormateados = data['items'].map((videos: any) => ({
                    portada: videos.thumbnail,
                    link: videos.link,
                }));
                setVideos(videosFormateados)
            }).catch(err => {
                console.error('Error al traer los videos: ', err);
            })
    }, [])


    return <Seccion apartado='carreras' clases='flex justify-center bg-[#090909]'>
        <div className="flex flex-col gap-6 w-full justify-center overflow-x-hidden">
            <div>
                <h2 className='text-3xl font-bold'>Ultimas carreras</h2>
            </div>
            <div className="flex flex-col items-center gap-10 w-full">
                <div className='flex items-center justify-center w-full'>
                    <Carousel>
                        {/* para pantallas grandes se seguirá mostrando los iframes (mayor consumo de recursos) */}
                        {videos.map((video, idx) => (
                            <div key={idx} className="snap-start snap-always relative">
                                <div className='hidden md:flex absolute items-center justify-center bg-gray-300/80 w-full h-full -z-1 rounded-lg text-3xl text-gray-800'>
                                    Ver video en Youtube
                                </div>
                                <a href={video.link} target='_blank' className='md:hover:opacity-20 transition-opacity duration-400'>
                                    <img src={video.portada} alt="" className="w-full min-w-[280px] max-w-[300px] sm:min-w-[350px] md:min-w-[550px] xl:min-w-[800px] border border-gray-500 rounded-lg" />
                                </a>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    </Seccion>
        ;
}
export default Carreras;
import fmCat1 from './assets/fma-categoria-1.webp'
import fmCat2 from './assets/fma-categoria-2.webp'
import Image from "./components/images/Imagen";
import Seccion from "./components/Seccion";
import SeccionPrincipal from "./components/SeccionPrincipal";
// type Pilotos = {
//     gamertag: string,
//     auto: string,
//     fecha1: string,
//     fecha2: string,
//     fecha3: string,
//     fecha4: string,
//     fecha5: string,
//     fecha6: string,
//     fecha7: string,
//     fecha8: string,
//     fecha9: string,
//     puntosTotales: string
// }

function Categorias() {
    // const [pilotosLMH, setPilotosLMH] = useState<Pilotos[]>([])
    // const [pilotosGT3, setPilotosGT3] = useState<Pilotos[]>([])
    // // Informacion para tablas (campeonatos activos)
    // useEffect(() => {
    //     fetch("https://opensheet.elk.sh/1Xy1nF3jUiaJYgKDCTFqDejCyxRMM7KhwfA3IRzSgAGY/Championship+Standings+LMH")
    //         .then(res => res.json())
    //         .then(data => {
    //             let pilotosLMH = [];

    //             pilotosLMH = data.map((pilotos: any) => ({
    //                 gamertag: pilotos.Gamertag,
    //                 auto: pilotos.Auto,
    //                 puntosTotales: pilotos.Totales,
    //             }))

    //             setPilotosLMH(pilotosLMH);
    //             console.log(pilotosLMH)
    //         });
    //     fetch("https://opensheet.elk.sh/1Xy1nF3jUiaJYgKDCTFqDejCyxRMM7KhwfA3IRzSgAGY/Championship+Standings+GT3")
    //         .then(res => res.json())
    //         .then(data => {
    //             let pilotosGT3 = [];

    //             pilotosGT3 = data.map((pilotos: any) => ({
    //                 gamertag: pilotos.Gamertag,
    //                 auto: pilotos.Auto,
    //                 puntosTotales: pilotos.Totales,
    //             }))

    //             setPilotosGT3(pilotosGT3);
    //             console.log(pilotosGT3)
    //         });
    //     // console.log(pilotosGT3)
    //     // console.log(pilotosLMH)
    // }, [])

    return <Seccion apartado='categorias' clases='flex flex-col items-center justify-center bg-[#090909]'>
        <div className="flex flex-col gap-10 p-8 w-full">
            <h2 className='lg:hidden'>Haz click en las imágenes para ver más información</h2>
            <SeccionPrincipal clases='flex-wrap' img1={
                <Image href='https://www.instagram.com/p/DMTisbPR8lY/?img_index=1' enlace={fmCat1} clases='min-w-[80px] max-w-[140px] sm:max-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] max-w-full' />
            } img2={
                <Image href='https://www.instagram.com/p/DMk7I9mxZcZ/?img_index=1' enlace={fmCat2} clases='min-w-[80px] max-w-[140px] sm:max-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] max-w-full' />
            } title='Categorías activas' />
            {/* <table className="table-auto border-collapse border border-gray-400 overflow-scroll">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">Auto</th>
                        <th className="border border-gray-400 px-4 py-2">Gamertag</th>
                        <th className="border border-gray-400 px-4 py-2">Puntos totales</th>
                    </tr>
                </thead>
                <tbody>
                    {pilotosLMH.map((piloto, index) => (
                        <tr key={index}>
                            <td className="border border-gray-400 px-4 py-2">{piloto.auto}</td>
                            <td className="border border-gray-400 px-4 py-2">{piloto.gamertag}</td>
                            <td className="border border-gray-400 px-4 py-2">{piloto.puntosTotales}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    </Seccion>;
}

export default Categorias;
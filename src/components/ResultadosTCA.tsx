import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import type { Pilotos } from "../types/Types";

function ResultadosTCA() {
    const [pilotosTCA, setPilotosTCA] = useState<Pilotos[]>([])
    // Informacion para tablas (campeonatos activos)
    useEffect(() => {
        fetch("https://opensheet.elk.sh/1UQe0rxmmC4XUWnwGYK0gs3JFxu6mhyKW0Buh1ajgqTk/Champ")
            .then(res => res.json())
            .then(data => {
                let pilotosTCA = [];

                pilotosTCA = data.map((pilotos: any) => ({
                    gamertag: pilotos.Gamertag,
                    auto: pilotos.Auto,
                    puntosTotales: pilotos.Totales,
                }))
                
                setPilotosTCA(pilotosTCA);
            });
    }, [])
    return <>
        <NavBar />
        <div className="flex flex-col my-35 text-sm lg:text-lg md:m-10 items-center gap-5 justify-center mx-2 text-gray-300">
            <h2 className="text-4xl font-medium">Resultados de TCA</h2>
            <table className="table-auto border-collapse border border-gray-400 overflow-scroll">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">Gamertag</th>
                        <th className="border border-gray-400 px-4 py-2">Marca</th>
                        <th className="border border-gray-400 px-4 py-2">Puntos totales</th>
                    </tr>
                </thead>
                <tbody>
                    {pilotosTCA.map((piloto, index) => (
                        <tr key={index}>
                            <td className="border border-gray-400 px-4 py-2">{piloto.gamertag}</td>
                            <td className="border border-gray-400 px-4 py-2">{piloto.auto}</td>
                            <td className="border border-gray-400 px-4 py-2 text-right">{piloto.puntosTotales}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Footer />
    </>
}

export default ResultadosTCA;
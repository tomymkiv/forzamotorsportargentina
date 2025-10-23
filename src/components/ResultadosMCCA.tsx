// import { useEffect, useState } from "react";
// import NavBar from "./Navbar";
// import Footer from "./Footer";
// import type { Pilotos } from "../types/Types";

// function ResultadosSCC() {
//     const [pilotosLMH, setPilotosLMH] = useState<Pilotos[]>([])
//     const [pilotosGT3, setPilotosGT3] = useState<Pilotos[]>([])
//     // Informacion para tablas (campeonatos activos)
//     useEffect(() => {
//         fetch("https://opensheet.elk.sh/1Xy1nF3jUiaJYgKDCTFqDejCyxRMM7KhwfA3IRzSgAGY/Championship+Standings+LMH")
//             .then(res => res.json())
//             .then(data => {
//                 let pilotosLMH = [];

//                 pilotosLMH = data.map((pilotos: any) => ({
//                     gamertag: pilotos.Gamertag,
//                     auto: pilotos.Auto,
//                     puntosTotales: pilotos.Totales,
//                 }))
//                 setPilotosLMH(pilotosLMH);
//             });
//         fetch("https://opensheet.elk.sh/1Xy1nF3jUiaJYgKDCTFqDejCyxRMM7KhwfA3IRzSgAGY/Championship+Standings+GT3")
//             .then(res => res.json())
//             .then(data => {
//                 let pilotosGT3 = [];

//                 pilotosGT3 = data.map((pilotos: any) => ({
//                     gamertag: pilotos.Gamertag,
//                     auto: pilotos.Auto,
//                     puntosTotales: pilotos.Totales,
//                 }))
//                 setPilotosGT3(pilotosGT3);
//             });
//     }, [])
//     return <>
//         <NavBar />
//         <div className="flex flex-col my-35 text-sm lg:text-lg md:m-10 items-center gap-5 justify-center mx-2 text-gray-300">
//             <h2 className="text-4xl font-medium">Resultados de LMH</h2>
//             <table className="table-auto border-collapse border border-gray-400 overflow-scroll">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-400 px-4 py-2">Gamertag</th>
//                         <th className="border border-gray-400 px-4 py-2">Auto</th>
//                         <th className="border border-gray-400 px-4 py-2">Puntos totales</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {pilotosLMH.map((piloto, index) => (
//                         <tr key={index}>
//                             <td className="border border-gray-400 px-4 py-2">{piloto.gamertag}</td>
//                             <td className="border border-gray-400 px-4 py-2">{piloto.auto}</td>
//                             <td className="border border-gray-400 px-4 py-2 text-right">{piloto.puntosTotales}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <h2 className="text-4xl font-medium mt-18">Resultados de GT3</h2>
//             <table className="table-auto border-collapse border border-gray-400 overflow-scroll">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-400 px-4 py-2">Gamertag</th>
//                         <th className="border border-gray-400 px-4 py-2">Auto</th>
//                         <th className="border border-gray-400 px-4 py-2">Puntos totales</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {pilotosGT3.map((piloto, index) => (
//                         <tr key={index}>
//                             <td className="border border-gray-400 px-4 py-2">{piloto.gamertag}</td>
//                             <td className="border border-gray-400 px-4 py-2">{piloto.auto}</td>
//                             <td className="border border-gray-400 px-4 py-2 text-right">{piloto.puntosTotales}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         <Footer />
//     </>
// }

// export default ResultadosSCC;
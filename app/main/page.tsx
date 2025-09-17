"use client";

import "leaflet/dist/leaflet.css";

import {useMemo} from "react";
import {Amplify} from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import dynamic from "next/dynamic";
import NasaLogo from "@/components/NasaLogo";

Amplify.configure(outputs);

export default function App() {
    const puntosDeContaminacion = [
        [25.6866, -100.3161, 0.8],
        [25.72, -100.33, 0.5],
        [25.67, -100.3, 0.9],
        [25.65, -100.32, 0.3],
        [25.69, -100.29, 0.7],
        [25.7, -100.35, 0.6],
    ];

    const Mapa = useMemo(
        () =>
            dynamic(
                () => import("@/components/Map"), // Corrige el nombre del componente de mapa principal
                {
                    loading: () => <p>Un mapa se está cargando...</p>,
                    ssr: false,
                }
            ),
        []
    );

    // Hacemos lo mismo para el HeatmapLayer para evitar errores de SSR
    const HeatmapLayer = useMemo(
        () =>
            dynamic(
                () => import("@/components/Map/HeatmapLayer"), // Importa tu nuevo componente
                {ssr: false}
            ),
        []
    );

    return (
        <div className="flex flex-col flex-1">
            <Mapa>
                <HeatmapLayer points={puntosDeContaminacion} />
            </Mapa>

            <nav className="backdrop-blur-xs bg-zinc-900/50 flex flex-col p-4 text-white absolute top-0 right-0 z-[9999] m-4 rounded-2xl h-full max-h-[400px]">
                <header className="w-full py-3 px-4 text-white inline-flex items-center gap-1">
                    <span className="size-8 border-r border-r-whte">
                        <NasaLogo />
                    </span>
                    <span className="flex flex-col gap-1 text-xl select-none">
                        <span className="font-extralight">EARHDATA</span>
                        <span className="font-semibold text-xs">By LOCOS DE LA NASA</span>
                    </span>
                </header>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <span>Comienzo:</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

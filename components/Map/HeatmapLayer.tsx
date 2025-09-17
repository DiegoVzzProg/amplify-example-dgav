// components/HeatmapLayer.tsx
"use client";

import {useEffect} from "react";
import {useMap} from "react-leaflet";
import L from "leaflet";
import "leaflet.heat"; // Importa la librería

// Definimos el tipo para los puntos del heatmap
type HeatmapPoint = [number, number, number]; // [lat, lng, intensity]

interface HeatmapLayerProps {
    points: HeatmapPoint[];
}

const HeatmapLayer = ({points}: HeatmapLayerProps) => {
    const map = useMap(); // Obtenemos la instancia del mapa

    useEffect(() => {
        if (!map || points.length === 0) return;

        // Creamos la capa de calor con los puntos y opciones de estilo
        const heatLayer = (L as any).heatLayer(points, {
            radius: 25,
            blur: 15,
            maxZoom: 18,
            gradient: {0.4: "blue", 0.65: "lime", 1: "red"}, // Colores del gradiente
        });

        // Añadimos la capa al mapa
        map.addLayer(heatLayer);

        // Función de limpieza: se ejecuta cuando el componente se desmonta
        // o cuando los puntos cambian. Esto es MUY importante para evitar
        // que se apilen capas viejas.
        return () => {
            map.removeLayer(heatLayer);
        };
    }, [map, points]); // El efecto se vuelve a ejecutar si el mapa o los puntos cambian

    return null; // Este componente no renderiza nada en el DOM directamente
};

export default HeatmapLayer;

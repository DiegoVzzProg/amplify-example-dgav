"use client";

import 'leaflet/dist/leaflet.css';

import { useEffect } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import Map from '@/components/Map';


Amplify.configure(outputs);


export default function App() {

    useEffect(() => {
    }, []);

    return (
        <section className='flex flex-col flex-1 gap-3 py-5'>
            <span className='font-black text-2xl'>
                Mapa
            </span>
            <Map></Map>
        </section>
    );
}

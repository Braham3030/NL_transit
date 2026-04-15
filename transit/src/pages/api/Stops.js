
import fs from 'node:fs/promises';
import path from 'node:path';

export async function GET({ request }) {

    const url = new URL(request.url);
    const minLat = parseFloat(url.searchParams.get('minLat'));
    const maxLat = parseFloat(url.searchParams.get('maxLat'));
    const minLon = parseFloat(url.searchParams.get('minLon'));
    const maxLon = parseFloat(url.searchParams.get('maxLon'));
    
    try {
        const filePath = path.resolve('public/data/stopsNorthHolland.json');
        const fileContents = await fs.readFile(filePath, 'utf-8');
        const allStops = JSON.parse(fileContents);

        console.log(fileContents);
        // const response = await fetch(filePath);

        let filteredStops = allStops;

        if (!isNaN(minLat) && !isNaN(maxLat) && !isNaN(minLon) && !isNaN(maxLon)) {
            filteredStops = allStops.filter(stop => {
                return stop.stop_lat >= minLat && stop.stop_lat <= maxLat && stop.stop_lon >= minLon && stop.stop_lon <= maxLon;
            });
        }

        return new Response(JSON.stringify(filteredStops), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // const stopData = await response.json();

        // stopData.forEach (stopData => {
        //     if (stopData.lat && stopData.lon) {
        //         L.marker([stopData.lat, stopData.lon]).addTo(map)
        //             .bindPopup('<b>${stopData.name}</b>')
        //             .addTo(map);
        //     }
        // });
        // console.log(stopData.length);
    } catch (error) {
        console.error('Error fetching or processing stops data:', error);
        
        return new Response(JSON.stringify("error"), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
        
    }
}
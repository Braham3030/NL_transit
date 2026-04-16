
import fs from 'node:fs/promises';
import path from 'node:path';

export async function GET({ request }) {

    const url = new URL(request.url);
    // const minLat = parseFloat(url.searchParams.get('minLat'));
    // const maxLat = parseFloat(url.searchParams.get('maxLat'));
    // const minLon = parseFloat(url.searchParams.get('minLon'));
    // const maxLon = parseFloat(url.searchParams.get('maxLon'));

    const routeID = url.searchParams.get('route_id');
    
    try {
        const filePath = path.resolve('public/data/routes.json');
        const fileContents = await fs.readFile(filePath, 'utf-8');
        const allRoutes = JSON.parse(fileContents);

        // console.log(fileContents);
        // const response = await fetch(filePath);

        let filteredRoutes = allRoutes;

        // Filter routes based on the provided route_id in json
        if (routeID) {
            filteredRoutes = allRoutes.filter(route =>
                route.route_id === routeID
            )
        }

        return new Response(JSON.stringify(filteredRoutes), {
            status: 200,
            headers: { 
                'Content-Type': 'application/json', 
                // Added the cache-control to allow the browser to cache the routes. This improves performance, because browser does not have to fetch the data again
                // https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control
                'cache-control': 'public, max-age=86400'
            }
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
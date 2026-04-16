// @ts-nocheck
import GtfsRealtime from 'gtfs-realtime-bindings';

const url = 'https://gtfs.ovapi.nl/nl/vehiclePositions.pb';

let cachedData = null;
let lastFetchTime = 0;
// Cache duration in milliseconds
const cacheDuration = 15000


// Gtfs-realtime-bindings used to decode the fetched data and to make the structure
// https://www.npmjs.com/package/gtfs-realtime-bindings

export async function GET() {
    try {
        const currentTime = Date.now();


        if (cachedData && (currentTime - lastFetchTime < cacheDuration)) {
            console.log('Using cached data');
            return new Response(JSON.stringify(cachedData), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }


        const response = await fetch(url);

        if (response.status === 429 && cachedData) {
            console.error('Rate limit exceeded')
            return new Response(JSON.stringify(cachedData), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Reads binary data and decodes it using gtfs
        const buffer = await response.arrayBuffer();

        // Decoding protocol
        // https://www.npmjs.com/package/gtfs-realtime-bindings
        const message = GtfsRealtime.transit_realtime.FeedMessage.decode(new Uint8Array(buffer));
        
        // Filter and map data to get relevant information in array
        const vehicles = message.entity.filter(entity => entity.vehicle)
        .map(entity => ({
            id: entity.id,
            latitude: entity.vehicle.position?.latitude,
            longitude: entity.vehicle.position?.longitude,
            routeId: entity.vehicle.trip?.routeId,
            directionId: entity.vehicle.trip?.directionId,
            timestamp: entity.vehicle.timestamp
        }));

        // console.log(vehicles);

        cachedData = vehicles;
        lastFetchTime = currentTime;

        return new Response(JSON.stringify(vehicles), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })

    } catch (error) {
        console.error('Error fetching or processing stops data:', error);

        return new Response(JSON.stringify({ error: 'Failed to fetch or process stops data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}



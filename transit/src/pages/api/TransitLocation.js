// @ts-nocheck

const url = 'http://ovapi.nl';


export async function GET() {
    try {
        const response = await fetch({url});

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const buffer = await response.arrayBuffer();
        
        const vehicles = feed.entity.map(entity => ({
            id: entity.id,
            latitude: entity.vehicle?.position.latitude,
            longitude: entity.vehicle?.position.longitude,
            routeId: entity.vehicle?.trip.routeId,
            directionId: entity.vehicle?.trip.directionId,
            timestamp: entity.vehicle?.timestamp
        }));

        console.log(vehicles);

        return new Response(JSON.stringify(vehicles), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })

    } catch (error) {
        console.error('Error fetching or processing stops data:', error);
    }
}



import fs from "node:fs/promises";
import path from "node:path";

export async function GET({ request }) {
	const url = new URL(request.url);
	// The minLat, maxLat, minLon and maxLon are being parsed from the stops API. The fetch the max and min lat and lon to filter the bounds of the stops
	const minLat = parseFloat(url.searchParams.get("minLat"));
	const maxLat = parseFloat(url.searchParams.get("maxLat"));
	const minLon = parseFloat(url.searchParams.get("minLon"));
	const maxLon = parseFloat(url.searchParams.get("maxLon"));

	try {
		const filePath = path.resolve("public/data/stopsNorthHolland.json");
		const fileContents = await fs.readFile(filePath, "utf-8");
		const allStops = JSON.parse(fileContents);

		let filteredStops = allStops;

		// The locations for the stops are being filtered here.
		if (!isNaN(minLat) && !isNaN(maxLat) && !isNaN(minLon) && !isNaN(maxLon)) {
			filteredStops = allStops.filter((stop) => {
				// Check if the stop's latitude and longitude are within the specific bounds.
				// If the stop's latitude is between minLat and maxLat, and the stop's longitude is between minLon and maxLon, then it will be included in the filteredStops array.
				return stop.stop_lat >= minLat && stop.stop_lat <= maxLat && stop.stop_lon >= minLon && stop.stop_lon <= maxLon;
			});
		}

		// If the Response returns 200, the filtered stops will be used as JSON data.
		return new Response(JSON.stringify(filteredStops), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		// If error, error message will occur
		console.error("Error fetching or processing stops data:", error);

		return new Response(JSON.stringify("error"), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}
}

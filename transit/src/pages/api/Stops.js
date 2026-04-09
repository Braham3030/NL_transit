
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export async function GET() {
    const filePath = path.resolve(process.cwd(), 'src/data/stops.txt');

    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const records = parse(fileContent, {
            columns: true,
            skip_empty_lines: true
        });

        const stops = records.slice(0, 100).map((stop) => ({
            id: stop.stop_id,
            name: stop.stop_name,
            lat: parseFloat(stop.stop_lat),
            lon: parseFloat(stop.stop_lon)
        }));

        return new Response(JSON.stringify(stops), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

} catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to read stops data'}), 
{ status: 500 });
}
}


// Use of gemini to fetch and use the .txt files
// https://gemini.google.com/share/88040d0d5586
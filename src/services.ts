export async function fetchCoordinates() {
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');

    const data = await response.json();

    if (response.ok) {
        const latitude = Number(data.latitude.toFixed(4));
        const longitude = Number(data.longitude.toFixed(4));
        return {latitude, longitude};
    }

    throw new Error('Fetch failed')
}
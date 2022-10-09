///api that allows you to get your current location
//function has an optional parameter
// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//         enableHighAccuracy: true
//     })
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    console.log(position);
}

function errorLocation() {

}
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsbHluenVuZ3VsYSIsImEiOiJjbDkxNWJ4ZjQweXFkM25vNmZsZWVnZDgzIn0.nsguDWhL1tjbD2TQGYDfUg';
const map = new mapboxgl.Map({
    container: 'map', // container ID html elememnt
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});
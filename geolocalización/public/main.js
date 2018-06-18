// buena practica comprobar que el navegador permite la geolocalizacion

if ("geolocation" in navigator) {

} else {
    alert('La geolocalizacion no existe en su ordenador');
}

// getCurrentPosition() te da la posicion

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Localizacion: " + position.coords.latitude, position.coords.longitude);
        console.log(position);

    }, function (err) {
        console.log(err);
    }, { // en este parte, es para configurar el tiempo de espera y demás
        maximunAge: Infinity, // 0,321,Infinity (la ultima vez que buscamos una localización)
        timeout: 10000,
        enableHighAccuracy: true, // Alta precisión 
    });
} else {
    alert('La geolocalizacion no existe en su ordenador');

}
var watchID = navigator.geolocation.watchPosition(function (position) {
    console.log(position);
}, function(err){
    console.log(err);
    },  { // en este parte, es para configurar el tiempo de espera y demás
        maximunAge: Infinity, // 0,321,Infinity (la ultima vez que buscamos una localización)
        timeout: 10000,
        enableHighAccuracy: true, // Alta precisión 
    });

navigator.geolocation.clearWatch(watchID); //Para dejar de rastrear la localización 

console.log("watchID = " + watchID); 
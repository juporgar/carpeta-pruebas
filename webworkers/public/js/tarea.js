var miMensaje = {
    name: {
        first: 'Julian',
        second: 'Portales'
    }
};

self.onmessage = function (message) {
 //   var x = JSON.stringify({'message': message.data});

    var tempMessage = JSON.stringify(miMensaje);
//    postMessage(tempMessage); // para mostrar por la consola del inspeccionador, con toda la info
    //postMessage(tempMessage)
    postMessage(message.data);
}
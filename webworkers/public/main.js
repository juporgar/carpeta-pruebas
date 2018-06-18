var worker;

function startWorker() {

    if (typeof (Worker) !== "undefined") {

        worker = new Worker("./js/tarea.js");
        // worker.addEventListener("message", function (ev) { //recoge la info de tarea.js (ya que esta indicado en la variable worker)
        //     var tempMessage = JSON.parse(ev.data) // lo estamos pasando en un objeto de js con .parse y el ev.data es para indicar que dato queremos
        //     console.log(tempMessage); //para que solo nos devuelva los datos
        // });

        worker.onmessage = function (ev) {
           // var tempMessage = JSON.parse(ev.data) // lo estamos pasando en un objeto de js con .parse y el ev.data es para indicar que dato queremos
            console.log(ev.data); //para que solo nos devuelva los datos
            onMsg(ev);
            
        };

        worker.onerror = function(err){
            console.log(err);    
            onError(err);
        }
        worker.postMessage('Que dices tú, hippie colgao!')
    } else {
        alert('No funciona')
    }
}

function stopWorker() {
    if (typeof worker !== 'undefined') {
        worker.terminate(); // Para pararlo
    }
}

function onMsg (e){
    document.getElementById('result')
        .textContent  = e.data;
}

function onError(e){
    document.getElementById('error')
    .textContent = [
        'ERROR: Line ',
        e.lineno,
        'in ',
        e.filename,
        ': ',
        e.message
    ].join('');
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxSikPxlcOEJYgSfanNd9pp1foQooCJF8BBofMe3P5lQnjZITYbr8CFp7TE6epcDSU/exec'

const form = document.forms['asistencia-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(respuesta())
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})

document.querySelector("#inicio").addEventListener("click", iniciar)
function iniciar(){
    document.querySelector("#todo").style.display = 'block'
    document.querySelector("#divinicio").style.display = 'none'
    let audio = new Audio("img/cancion.mp3")
    audio.play();
}

function respuesta(){
    let res = document.querySelector("#respuesta")
    res.innerHTML=("Gracias por confirmar tu asistencia")
}

document.querySelector("#btnCopiar").addEventListener("click", copiarTexto)

function copiarTexto(){
    let texto = "Pasame las cuentas"
    let campoTemporal = document.createElement("textarea")
    campoTemporal.value = texto
    document.body.appendChild(campoTemporal)
    campoTemporal.select()
    document.execCommand("copy")
    document.body.removeChild(campoTemporal);
}
let countDownDate = new Date("October 5, 2024 20:00:00").getTime();

// Actualizar la cuenta atrás cada segundo
let x = setInterval(function() {

    // Obtener la fecha y hora actual
    let now = new Date().getTime();

    // Calcular la diferencia entre ahora y la fecha de cuenta atrás
    let distance = countDownDate - now;

    // Calcular los días, horas, minutos y segundos restantes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en el elemento con id="countdown"
    document.getElementById("countdown").innerHTML = 
        `Tiempo restante: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Si la cuenta atrás ha terminado, mostrar un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Tiempo finalizado!";
    }
}, 1000);
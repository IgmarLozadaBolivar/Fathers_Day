/* Fondo Video */
var videoElement = document.getElementById("videoFondo");

function videoCarga() {
    var videoFuente = document.createElement("source");
    videoFuente.src = "./video/Fathers_Day.mp4";
    videoFuente.type = "video/mp4";
    videoElement.appendChild(videoFuente);
    videoElement.load();
}
videoCarga();

function expandImage(image) {
    // Crear el contenedor de la imagen ampliada
    const expandedImageContainer = document.createElement('div');
    expandedImageContainer.classList.add('expanded-image');
    // Crear la imagen ampliada
    const expandedImage = document.createElement('img');
    expandedImage.src = image.src;
    // Agregar la imagen ampliada al contenedor
    expandedImageContainer.appendChild(expandedImage);
    // Crear el botón para cerrar la imagen ampliada
    const closeButton = document.createElement('span');
    closeButton.classList.add('expanded-image-close');
    closeButton.innerHTML = '&times;';
    // Agregar el evento de clic al botón de cerrar
    closeButton.addEventListener('click', function () {
        expandedImageContainer.remove();
    });
    // Agregar el botón de cerrar al contenedor de la imagen ampliada
    expandedImageContainer.appendChild(closeButton);
    // Agregar el contenedor de la imagen ampliada al cuerpo del documento
    document.body.appendChild(expandedImageContainer);
}

function showAlertAfterScroll() {
    var seccion3 = document.getElementById('seccion4');
    var alertShown = false;

    function checkIfInView() {
        var bounding = seccion3.getBoundingClientRect();
        if (bounding.top <= window.innerHeight && !alertShown) {
            alert('¡Recuerda abrir el regalo!');
            alertShown = true;
        }
    }

    window.addEventListener('scroll', checkIfInView);
}

showAlertAfterScroll();

/* Ventana Emergente */
function showAlertAfterTransition(message) {
    const label = document.querySelector('.click');
    label.addEventListener('transitionend', function () {
        Swal.fire({
            title: '¡Father Day!',
            html: '<span style="color: #333;">' + message + '</span>',
            icon: 'success',
            showCloseButton: true,
            confirmButtonText: 'Cerrar',
            onClose: function () {
                label.click();
            }
        });
    });
}

/* Reproductor */
var v = document.getElementsByTagName("audio")[0];
var sound = false;
var boton = document.getElementById("btn2");

boton.addEventListener("click", function () {
    if (!sound) {
        v.play();
        this.innerHTML = "Pause";
        sound = true;
    } else {
        v.pause();
        this.innerHTML = "Play";
        sound = false;
    }
});

/* Volumen  */
var reproductor = document.getElementById("reproductor");
reproductor.volume = 0.5;
var barra = document.getElementById("mislider");

barra.addEventListener("change", function (ev) {

    var resultado = document.getElementById("valor");
    resultado.innerHTML = ev.currentTarget.value;
    reproductor.volume = ev.currentTarget.value;

}, true);

document.getElementById("valor").innerHTML = document.getElementById("mislider").value;

/* Scroll Top */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
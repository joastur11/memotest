// x boton empezar juego, cambiar mensaje de bienvenida por "el juego ha comenzado"
// x que los cuadros (en pares) se pinten de un color random 
// x que no se vean los cuadros (puede ser que tengan un borde, y que el color se revele onclick)
// revelar el color cuando se clickee un cuadro, mantenerlo hasta que se clickee otro
// x color en clase oculto, que se revele cuando se haga click
// si los colores son iguales, poner opacidad de los cuadros en 0 y bloquear el input de esos cuadros.
// si son distintos, los cuadros vuelven al color de fondo
// ir contando el numero de intentos cada dos clicks 
// el juego termina cuando desaparecen todos los cuadros, no se puede perder
// x el boton de empezar se transforma en boton de reinicio (no cambia la funcionalidad (creo) solo la palabra)
// x mostrar tiempo de juego



let $intento = document.querySelector('#intento') 
$intento = 0

document.querySelector('button[type=button]').onclick = comenzarJuego

const $boton = document.querySelector('#boton-empezar')

function cambiarBoton (){
    $boton.textContent ='Reiniciar'
    $boton.setAttribute('value', 'reset')  
}

function comenzarJuego (){
    if ($boton.value === 'reset'){
        location.reload()
    } else {
    reiniciarIntento ()
    cambiarBoton ()
    manejarRonda ()
    iniciarCronometro ()
    }
}

let tiempo = 0;
let intervalo;

function iniciarCronometro() {
  intervalo = setInterval(() => {
    tiempo++;
    const minutos = Math.floor(tiempo / 60).toString().padStart(2, '0');
    const segundos = (tiempo % 60).toString().padStart(2, '0');
    document.getElementById('cronometro').textContent = `${minutos}:${segundos}`;
  }, 1000);
}

function detenerCronometro() {
  clearInterval(intervalo);
}

function reiniciarIntento (){
    $intento = 0
}

function manejarRonda (){
    $mensajeInicio = document.querySelector('#estado')
    $mensajeInicio.innerHTML = '<strong> Buena suerte! </strong>'
    pintarCuadros()
}

function pintarCuadros (){
    const $cuadros = document.querySelectorAll('.cuadro');

    let indices = []
    for (i=0; i<$cuadros.length; i++){
    indices.push (i)
    };

    indices.sort(() => 0.5 - Math.random())
    
    let pares = [];
    for (let i=0; i<indices.length; i+=2) {
        pares.push([indices[i], indices[i + 1]])
    }

    for (let i=0; i<pares.length; i++){
        const [a, b] = pares[i];
        const colores = ['red', 'green', 'blue', 'orange', 'purple', 'pink', 'yellow', 'brown'];
        const color = colores[i]
        $cuadros[a].style.backgroundColor = color
        $cuadros[b].style.backgroundColor = color

        $cuadros[a].dataset.color = color;
        $cuadros[b].dataset.color = color;

        $cuadros[a].style.backgroundColor = color;
        $cuadros[b].style.backgroundColor = color;

        $cuadros[a].classList.add('oculto');
        $cuadros[b].classList.add('oculto');
    }    
}



let vida1 = 100;
let vida2 = 100;
let turno = 1;

const barra1 = document.getElementById('vida1');
const barra2 = document.getElementById('vida2');
const mensajes = document.getElementById('mensajes');
const turno1 = document.getElementById('turno1');
const turno2 = document.getElementById('turno2');

function lanzarProyectil(origen) {
    const zonaAtaque = document.getElementById("zona-ataque");
    const proyectil = document.createElement("div");
    proyectil.classList.add("proyectil");

    if (origen === 1) {
        proyectil.classList.add("lanzado-1");
    } else {
        proyectil.classList.add("lanzado-2");
    }

    zonaAtaque.appendChild(proyectil);

    setTimeout(() => {
        proyectil.remove();
    }, 500);
}

function actualizarTurno() {
    if (turno === 1) {
        turno1.textContent = "Tu turno";
        turno2.textContent = "Espera";
        document.getElementById('atacar1').disabled = false;
        document.getElementById('atacar2').disabled = true;
    } else {
        turno1.textContent = "Espera";
        turno2.textContent = "Tu turno";
        document.getElementById('atacar1').disabled = true;
        document.getElementById('atacar2').disabled = false;
    }
}

function atacar(atacante) {
    if (turno !== atacante) return;

    lanzarProyectil(atacante);

    let daño = Math.floor(Math.random() * 20) + 5;

    if (atacante === 1) {
        vida2 -= daño;
        if (vida2 < 0) vida2 = 0;
        barra2.style.width = vida2 + "%";
        mensajes.innerHTML = `<p>Jugador 1 lanzó un ataque e hizo ${daño} de daño</p>`;
        turno = 2;
    } else {
        vida1 -= daño;
        if (vida1 < 0) vida1 = 0;
        barra1.style.width = vida1 + "%";
        mensajes.innerHTML = `<p>Jugador 2 lanzó un ataque e hizo ${daño} de daño</p>`;
        turno = 1;
    }

    if (vida1 <= 0 || vida2 <= 0) {
        mensajes.innerHTML = `<p>🎉 ¡Jugador ${vida1 <= 0 ? "2" : "1"} gana!</p>`;
        document.getElementById('atacar1').disabled = true;
        document.getElementById('atacar2').disabled = true;
        turno1.textContent = "";
        turno2.textContent = "";
    } else {
        actualizarTurno();
    }
}

document.getElementById('atacar1').addEventListener('click', () => atacar(1));
document.getElementById('atacar2').addEventListener('click', () => atacar(2));

actualizarTurno();
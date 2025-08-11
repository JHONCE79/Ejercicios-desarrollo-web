
---

# 🪓 Batalla Épica – Juego por Turnos

Un pequeño juego web en el que dos jugadores se enfrentan en una batalla por turnos, lanzando hachas para quitar vida al oponente.
El primero en reducir la vida del rival a **0%** gana la partida.

---

## 📸 Vista previa

![Vista previa](img/captura.png) <!-- Cambia por tu screenshot si tienes uno -->

---

## 🎮 Cómo jugar

1. Cada jugador tiene un avatar, una barra de vida y un botón **Atacar**.
2. Solo el jugador cuyo turno está activo puede atacar.
3. Al presionar el botón de ataque:

   * Se lanza una animación de hacha.
   * Se calcula un daño aleatorio entre 5 y 25 puntos.
   * Se actualiza la barra de vida del rival.
4. El turno pasa automáticamente al otro jugador.
5. El primer jugador que deje la vida del rival en **0%** gana la batalla.

---

## 📂 Estructura del proyecto

```
batalla-epica/
│
├── index.html          # Estructura principal del juego
├── css/
│   └── styles.css      # Estilos del juego
├── js/
│   └── script.js       # Lógica del juego
└── img/
    ├── avatar1.png     # Avatar jugador 1
    └── avatar2.png     # Avatar jugador 2
```

---

## 🛠️ Instalación y uso

1. **Clona o descarga** este repositorio.
2. Asegúrate de tener la carpeta `img/` con los archivos:

   * `avatar1.png`
   * `avatar2.png`
3. Abre el archivo `index.html` en tu navegador.
4. ¡Listo! Ya puedes jugar.

---

## ✨ Personalización

* **Avatares:** Reemplaza `img/avatar1.png` y `img/avatar2.png` por tus propios diseños.
* **Daño:** Modifica el cálculo de daño en `script.js` para ajustar la dificultad:

  ```javascript
  let daño = Math.floor(Math.random() * 20) + 5; // Daño entre 5 y 25
  ```



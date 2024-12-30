document.getElementById("playButton").addEventListener("click", function () {
    // Reproducir música
    const audio = document.getElementById("audio");
    audio.play();

    // Ocultar el botón
    const button = document.getElementById("playButton");
    button.style.display = "none";

    // Mostrar las letras
    const lyrics = document.getElementById("lyrics");
    const lyricsContent = document.getElementById("lyricsContent");
    lyrics.style.display = "block";

    // Las líneas de la letra y sus tiempos de aparición (en milisegundos)
    const lyricsText = [
        { line: "", time: 17900 },
        { line: "Amarte como te amo es complicado", time: 6120 },
        { line: "Pensar como te pienso es un pecado", time: 6250 },
        { line: "Mirar como te miro está prohibido", time: 6100 },
        { line: "Tocarte como quiero es un delito", time: 6340 },
        { line: "", time: 1350 },
        { line: "Ya no sé qué hacer para que estés bien", time: 3360 },
        { line: "Si apagar el sol para encender tu amanecer", time: 3300 },
        { line: "Falar en portugués, aprender a hablar francés", time: 3550 },
        { line: "O bajar la luna hasta tus pies", time: 2400 },
        { line: "", time: 100 },
        { line: "Yo solo quiero darte un beso", time: 3340 },
        { line: "Y regalarte mis mañanas", time: 3630 },
        { line: "Cantar para calmar tus miedos", time: 2810 },
        { line: "Quiero que no te falte nada", time: 3820 },
        { line: "", time: 140 },
        { line: "Yo solo quiero darte un beso", time: 3280 },
        { line: "Llenarte con mi amor el alma", time: 3160 },
        { line: "Llevarte a conocer el cielo", time: 3170 },
        { line: "Quiero que no te falte nada", time: 3430 },
        { line: "", time: 8120 },
        { line: "Si el mundo fuera mío, te lo daría", time: 6180 },
        { line: "Hasta mi religión, la cambiaría", time: 7290 },
        { line: "Por ti, hay tantas cosas que yo haría", time: 7140 },
        { line: "Pero tú no me das ni las noticias", time: 4530 },
        { line: "", time: 2290 },
        { line: "Y ya no sé qué hacer para que estés bien", time: 3530 },
        { line: "Si apagar el sol para encender tu amanecer", time: 3350 },
        { line: "Falar en portugués, aprender a hablar francés", time: 3580 },
        { line: "O bajar la luna hasta tus pies", time: 2420 },
        { line: "", time: 3000 },

        { line: "Te amo mucho Karina :)", time: 5090 },
    ];

    let index = 0;

    function displayNextLine() {
        if (index < lyricsText.length) {
            // Eliminar la línea anterior, si existe
            const existingLine = document.querySelector("#lyricsContent p");
            if (existingLine) {
                existingLine.remove();
            }

            const currentLine = lyricsText[index];
            if (currentLine.line !== "") {
                const lineElement = document.createElement("p");
                lineElement.textContent = currentLine.line;
                lyricsContent.appendChild(lineElement);
                // Mover el scroll hacia abajo automáticamente
                lyricsContent.scrollTop = lyricsContent.scrollHeight;
            }
            index++;
            setTimeout(displayNextLine, currentLine.time); // Tiempo personalizado entre líneas
        }
    }

    // Inicia la animación de letras
    displayNextLine();

    // Generar corazones aleatorios
    function generateHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";

        // Posición aleatoria en la pantalla
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;
        const randomX = Math.random() * maxWidth;
        const randomY = Math.random() * maxHeight;

        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`;

        // Añadir al contenedor de corazones
        document.getElementById("hearts-container").appendChild(heart);

        // Eliminar el corazón después de un tiempo
        setTimeout(() => {
            heart.remove();
        }, 2000); // 2 segundos
    }

    setInterval(generateHeart, 300); // Generar un corazón cada 300 ms
    
});

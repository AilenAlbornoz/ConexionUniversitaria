document.getElementById("startBreathingButton").addEventListener("click", function() {
    startBreathingExercise();
});

function startBreathingExercise() {
    const timerDisplay = document.getElementById("timer");
    let count = 4;

    // Fase 1: Inhalar
    timerDisplay.textContent = "Inhalar... " + count;
    const inhaleInterval = setInterval(() => {
        count--;
        timerDisplay.textContent = "Inhalar... " + count;
        if (count <= 0) {
            clearInterval(inhaleInterval);
            count = 4; // Reiniciar el contador para la siguiente fase

            // Fase 2: Mantener
            timerDisplay.textContent = "Mantener... " + count;
            const holdInterval = setInterval(() => {
                count--;
                timerDisplay.textContent = "Mantener... " + count;
                if (count <= 0) {
                    clearInterval(holdInterval);
                    count = 4; // Reiniciar el contador para la siguiente fase

                    // Fase 3: Exhalar
                    timerDisplay.textContent = "Exhalar... " + count;
                    const exhaleInterval = setInterval(() => {
                        count--;
                        timerDisplay.textContent = "Exhalar... " + count;
                        if (count <= 0) {
                            clearInterval(exhaleInterval);
                            timerDisplay.textContent = "¡Listo! Repite el ciclo.";
                        }
                    }, 1000);
                }
            }, 1000);
        }
    }, 1000);
}
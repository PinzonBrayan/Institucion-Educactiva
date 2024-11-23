// Función para evaluar el formulario
function evaluateQuiz() {
    let score = 0;

    // Respuestas correctas
    const answers = {
        q1: "b",
        q2: ["a", "c"], // Respuestas correctas para checkbox
        q3: "a",
        q4: "a",
        q5: 8
    };

    // Evaluar Pregunta 1 (Radio buttons)
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === answers.q1) score += 20;

    // Evaluar Pregunta 2 (Checkbox)
    const q2 = document.querySelectorAll('input[name="q2"]:checked');
    const q2Values = Array.from(q2).map(input => input.value);
    if (q2Values.includes("a") && q2Values.includes("c") && q2Values.length === 2) score += 20;

    // Evaluar Pregunta 3 (Lista desplegable)
    const q3 = document.querySelector('select[name="q3"]').value;
    if (q3 === answers.q3) score += 20;

    // Evaluar Pregunta 4 (Texto)
    const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
    if (q4 === "a") score += 20;

    // Evaluar Pregunta 5 (Número)
    const q5 = parseInt(document.querySelector('input[name="q5"]').value, 10);
    if (q5 === answers.q5) score += 20;

    // Mostrar resultado
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h3>Tu calificación: ${score}/100</h3>`;
    if (score === 100) {
        resultDiv.innerHTML += `<p>¡Excelente trabajo! Has obtenido la máxima puntuación.</p>`;
    } else if (score >= 60) {
        resultDiv.innerHTML += `<p>Buen esfuerzo, pero puedes mejorar. Revisa los conceptos.</p>`;
    } else {
        resultDiv.innerHTML += `<p>No alcanzaste el puntaje mínimo. Te recomendamos repasar el curso.</p>`;
    }
}

// Función para borrar todas las respuestas ingresadas
function clearForm() {
    const form = document.getElementById("quiz-form");
    form.reset(); // Reinicia todos los campos del formulario

    // Limpia el área de resultados
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
}


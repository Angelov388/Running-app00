let steps = 0;
const goal = 10000;

const frases = [
  "Continue avançando!",
  "Você está indo bem!",
  "Mais forte a cada passo!",
  "Foco na corrida!"
];

document.getElementById("frase").textContent =
  frases[Math.floor(Math.random() * frases.length)];

function addStep() {
  steps++;
  const percent = Math.min((steps / goal) * 100, 100);
  const calories = (steps * 0.04).toFixed(2);

  document.getElementById("steps").textContent = steps + " passos";
  document.getElementById("calories").textContent = calories + " kcal";
  document.getElementById("bar").style.width = percent + "%";
}

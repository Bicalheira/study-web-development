function getInteiroAleatoriamenteEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let option = 0;

do {
    option = getInteiroAleatoriamenteEntre(-1, 10);
    console.log(`Opção escolhida foi: ${option}`);
} while (option != -1);

console.log("Terminou");
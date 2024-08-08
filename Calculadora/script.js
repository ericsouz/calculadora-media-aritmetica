function calculateAverage() {
    const input = document.getElementById('numbers').value;
    const numbersArray = input.split('+').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbersArray.length === 0) {
        document.getElementById('result').innerText = 'Por favor, insira números válidos.';
        return;
    }

    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    const average = sum / numbersArray.length;

    document.getElementById('result').innerText = `A média é: ${average.toFixed(2)}`;
}

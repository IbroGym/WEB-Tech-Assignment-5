function calculateDistance() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const numbers = [num1, num2, num3];
    const target = 100;

    let nearest = numbers[0];
    let farthest = numbers[0];

    numbers.forEach(num => {
        if (Math.abs(num - target) < Math.abs(nearest - target)) {
            nearest = num;
        }
        if (Math.abs(num - target) > Math.abs(farthest - target)) {
            farthest = num;
        }
    });

    document.getElementById('result').textContent = `Nearest to 100: ${nearest}, Farthest from 100: ${farthest}`;
}

function calculateConeVolume() {
    const radius = parseFloat(document.getElementById('radius').value);
    const height = parseFloat(document.getElementById('height').value);
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    document.getElementById('volume').textContent = volume.toFixed(4);
}

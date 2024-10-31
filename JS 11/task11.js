function calculateSphereVolume() {
    const radius = parseFloat(document.getElementById('radius').value);
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').textContent = volume.toFixed(4);
}

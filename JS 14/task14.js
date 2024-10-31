function calculatePrismVolume() {
    const baseArea = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const volume = baseArea * height;
    document.getElementById('volume').textContent = volume.toFixed(4);
}

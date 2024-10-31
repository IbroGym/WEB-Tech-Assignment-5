function calculateTriangleArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const area = 0.5 * base * height;
    document.getElementById('area').textContent = area.toFixed(4);
}

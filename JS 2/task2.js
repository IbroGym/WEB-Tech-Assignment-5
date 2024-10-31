function sortWords() {
    const sentence = document.getElementById('sentence').value;
    const words = sentence.split(' ').map(word => word.split('').sort().join('')).sort();
    document.getElementById('sortedWords').textContent = `Sorted Words: ${words.join(' ')}`;
}

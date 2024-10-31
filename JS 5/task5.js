function findLongestShortest() {
    const words = [
        document.getElementById('word1').value,
        document.getElementById('word2').value,
        document.getElementById('word3').value
    ];
    const longest = words.reduce((a, b) => a.length > b.length ? a : b);
    const shortest = words.reduce((a, b) => a.length < b.length ? a : b);

    document.getElementById('result').textContent = `Longest word: ${longest}, Shortest word: ${shortest}`;
}

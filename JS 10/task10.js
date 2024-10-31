function highlightSpecificWords() {
    const paragraph = document.getElementById('paragraph');
    const words = paragraph.innerText.split(' ');
    const highlighted = words.map(word => {
        if (word.toLowerCase().startsWith('a')) {
            return `<span class="italic">${word}</span>`;
        } else if (word.toLowerCase().endsWith('y')) {
            return `<span class="underline">${word}</span>`;
        }
        return word;
    });
    paragraph.innerHTML = highlighted.join(' ');
}

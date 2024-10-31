function highlightWords() {
    const paragraph = document.getElementById('paragraph');
    const words = paragraph.innerText.split(' ');
    const highlighted = words.map(word => {
        if (word.length > 7) {
            return `<span class="blue-background">${word}</span>`;
        } else if (word.length < 3) {
            return `<span class="bold-text">${word}</span>`;
        }
        return word;
    });
    paragraph.innerHTML = highlighted.join(' ');
}

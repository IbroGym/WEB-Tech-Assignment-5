function splitSentences() {
    const paragraph = document.getElementById('paragraph');
    const sentences = paragraph.innerText.split(/(?<=[.!?])\s+/);
    paragraph.innerHTML = sentences.join('<br>');
}

function countWords() {
    const paragraph = document.getElementById('paragraph').innerText;
    const wordCount = paragraph.split(' ').filter(word => word.trim() !== '').length;
    alert(`Word Count: ${wordCount}`);
}

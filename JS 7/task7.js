function replaceMarks() {
    const textElement = document.getElementById('text');
    let text = textElement.innerText;
    text = text.replace(/\?/g, '*').replace(/!/g, '@');
    textElement.innerText = text;
}

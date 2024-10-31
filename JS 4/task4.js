function replaceChars() {
    const str = document.getElementById('replaceString').value;
    const replacedStr = str.replace(/[a-zA-Z]/g, (char) =>
        String.fromCharCode(char.charCodeAt(0) + 1)
    );
    alert(`Replaced String: ${replacedStr}`);
}

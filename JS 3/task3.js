function findFirstUniqueChar() {
    const str = document.getElementById('inputString').value;
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            document.getElementById('uniqueChar').textContent = `First non-repeating character: ${str[i]}`;
            return;
        }
    }
    document.getElementById('uniqueChar').textContent = 'No unique characters found';
}

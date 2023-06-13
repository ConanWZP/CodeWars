function shortcut (string) {
    let regex = /a|e|i|o|u/g
    return string.replace(regex, '');
}
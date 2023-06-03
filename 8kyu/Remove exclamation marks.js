function removeExclamationMarks(s) {
    let regex = /!/g
    return s.replace(regex, '');
}
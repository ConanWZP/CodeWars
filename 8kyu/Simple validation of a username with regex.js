function validateUsr(username) {
    res =  /^[0-9a-z_]{4,16}$/ //regex here/.test(username)
    return res.test(username)
}

/*
Write a simple regex to validate a username. Allowed characters are:

    lowercase letters,
    numbers,
    underscore
Length should be between 4 and 16 characters (both included).*/

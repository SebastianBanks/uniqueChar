function hasUniqueChars(word) {
    let temp = String(word)
    let compare = []

    for (letter in temp) {
        if (compare.includes(temp[letter]) === false) {
            compare.push(temp[letter])
        } else {
            return false
        }
    }

    return true
}

console.log(hasUniqueChars("Bob"))
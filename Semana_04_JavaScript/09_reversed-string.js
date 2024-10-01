function reverse(str) {
    let stringInvertida = "";

    for(let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]
    }

    return stringInvertida;
}

console.log(reverse("Hello"))
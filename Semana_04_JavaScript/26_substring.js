let frase = "Hello, World!"

const verificaSubstring = (frase, substring) => {
    return console.log(frase.toLowerCase().includes(substring.toLowerCase()))
}

verificaSubstring(frase, "planeta")
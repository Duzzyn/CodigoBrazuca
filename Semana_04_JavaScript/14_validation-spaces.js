function removeWhiteSpaces(str) {
    let strModify = str.replace(/\s/g, "");
    return strModify;
}

console.log(removeWhiteSpaces("Isso é uma string"))
let num = [1, 4, 5, 3, 12]
let guardaSoma = 0;

num.forEach((item) => {
    guardaSoma += item
})

let media = guardaSoma / num.length;

console.log(`A media é ${media}`)
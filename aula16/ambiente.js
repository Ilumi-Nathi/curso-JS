function parimpar(n) {
    if (n%2 == 0) {
        return "Par!"
    } else {
        return "Ímpar!"
    }
}

let res = parimpar(4)
console.log(res)

//Dá pra fazer também console.log(parimpar(4))
//O último console.log ali funciona como chamada. O "4" funciona como parâmetro. 
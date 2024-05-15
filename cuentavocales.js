let frase = prompt("Ingrese una palabra").toLowerCase()
let vocales =["a","e","i","o","u"]

let cont = 0
for (let i = 0; i <= (frase.length)-1;i++){
    let vocal = frase[i]
    if(vocales.includes(vocal)){
       cont++ 
    }
}

alert("El total de vocales que hay es:" + cont)
var custoHora = document.querySelector("#valor-hora")
console.log(custoHora)

var horasProjeto = document.querySelector("#horas-projeto")
console.log(horasProjeto)

var resultado = document.querySelector("#resposta")
console.log(resposta)

function calcular() {

    var valorHora = custoHora.value
    console.log(valorHora)

    var tempoProjeto = horasProjeto.value
    console.log(tempoProjeto)

    var valorProjeto = valorHora * tempoProjeto
    console.log(valorProjeto)
    console.log(resultado.textContent)

    resultado.textContent = "R$" + valorProjeto.toFixed(2)
  
}
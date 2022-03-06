//javascript
//funções 
//linkar o javascript no html
//salvar os números
//fazer a operação
//receber um dado
//calcular um dado
//retornar um resultado
//imprimir um resultado
//declarar a variável
//validar entradas
//pensar só em números positivos
//para o usuário inserir os dados, usaremos o prompt
//função para calcular
//calcular o valor ganho por hora

var salarioMesEntrada = document.querySelector("#ganho-mes")
console.log(salarioMesEntrada)

var horasDiasEntrada = document.querySelector("#horas-dia")
console.log(horasDiasEntrada)

var resultado = document.querySelector("#resposta")
console.log(resultado)

function calcularValorHora() {
    console.log("testando")
    console.log("função está funcionando")

    var salarioMes = salarioMesEntrada.value
    console.log("salario por mes: ", salarioMes)

    var valorHoraDia = horasDiasEntrada.value
    console.log(valorHoraDia)

    var diasTrabalhados = 22

    var horasTotaisTrabalhadas = diasTrabalhados * valorHoraDia
    console.log(horasTotaisTrabalhadas)

    var valorHora = salarioMes / horasTotaisTrabalhadas 
    console.log(valorHora)
    console.log(resultado.textContent)

    resultado.textContent = "R$" + valorHora.toFixed(2)
}
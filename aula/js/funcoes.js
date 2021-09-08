function principal(){

    let opcao
    let idade = 10
    let peso, altura
    do {
    opcao = Number(prompt(`Digite \n1. F1 \n2. F2 \n3. F3 \n4. Sair`))
    switch(opcao){
    case 1: 
        idade = Number(prompt('Informe sua idade')) 
        idade = f1(idade)
        break
    case 2: 
        peso = Number(prompt('Informe seu peso'))
        f2(idade, peso)

        break
    case 3: 
        idade = Number(prompt('Informe sua idade'))
        peso = Number(prompt('Informe seu peso')) 
        altura = Number(prompt('Informe sua altura'))
        f3(idade, peso, altura)
        
        break
    case 4: 
        alert(`Programa será encerrado`)
        
        break
    default: alert(`Opção inválida`)
    }
    }
    while (opcao !=4)   
}

function f1(idade){
    //let idade = 10 -> variável vai existir apenas dentro do escopo f1()
    alert(`${idade} anos`)
    idade = idade + 10
    return idade
}
function f2(idade, peso){
    alert(`${idade} anos \n${peso} Kg`)
}
function f3(idade, peso, altura){
    alert(`${idade} anos \n${peso} KGs \n${altura} metros`)
}
function sistemaImob(){
    let opcao
    let Imoveis = []
    do {
        opcao = Number(prompt(`Informe \n1. Cadastra \n2. Consulta A \n3. Consulta B \n4. Consulta C \n5. Sair `))
        switch(opcao){
            case 1: cadastra(Imoveis)
                break
            case 2: let tipo = prompt(`Informe o tipo do imóvel: \n1. Casa \n2. Apartamento`).toUpperCase()
                consultaImoveis(Imoveis, tipo)
                break
            case 3: consultaValor(Imoveis)
                break
            case 4: consultaTamanho(Imoveis)
                break
            case 5: alert(`O programa será encerrado`)
                break
            default: alert(`Opção Inválida`)
        }
    }
    while (opcao != 5)

    function cadastra(Imoveis){
        let objeto = {
            tipo: Number(prompt(`Informe o tipo do imóvel: \n1. Casa \n2. Apartamento`)),
            codigo: Number(prompt(`Informe o número do imóvel`)),
            tamanho: Number(prompt(`Informe o tamanho do imóvel`)),
            valor: Number(prompt(`Informe o valor do imóvel`))
        }
        let achou = false
        for (let i=0;i<Imoveis;i++){
            if (Imoveis[i].codigo == objeto.codigo){
                achou = true
                alert(`Código já existente`)
            }
        }
        if (!achou){
            Imoveis.push(objeto)
            alert(`Imóvel cadastrado com sucesso`)
        }
    }
    function consultaImoveis(Imoveis, tipo){
        for(let i=0;i<Imoveis.length;i++){
            if (Imoveis[i].tipo == tipo){
                console.log(Imoveis[i])
            }
        }
    }
    function consultaValor(Imoveis){
        let soma = 0
        for(let i=0;i<Imoveis.length;i++){
            soma = soma + Imoveis[i].valor
        }
        alert(`O valor total dos imóveis é ${soma}`)
    }
    function consultaTamanho(Imoveis){
        
        for(let i=0;i<Imoveis;i++){
            if(Imoveis[i].tamanho > 100){
                console.log(Imoveis[i])
            }
        }
    }
}
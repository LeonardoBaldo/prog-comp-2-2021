let gerenciaRedesSociais = () => {
    let vetorRedesSociais = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: Number(prompt(`Informe o código da rede social`)),
            nome: prompt(`Informe o nome da rede social`),
            url: prompt(`Informe a URL da rede social`)
        }
        vetorRedesSociais.push(objeto)
    }
    let vetorUsuarios = []
    for(let i=0;i<5;i++){
        let objeto = {
            login: prompt(`Informe o login do usuário`),
            nome: prompt(`Informe o nome do usuário`),
            codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
            qtdPosts: Number(prompt(`Informe a qtd de posts`))
        }
        let achou = false
        let j = 0
        while(!achou && j<5){
            if(vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){
                vetorUsuarios.push(objeto)
                achou = true
                alert(`Usuário inserido com sucesso`)
            }
            j++
        }
        if(!achou){
            alert(`Rede social não encontrada, falha no login`)
        }

    }
}
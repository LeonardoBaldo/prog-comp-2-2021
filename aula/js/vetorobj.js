let gerenciaRedesSociais = () => {
    // cadastro das redes sociais
    let vetorRedesSociais = []
    for(let i=0;i<5;i++){
        let objeto = {
            codigo: Number(prompt(`Informe código da rede social`)),
            nome: prompt(`Informe nome da rede social`),
            url: prompt(`Informe url da rede social`)
        }
        // inserir objeto no vetor
        vetorRedesSociais.push(objeto)
    }
    // cadastro dos usuários
    let vetorUsuarios = []
    let i = 0
    while (i<5){
        let objeto = {
            login: prompt(`Informe o login do usuário`),
            nome: prompt(`Informe o nome do usuário`),
            codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
            qtdePosts: Number(prompt(`Informe a qtde de Posts`))
        }
        // só faremos isso se a rede social existir
        let achou = false // assumo que não encontrei a rede social
        let j = 0 // índice do vetor de redes sociais
        while (!achou && j<5 ){ // sai ou porque achou ou porque acabou o vetor
            if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // achamos
                vetorUsuarios.push(objeto)// inserimos
                achou = true
                alert(`Usuário inserido com sucesso`)
            }
            j++ // prepara para ir ao próximo elemento
        }
        if (!achou){ // acabou o vetor
            alert(`Usuário não inserido, pois a Rede social não foi encontrada`)
        }
        i++
    }

  // cadastro dos usuários
  let vetorUsuarios = []
  let i = 0
  while (i<5){
      let objeto = {
          login: prompt(`Informe o login do usuário`),
          nome: prompt(`Informe o nome do usuário`),
          codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
          qtdePosts: Number(prompt(`Informe a qtde de Posts`))
      }
      // só faremos isso se a rede social existir
      let achou = false // assumo que não encontrei a rede social
       // índice do vetor de redes sociais
      for(let j = 0; j < 5; j++ ){ // sai ou porque achou ou porque acabou o vetor
          if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){ // achamos
              vetorUsuarios.push(objeto)// inserimos
              achou = true
              alert(`Usuário inserido com sucesso`)
              break // sai do for
          }
      }
      if (!achou){ // acabou o vetor
          alert(`Usuário não inserido, pois a Rede social não foi encontrada`)
      }
      i++
  }
  // Exe1) o usuário informa informa a rede social, e o programa retorna quantos posts foram feitos
  let codigo = Number(prompt(`Informe o código da rede social`))
  // percorre vetor procurando
  let conta = 0 
  for(let i=0;i<5;i++){
      if(vetorUsuarios[i].codigoRedeSocial == codigo){
          conta = conta + vetorUsuarios[i].qtdePosts
      }
  }
  if(conta==0){
      console.log(`Não houve postagens ou não existe rede social`)
  }
  else{
      console.log(`A quantidade de posts na rede social ${codigo} foi ${conta}`)
  }

  // Exe2) o programa retorna quantos posts foram feitos em todas as redes sociais
  for (let i=0;i<5;i++){ //para cada rede social
    let conta = 0
    for(let j=0;j<5;j++){ //procura nos usuários
        if(vetorRedesSociais[i].codigo == vetorUsuarios[j].codigoRedeSocial){
            conta = conta + vetorUsuarios[i].qtdePosts
        }
    }
    //terminou de somar os posts de uma rede social
    console.log(`A quantidade de posts da rede social ${vetorRedesSociais[i].codigo} é ${conta}`)
  }
  // Exe3) o usuário informa informa o login do usuário, e o programa retorna quantos posts ele fez
  let login = prompt(`Informe o login de usuário desejado`)
  let somaPosts = 0 
  let achou = false
  for (leti=0;i<5;i++){
      if (login == vetorUsuarios[i].login){
          somaPosts = somaPosts + vetorUsuarios[i].qtdePosts
          achou = true
      }
  }
  if(achou){
      alert(`O usuário com login ${login} realizou ${somaPosts}`)
  }
  else{
      alert(`Uusário não encontrado`)
  }
  // Exe4) o programa retorna quantos posts foram feitos por cada usuário
  let vetorUsuariosPosts = []
  for(let i=0;i<5;i++){
      let achou = false
      for(let j=o;j<vetorUsuariosPosts.length;j++){
          if(vetorUsuarios[i].login == vetorUsuariosPosts[j].login){
              vetorUsuariosPosts[j].qtde = vetorUsuariosPosts[j].qtde + vetorUsuarios[i].qtdePosts
              achou = true
          }
      }
      if(!achou){
          vetorUsuariosPosts.push({
              login: vetorUsuarios[i].login,
              qtde: vetorUsuarios[i].qtdePosts
          })
      }
  }
  console.log(vetorUsuariosPosts)

}
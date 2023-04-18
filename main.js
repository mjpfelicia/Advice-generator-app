const pegarMensagem = async (idMensagem = 1) => {
    return fetch('http://localhost:3000/frases')
        .then(response => response.json())
        .then(json => console.log(json))
}


(async () => {
    const mensagem = await pegarMensagem(1)
    console.log({ mensagem })
})

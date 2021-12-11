$.ajax({
    url: 'https://api.nasa.gov/planetary/apod?api_key=d16lo99ncLQSHbsoRLNPgLS6ShSbvTnsjfVkNafV',
    success: function(resposta){
        console.log(resposta.resultado[0])
    },
    erro:function(erro){
        console.log(erro)
    }
})



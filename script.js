$('button').click( function(){

    let data = $('#calendario').val();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=d16lo99ncLQSHbsoRLNPgLS6ShSbvTnsjfVkNafV&date=${data}`,
        type:'GET',

        success: function(resposta){
            $("#tFoto").text(resposta.title);
            $("#fotoApi").attr('src', resposta.url);
            $("#dataFoto").text(resposta.date);
            $("#credAutor").text(resposta.copyright);
            $("#textoExplicado").text(resposta.explanation)
        },
     
    })
   
})




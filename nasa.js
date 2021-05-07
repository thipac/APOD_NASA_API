

$('#date').on('change', function(){
    
    let date = $('#date').val()
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;

    $.ajax({

        'url': url,
        'success':function(result){

            $("div").removeClass('invi')

            $('#title').html(`${result.title}`)

            $('#texto').html(`${result.explanation}`)

            if(result.media_type === "image"){

            $('#conteudo__nasa').html(`
            
            <img class = "imagem" src = "${result.url}">
            
            `)

            }

            else if (result.media_type === "video"){

                $('#conteudo__nasa').html(`
            
                <iframe class = "imagem" src = "${result.url}">
            
                `)
            }
            
        },
    })

})

const dataAtual =  moment().format(`YYYY-MM-DD`);
     $('#date').val(dataAtual)





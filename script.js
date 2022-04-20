fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1', {
    method: 'GET'
})
.then(Response => Response.json())
.then(function(json){
    var container = document.querySelector('.container');
    //console.log(json)

    json.results.map(function(val){
        //container.innerHTML+=val.original_title;
        //Este val.original_title está na documentação da API lá está tudo descrito como recuperar imagem descrição e etc...
        container.innerHTML+=`

            <div style="cursor:pointer;" class="tituloFilme">`+val.title+`
            <div style="display:none;" class="description">`+val.overview+`</div>
            <hr>
            
        </div>`;
    })
    //Acima temos um mapa(map) dentro dos resultados

    var titulos = document.querySelectorAll('.tituloFilme');
    //A variável titulos armazena tudo que está dentro da classe tituloFilme

    for(var i = 0; i < titulos.length; i++){
        /*Aqui embaixo estou adicionando um evento de click para cada filme na minha lista*/
        titulos[i].addEventListener('click', function(t){

            if(t.target.querySelector('.description').style.display == "none"){
                t.target.querySelector('.description').style.display = "block";
            }else{
                t.target.querySelector('.description').style.display = "none";
            }
    /*Aqui eu rodei um looping, coloquei um evento de click paa cada um, toda vez que clico consigo
    rastrear através t pegando o target(que é o elemento que eu cliquei), através do querySelectior
    capturo meu filho description, e se estiver oculto coloco para mostrar, caso contrário esconde novamente*/            
        })
    }
})
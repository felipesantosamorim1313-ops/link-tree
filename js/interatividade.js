$(function(){

    //ENTRADA

//descartavel//

    var botoes = $(".botao");
    var titulo = $("h1");
    var subtitulo = $("#subtitulo");
    var icones = $("svg");
    var fundo = $("body");
    var botao_modoEscuro = $("#modoEscuro");
    var modoEscuro = false

    // PROCESSAMENTO

    botao_modoEscuro.click(()=>{


    if( modoEscuro == false){

        botoes.css("background-color", "black");
        botoes.css("color", "white");

        modoEscuro = true

        fundo.css("background-image","url('https://i.pinimg.com/736x/43/84/10/438410cdc0128036c97e3b141f7599d2.jpg')")

        titulo.css ("color", "rgb(20, 219, 70)");
        subtitulo.css ("color", "rgb(128, 238, 84)");
        icones.css ("fill", "rgb(20, 236, 74)");
           
 
        modoEscuro = true;
 
 
    }else{
 
        botoes.css ("background-color", "rgb(235, 7, 45)");
        botoes.css ("color", "black");
 
 
       fundo.css ("background-image", "url('https://i.pinimg.com/736x/ca/f4/44/caf44400c1eae35f0caadadc652a10cc.jpg')");
 
        titulo.css ("color", "white");
        subtitulo.css ("color", "white");
        icones.css ("fill", "red");

        modoEscuro = false

    }
      
    });
        
    // SAIDA

});

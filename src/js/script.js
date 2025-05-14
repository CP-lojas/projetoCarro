let imagens =[
    'src/assets/imagem.home1.avif',
    'src/assets/imagem.home2.avif',
    'src/assets/imagem.home3.avif',
    ]
    
    let i = 0;
    let tempo = 5000;
    
 
    
    function slideShow(){
        document.getElementById('image').src = imagens[i];
        i++;
        if(i == imagens.length){
            i=0;
        }
        setTimeout("slideShow()",tempo)
    }
    slideShow();
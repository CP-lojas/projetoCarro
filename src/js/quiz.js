window.addEventListener('DOMContentLoaded', () => {
    const welcome = document.getElementById('welcome-message');
    const main = document.getElementById('main-content');
  });


  document.addEventListener('DOMContentLoaded',()=>{
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')

    //DECLARANDO O ARRAY DE PERGUNTAS
    const questoes=[
        "O que move um carro elétrico? ",
        "Qual componente é responsável por armazenar energia em um carro elétrico?",
        "Como os carros elétricos são recarregados?",
        "Qual é o principal tipo de motor usado em carros elétricos?",
        "Carros elétricos emitem CO₂ pelo escapamento?",
        "O que é um carro híbrido?",
        "Quanto tempo leva, em média, para carregar totalmente um carro elétrico em uma tomada comum?",
        "Qual é a principal vantagem dos carros elétricos em relação aos carros a combustão?",
        "Os carros elétricos são mais silenciosos do que os carros a combustão?",
        "Os carros elétricos têm a mesma autonomia que os carros a combustão?",
    ]
    //DECLARANDOS AS VARIAVEIS
    let perguntas = 0;
    const respostas = [];

    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent =questoes[perguntas];
            resposta.value='';
            mensagem.textContent ='';
        }else{
            mostrarResultado();
        }
    }

    function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';

        questoes.forEach((questoes,index)=>{
            const listaItem =document.createElement('li');
            listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua Resposta: <span>${respostas[index]}</span>`
            listaResultado.appendChild(listaItem);
        })
    }

    function nextQuestao(){
        const respostaAtual =resposta.value.trim();
        if(respostaAtual ===''){
            mensagem.textContent ="Por favor , digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();

    }
    function reiniciarQuiz(){
        perguntas =0;
        respostas.length =0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden')
        mostrarPergunta();
    }

    proximaPergunta.addEventListener('click',nextQuestao);
    reiniciarBotao.addEventListener('click',reiniciarQuiz);

    mostrarPergunta();

})


function mostrarGabarito(){
    const gabaritoDiv = document.getElementById("gabarito");
    gabaritoDiv.style.display = "block";

}
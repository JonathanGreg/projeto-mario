/* 
OBJETIVO: Quando clicamos no botao temos que mostrar a imagen seguiente de fundo 
 Passo 1 Dar um jeito de pegar o Elemento HTML dos botoes 
 Passo 2 Dar um jeito de identificar o clique do usuario no botao
 Passo 3 Desmarcar o botao seleccionado anterior 
 Passo 4 Maracar o botao clicando como se estivesse selecionado 
 Passo 5 esconder a imagem anterior 
 passo 6 Fazer aparecer a imagem correrpondiente ao botao clicado 
 */
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

  botoesCarrossel.forEach((botao,indice) => {
  botao.addEventListener('click',() => {
        const botaoSelecionado =  document.querySelector('.selecionado');
              botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');
        const imagemAtiva = document.querySelector('.ativa');
              imagemAtiva.classList.remove('ativa');

              imagens[indice].classList.add('ativa');


                       


   })
})  


    



    


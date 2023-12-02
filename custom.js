/* Todo esse codigo JS esta sendo feito utilizando os seletores da pagina index.html*/
/* Seletores que estão sendo utilizados: menu-btn, menu-site*/


document.querySelector('#menu-btn').addEventListener('click', function(){

document.querySelector('#menu-site').classList.toggle("active"); 
/* Toggle: se a classe existe ele vai remover, se não existir vai atribuir*/
/* active está no arquivo: custom.css na linha 110*/

document.querySelector('#menu-icon').classList.toggle("active"); /* esse seletor se encontra na linha 71 o custom.css e na linha 28 da index.html*/

});
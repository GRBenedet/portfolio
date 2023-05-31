function showProjetos() {
    let projeto = document.querySelector('.projeto')
    if (projeto.classList.contains('open')) {
        projeto.classList.remove('open');
    }   else {
        projeto.classList.add('open')
    }
    let projeto2 = document.querySelector('.projeto2')
    if (projeto2.classList.contains('open')) {
        projeto2.classList.remove('open');
    }   else {
        projeto2.classList.add('open')
    }
    let projeto3 = document.querySelector('.projeto3')
    if (projeto3.classList.contains('open')) {
        projeto3.classList.remove('open');
    }   else {
        projeto3.classList.add('open')
    }
    let projeto4 = document.querySelector('.projeto4')
    if (projeto4.classList.contains('open')) {
        projeto4.classList.remove('open');
    }   else {
        projeto4.classList.add('open')
    }
    let projeto5 = document.querySelector('.projeto5')
    if (projeto5.classList.contains('open')) {
        projeto5.classList.remove('open');
    }   else {
        projeto5.classList.add('open')
    }
    let protefolio = document.querySelector('.portifolio')
    if (protefolio.classList.contains('show')) {
        protefolio.classList.remove('show');
    }   else {
        protefolio.classList.add('show')

    }
}


let cabeca = document.querySelector('.cabeca')
if (cabeca.classList.contains('cabecamobile')) {
    cabeca.classList.remove('cabecamobile')
} else {
    cabeca.classList.add('cabecamobile');
}
function mudaImagem1() {
    var img = document.querySelector('img#imagem')
    img.src = 'imagens/lanche01-600.jpg'
}

function mudaImagem2() {
    var img = document.querySelector('img#imagem')
    img.src = 'imagens/hotdog-600.jpg'
}

function mudaImagem3() {
    var img = document.querySelector('img#imagem')
    img.src = 'imagens/pizza01-600.jpg'
}

function mudaImagem4() {
    var img = document.querySelector('img#imagem')
    img.src = 'imagens/porcoes-600.jpg'
}

function mudaImagem5() {
    var img = document.querySelector('img#imagem')
    img.src = 'imagens/sobremesa-600.jpg'
}

function apareceProd() {
    document.querySelector('section.veja').style.display = "none"
    document.querySelector('aside.produto').style.display = "flex"
}

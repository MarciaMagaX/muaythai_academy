let golpes = [

    {
        nome: 'Low Kick',
        imagemGolpe: 'imagens/lowkick.png',
        defesa: 'Check',
        imagemDefesa: 'imagens/check.png'
    },

    {
        nome: 'Jab',
        imagemGolpe: 'imagens/jab.png',
        defesa: 'Bloqueio Alto',
        imagemDefesa: 'imagens/bloqueioalto.png'
    },

    {
        nome: 'Direto',
        imagemGolpe: 'imagens/direto.png',
        defesa: 'Esquiva',
        imagemDefesa: 'imagens/esquiva.png'
    },

    {
        nome: 'Teep',
        imagemGolpe: 'imagens/teep.png',
        defesa: 'Desvio Lateral',
        imagemDefesa: 'imagens/desviolateral.png'
    }

]

let indiceGolpe

function mostrarDefesa() {

    document.getElementById('imgDefesa').src =
        golpes[indiceGolpe].imagemDefesa

    document.getElementById('imgDefesa').style.visibility =
        'visible'

    document.getElementById('txtDefesa').style.visibility =
        'visible'

}

function iniciar() {

    indiceGolpe = Math.floor(Math.random() * golpes.length)

    document.getElementById('txtGolpe').innerText =
        golpes[indiceGolpe].nome

    document.getElementById('imgGolpe').src =
        golpes[indiceGolpe].imagemGolpe

    document.getElementById('txtDefesa').style.visibility =
        'hidden'

    document.getElementById('imgDefesa').style.visibility =
        'hidden'

    document.getElementById('msgResultado').innerText = ''

    let opcoes = document.getElementsByName('defesa')

    opcoes[0].checked = false
    opcoes[1].checked = false
    opcoes[2].checked = false
    opcoes[3].checked = false

    document.getElementById('btnIniciar').style.display =
        'none'

    document.getElementById('btnResponder').style.display =
        'block'

}

function responder() {

    let opcoes = document.getElementsByName('defesa')

    let defesa

    if (opcoes[0].checked) {

        defesa = opcoes[0].value

    } else if (opcoes[1].checked) {

        defesa = opcoes[1].value

    } else if (opcoes[2].checked) {

        defesa = opcoes[2].value

    } else if (opcoes[3].checked) {

        defesa = opcoes[3].value

    }

    let golpe = document.getElementById('txtGolpe').innerText

    if (golpe === 'Low Kick' && defesa === 'Check') {

        document.getElementById('msgResultado').innerText =
            '✅ Você acertou!'

        mostrarDefesa()

    } else if (golpe === 'Jab' && defesa === 'Bloqueio Alto') {

        document.getElementById('msgResultado').innerText =
            '✅ Você acertou!'

        mostrarDefesa()

    } else if (golpe === 'Direto' && defesa === 'Esquiva') {

        document.getElementById('msgResultado').innerText =
            '✅ Você acertou!'

        mostrarDefesa()

    } else if (golpe === 'Teep' && defesa === 'Desvio Lateral') {

        document.getElementById('msgResultado').innerText =
            '✅ Você acertou!'

        mostrarDefesa()

    } else {

        document.getElementById('msgResultado').innerText =
            '❌ Errou! Tente novamente.'

    }

    document.getElementById('btnResponder').style.display =
        'none'

    document.getElementById('btnIniciar').style.display =
        'block'

    document.getElementById('btnIniciar').value =
        'Próximo golpe'

}
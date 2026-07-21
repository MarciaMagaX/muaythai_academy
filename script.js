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

    document.getElementById('defesaCorreta').style.display = 'block'

    document.getElementById('imgDefesa').src =
        golpes[indiceGolpe].imagemDefesa

}

function iniciar() {

    indiceGolpe = Math.floor(Math.random() * golpes.length)

    document.getElementById('txtGolpe').innerText =
        golpes[indiceGolpe].nome

    document.getElementById('imgGolpe').src =
        golpes[indiceGolpe].imagemGolpe

    document.getElementById('msgResultado').innerText = ''

    document.getElementById('defesaCorreta').style.display = 'none'

    document.getElementById('resultado').style.display = 'none'

    document.getElementById('defesas').style.display = 'block'

    document.getElementById('areaBotoes').style.display = 'block'

    document.getElementById('btnResponder').style.display = 'block'

    document.getElementById('btnTentarNovamente').style.display = 'none'

    document.getElementById('btnProximo').style.display = 'none'

    let opcoes = document.getElementsByName('defesa')

    opcoes[0].checked = false
    opcoes[1].checked = false
    opcoes[2].checked = false
    opcoes[3].checked = false

}

function repetirGolpe() {

    document.getElementById('msgResultado').innerText = ''

    document.getElementById('resultado').style.display = 'none'

    document.getElementById('defesas').style.display = 'block'

    document.getElementById('btnResponder').style.display = 'block'

    document.getElementById('btnTentarNovamente').style.display = 'none'

    let opcoes = document.getElementsByName('defesa')

    opcoes[0].checked = false
    opcoes[1].checked = false
    opcoes[2].checked = false
    opcoes[3].checked = false

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

    if (defesa == undefined) {

        document.getElementById('resultado').style.display = 'block'

        document.getElementById('msgResultado').innerText =
            '⚠️ Selecione uma defesa.'

        return

    }

    let golpe = document.getElementById('txtGolpe').innerText

    document.getElementById('resultado').style.display = 'block'

    document.getElementById('defesas').style.display = 'none'

    document.getElementById('btnResponder').style.display = 'none'

    if (golpe === 'Low Kick' && defesa === 'Check') {

        document.getElementById('msgResultado').innerText =
            '✅ Você acertou!'

        mostrarDefesa()

        document.getElementById('btnProximo').style.display =
            'block'

    } else if (golpe === 'Jab' && defesa === 'Bloqueio Alto') {

        document.getElementById('msgResultado').innerText =
            '✅ Você acertou!'

        mostrarDefesa()

        document.getElementById('btnProximo').style.display =
            'block'

    } else if (golpe === 'Direto' && defesa === 'Esquiva') {

        document.getElementById('msgResultado').innerText =
            '✅ Você acertou!'

        mostrarDefesa()

        document.getElementById('btnProximo').style.display =
            'block'

    } else if (golpe === 'Teep' && defesa === 'Desvio Lateral') {

        document.getElementById('msgResultado').innerText =
            '✅ Você acertou!'

        mostrarDefesa()

        document.getElementById('btnProximo').style.display =
            'block'

    } else {

        document.getElementById('msgResultado').innerText =
            '❌ Errou!'

        document.getElementById('btnTentarNovamente').style.display =
            'block'

    }

}
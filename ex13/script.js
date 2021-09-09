function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO!] Verifique os dados e tene novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <14) {
                //criança
                img.setAttribute('src' , 'homem-crianca.png')
                document.body.style.background = '#86b3b4'
            } else if (idade >= 14 && idade <26) {
                //jovem
                img.setAttribute('src' , 'homem-jovem.png')
                document.body.style.background = '#d4ae84'
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src' , 'homem-adulto.png')
                document.body.style.background = '#9f2d25'
            } else {
                //idoso
                img.setAttribute('src' , 'homem-idoso.png')
                document.body.style.background = '#069067'//dfd02d aaaaaa 5f5f5f
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
                if (idade >=0 && idade <14) {
                    //criança
                    img.setAttribute('src' , 'mulher-crianca.png')
                    document.body.style.background = '#a21586'
                } else if (idade >= 14 && idade <26) {
                    //jovem
                    img.setAttribute('src' , 'mulher-jovem.png')
                    document.body.style.background = '#f5a74d'    
                } else if (idade < 60) {
                    //adulto
                    img.setAttribute('src' , 'mulher-adulta.png')
                    document.body.style.background = '#e17388'
                } else {
                    //idoso
                    img.setAttribute('src' , 'mulher-idosa.png')
                    document.body.style.background = '#b4a342'
                }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        res.appendChild(img)
    }
}
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 4){
                //Bebe
                img.setAttribute('src', 'bebe.png' )
            } else if(idade <11) {
                //Criança
                img.setAttribute('src', 'menino.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'garoto.png')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 4){
                //Bebe
                img.setAttribute('src', 'bebe.png' )
            } else if ( idade <11){
                // Criança 
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'garota.png')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idosa
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
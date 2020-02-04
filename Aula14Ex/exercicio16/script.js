function calcular(){
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpas')
    let res = document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        alert('[ERROR] Insira os valores! ')
        res.innerHTML = 'Varifique os valores e tente novamente!'
    } else {
        res.innerHTML = `Calculando... \u{23F3} <br>` 

        let i = Number(txtini.value)
        let f = Number(txtfim.value)
        let p = Number(txtpas.value)

        if (p <= 0) {
            alert('Passo inválido! Considenrando passo 1.')
            p = 1
        }

        if ( i < f ){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` \u{1F449} ${c}  `
            }
        } else {
            // Contagem decrescente
            for( let c = i; c >= f; c -= p){
                res.innerHTML += ` \u{1F449} ${c}  `
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    }   
}
function gerar(){
   let num = document.getElementById('txtn')
   let tab = document.getElementById('seltab')

   if (num.value.lenght == 0) {
        alert('Por favor, insira um número!')
   } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while( c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
   }



   // Outra alternativa
   /*for ( let n = 1; n < 11 ; n++){
       document.write( n + " x " + c + "=" + (n*c)" <br>")
   }*/
   
}
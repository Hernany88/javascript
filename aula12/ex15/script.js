function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
  

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifica os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancamasculino.png')
            } else if (idade < 22){
                //Jovem
                img.setAttribute('src', 'jovemmasculino.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultomasculino.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosomasculino.png')
            }
        } else if (fsex[1].checked) {
           genero = 'Mulher'
            if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'criancafeminino.png')
            } else if (idade < 22){
                //Jovem
                img.setAttribute('src', 'jovemfeminino.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultofeminino.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosofeminino.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }

}
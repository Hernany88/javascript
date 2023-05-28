function tabuada(){
    var inum = document.getElementById('inum')
    var area = document.getElementById('itxt')
    var t = Number(inum.value)
    

    for (var c = 1; c <= 10; c++){
         var soma = t*c
         area.innerHTML += `${t}X${c} = ${soma}\n`
        
         
    }
    
}
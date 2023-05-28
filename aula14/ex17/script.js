function tabuada(){
    var inum = document.getElementById('inum')
    var area = document.getElementById('itxt')
    if(inum.value.length == 0){
        window.alert('Digite um número')
    } else {
        var t = Number(inum.value)
        let c = 1
        area.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${t} X ${c} = ${t*c}`
            item.value = `tab${c}`
            area.appendChild(item)
            c++
        }
    }
   
    
}
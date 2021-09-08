let num = document.querySelector('input#numero')
let lista = document.querySelector('select#selvalor')
let res = document.querySelector('select#resu')
let valores = []

function isnumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function imlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isnumero(num.value) && !imlista(num.value, valores)) {
    valores.push(Number(num.value))
    let item =document.createElement('Option')
    item.text = `valor ${num.value} adicionado`
    lista.appendChild(item)
    resu.innerHTML = ''
} else {
    alert('valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('adicione valores!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0 
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        resu.innerHTML = ''
        resu.innerHTML += `<p>ao total temos ${total} numeros adicionado</p>`
        resu.innerHTML += `<p>o maior valor adicionado foi ${maior} </p>`
        resu.innerHTML += `<p>o menor valor adicionado foi ${menor} </p>`
        resu.innerHTML += `<p>soma de todos os valores ${soma}</p>`
        resu.innerHTML += `<p>media de todos os valores ${media}</p>`   
    }

    function limpar() {
        resu.innerHTML = ''
    }
} 
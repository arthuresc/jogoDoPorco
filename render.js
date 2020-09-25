/* const playerList = {
    list: document.querySelector('#playerList'),
    card: function() {
        let elem = document.createElement('div')
        elem.classList.add('card', 'bg-white', 'text-dark', 'text-center', 'align-items-center', 'justify-content-center','p-2')
        return elem
    },
    namePlayer: function (num) {
        let elem = document.createElement('p')
        let txt =  document.createTextNode(`Jogador ${num}`)
        elem.classList.add('h5', 'mt-1')
        elem.appendChild(txt)
        return elem
    },
    pointsPlayer: function (num) {
        let elem = document.createElement('p')
        let txt =  document.createTextNode(`P: ${num}`)
        elem.appendChild(txt)
        return elem
    },
    turnPlayer: function (value) {
        let elem = document.createElement('p')
        elem.classList.add('card-text', 'mb-2', 'text-uppercase', 'rounded', 'text-white', 'py-1', 'px-2', 'h6')
        elem.setAttribute('style', 'font-size: smaller;')
        if(value){
            elem.classList.add('bg-success')
            let txt =  document.createTextNode('Sua vez')
            elem.appendChild(txt)    
            return elem
        }else{
            elem.classList.add('bg-danger')
            let txt =  document.createTextNode('Aguarde')
            elem.appendChild(txt)    
            return elem
        }
    },
    render: function (n, p, t) {
        let list = this.list
        let card = this.card()
        let name = this.namePlayer(n)
        let points = this.pointsPlayer(p)
        let turn = this.turnPlayer(t)
        card.appendChild(name)
        card.appendChild(points)
        card.appendChild(turn)
        return list.appendChild(card)
    }
} */

class PlayerList {
    constructor(n, p, t){
        this.list = document.querySelector('#playerList');
        this.card = this.cardEl()
        this.namePlayer = this.namePlayerEl(n)
        this.pointsPlayer = this.pointsPlayerEl(p)
        this.turnPlayer = this.turnPlayerEl(t)
    }
    cardEl() {
        let elem = document.createElement('div')
        elem.classList.add('card', 'bg-white', 'text-dark', 'text-center', 'align-items-center', 'justify-content-center','p-2')
        return elem
    }
    namePlayerEl (num) {
        let elem = document.createElement('p')
        let txt =  document.createTextNode(`Jogador ${num}`)
        elem.classList.add('h5', 'mt-1')
        elem.appendChild(txt)
        return elem
    }
    pointsPlayerEl (num) {
        let elem = document.createElement('p')
        let txt =  document.createTextNode(`P: ${num}`)
        elem.appendChild(txt)
        return elem
    }
    turnPlayerEl (value) {
        let elem = document.createElement('p')
        elem.classList.add('card-text', 'mb-2', 'text-uppercase', 'rounded', 'text-white', 'py-1', 'px-2', 'h6')
        elem.setAttribute('style', 'font-size: smaller;')
        if(value){
            elem.classList.add('bg-success')
            let txt =  document.createTextNode('Sua vez')
            elem.appendChild(txt)    
            return elem
        }else{
            elem.classList.add('bg-danger')
            let txt =  document.createTextNode('Aguarde')
            elem.appendChild(txt)    
            return elem
        }
    }
    render1 (n, p, t) {
        let list = this.list
        let card = this.card()
        let name = this.namePlayer(n)
        let points = this.pointsPlayer(p)
        let turn = this.turnPlayer(t)
        card.appendChild(name)
        card.appendChild(points)
        card.appendChild(turn)
        return list.appendChild(card)
    }
}

var test = document.querySelector('#rodar-dados');
function brincou () {
    return test.addEventListener('click', console.log('passou'))
}

brincou()

console.log(Casa.jogadores)
// for (let i = 1; i < 5; i++){
//     playerList.render(i, 50, true);
// }

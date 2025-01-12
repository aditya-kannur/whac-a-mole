const square = document.querySelectorAll('.sqaure')
const timeLeft = document.getElementById('time-left')
let score = document.getElementById('score')

let timer = 60
let id
let result = 0


const randomize = () => {
    square.forEach(mole => {
        mole.classList.remove('mole')
    })
    let randomSquare = square[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    id = randomSquare.id

    square.forEach(square => {
        square.addEventListener("mousedown", () => {
            if (square.id == id){
                result ++ 
                score.innerHTML = result
                square.classList.remove('mole')
                id = null
            }
        })
    })
}

let timerId = null
const movemole = () => {
    timerId = setInterval(randomize, 1000)
}
movemole()

function countdown(){
    timer -- 
    timeLeft.innerHTML = timer
    if(timer == 0){
        clearInterval(timercountdown)
        alert("time is up")
        window.location.reload()
    }

}

const timercountdown = setInterval(countdown, 1000)





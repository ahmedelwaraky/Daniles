let counter = document.getElementById('count')
let inc = counter.innerText
let rand = parseInt(Math.random()*100)

let y = setInterval(() => {
    inc++
    counter.innerText =inc
    if(inc == rand){
        clearInterval(y)
    }
}, 10);


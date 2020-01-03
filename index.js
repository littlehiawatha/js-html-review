let count = 0;
let countNum = document.getElementById('count');

countNum.innerText = count;

function incrementCount(){
    count++
    countNum.innerText = count;
}

function decrementCount(){
    count--
    countNum.innerText = count;
}

function resetCount(){
    count = 0;
    countNum.innerText = count;
}

document.getElementById('reset').addEventListener('click', function(){
    window.alert('Count Cleared!')
})
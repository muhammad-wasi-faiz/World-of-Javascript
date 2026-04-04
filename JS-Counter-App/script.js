
let counter = 0;

const num = document.getElementById('num');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

minus.addEventListener('click', () => {
    if (counter <= 0){
         return;
    }else{
        counter--;
        num.value = counter;
    }
});

plus.addEventListener('click', () => {
    counter++;
    num.value = counter;  
});

reset.addEventListener('click',() => {
    counter = 0;
    num.value = counter ;
})



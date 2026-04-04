const para = document.getElementById('para');
const btn = document.getElementById('btn');
const over = document.getElementById('over');
const inp = document.getElementById('inp');
let bg = over.style.backgroundColor ;

btn.addEventListener('click', () => {
    para.innerText = 'changed';
});

over.addEventListener('mouseover', ()=>{
    over.style.backgroundColor = 'red';
});

over.addEventListener('mouseout', ()=>{
    over.style.backgroundColor = bg ;

});

inp.addEventListener('keyup', ()=>{
    para.textContent = inp.value;
});





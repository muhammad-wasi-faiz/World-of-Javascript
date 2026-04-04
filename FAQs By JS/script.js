const faq = document.querySelectorAll('.faq');
const ans = document.querySelectorAll('.ans');
const icon = document.querySelectorAll('.icon');



faq.forEach((item, i) => {
  item.addEventListener('click', ()=>{
    icon[i].classList.toggle('rotate-180');
    ans[i].classList.toggle('hidden');
  
  });
})
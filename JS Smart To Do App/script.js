const text = document.getElementById('p');
const btn = document.getElementById('btn');
const inp1= document.getElementById('inp1');
const listitem = document.getElementById('list');
const edit = document.getElementById('edit');
const imp = document.getElementById('imp');
const textarea = document.getElementById('area');
const save = document.getElementById('save');
const del = document.getElementById('del');
let activeItem = null;

 
    btn.addEventListener('click', () => {
      if (inp1.value == '') return;

      const para = document.createElement('p');
      para.innerHTML = inp1.value ;
      para.classList.add('border-2', 'border-black' ,'mt-6', 'rounded-2xl','break-words','p-4');
      listitem.appendChild(para);
      inp1.value = '';


      // for (let i = 0; i < para.length; i++) {
    para.addEventListener('click', () => {

        if(activeItem && activeItem !== para){
          activeItem.classList.remove('border-red-500');
        }
        activeItem = para;
        para.classList.add('border-red-500');
        if(para.classList.contains('border-red-500')){
            edit.classList.remove('hidden');
            imp.classList.remove('hidden');
            del.classList.remove('hidden');
        }else{
            edit.classList.add('hidden');
            imp.classList.add('hidden');
            del.classList.add('hidden');
        }
    });
// }

});

imp.addEventListener('click', () => {

    if (activeItem == null) return;

    if (!activeItem.classList.contains('text-red-500')) {
        activeItem.classList.add('text-red-500', 'font-bold');
        imp.textContent = 'UnHighlight Text';
        activeItem.classList.remove('border-red-500');
        edit.classList.add('hidden');
        imp.classList.add('hidden');
        del.classList.add('hidden');

    } else {
        activeItem.classList.remove('text-red-500', 'font-bold');
        imp.textContent = 'Highlight Text';
        edit.classList.add('hidden');
        imp.classList.add('hidden');
        activeItem.classList.remove('border-red-500');
        del.classList.add('hidden');
    }

});

 edit.addEventListener('click', () => {

    if (activeItem == null) return;

    textarea.classList.remove('hidden');
    save.classList.remove('hidden');
    textarea.value = activeItem.innerText;
    activeItem.classList.add('hidden');
    edit.classList.add('hidden');
    imp.classList.add('hidden');
    del.classList.add('hidden');
});

save.addEventListener('click', () => {

    if (activeItem == null) return;

    activeItem.innerText = textarea.value;
    activeItem.classList.remove('hidden');
    activeItem.classList.remove('border-red-500');
    textarea.classList.add('hidden');
    save.classList.add('hidden');
    edit.classList.add('hidden');
    imp.classList.add('hidden');
    del.classList.add('hidden');
});


del.addEventListener('click', ()=>{
  if (activeItem == null) return;
  edit.classList.add('hidden');
  imp.classList.add('hidden');
  del.classList.add('hidden');
  activeItem.remove();
});
    
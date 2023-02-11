const clickBtn = document.getElementById("clickBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");


clickBtn.addEventListener('click', ()=>{
    popup.style.display = 'block';
});
closeBtn.addEventListener('click', ()=>{
    popup.style.display = 'none';
});
popup.addEventListener('click', ()=>{
    popup.style.display = 'none';
});





const clickBtn2 = document.getElementById("clickBtn2");
const popup2 = document.getElementById("popup2");
const closeBtn2 = document.getElementById("closeBtn2");
const popupContainer = document.getElementById('popupContainer')

clickBtn2.addEventListener('click', ()=>{
    popup2.style.display = 'block';
    popupContainer.style.display = 'flex'
});
popup2.addEventListener('click', ()=>{
    popup2.style.display = 'none';
});
closeBtn2.addEventListener('click', ()=>{
    popup2.style.display = 'none';
});


const clickBtn3 = document.getElementById("clickBtn3");

clickBtn3.addEventListener('click', ()=>{
    popup.style.display = 'block';
});
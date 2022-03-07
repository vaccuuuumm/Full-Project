function loadPage(){
let a = Math.floor(Math.random() * 20) +2;
document.getElementById("demo1").innerHTML = "Updated " +a+ " days ago";
let b = Math.floor(Math.random() * 20) +2;
document.getElementById("demo2").innerHTML = "Updated " +b+ " days ago";
let c = Math.floor(Math.random() * 20) +2;
document.getElementById("demo3").innerHTML = "Updated " +c+ " days ago";
}

const animItems = document.querySelectorAll('.anim-items');
if(animItems.length > 0){
  window.addEventListener('scroll', animScroll);
function animScroll(){
  for(let index = 0; index < animItems.length; index++){
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if(animItemHeight > window.innerHeight  ){
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }
    if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
      animItem.classList.add('_active');
    } else {
        animItem.classList.remove('_active');
    }
  }
}

function offset(el){
  const rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset  || document.documentElement.scrollTop;
  return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
}
animScroll();


function onM3(){
document.getElementById('3').classList.add('__active');
}
function offM3(){
document.getElementById('3').classList.remove('__active');
}
function onM2(){
document.getElementById('2').classList.add('__active');
}
function offM2(){
document.getElementById('2').classList.remove('__active');
}
function onM1(){
document.getElementById('1').classList.add('__active');
}
function offM1(){
document.getElementById('1').classList.remove('__active');
}

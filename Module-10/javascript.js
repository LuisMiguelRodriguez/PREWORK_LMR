
document.getElementById("button1").addEventListener("click", grow);
document.getElementById("button2").addEventListener("click", blue);
document.getElementById("button3").addEventListener("click", fade);
document.getElementById("button4").addEventListener("click", reset);

function grow(){
document.getElementById("box").style.width = "400px";
}

function blue() {
    document.getElementById("box").style.backgroundColor = "blue";
  }

function fade(){
  document.getElementById("box").style.opacity = "0";
}

function reset(){
 document.getElementById("box").style.width = "150px";
 document.getElementById("box").style.backgroundColor = "orange";
 document.getElementById("box").style.opacity = "100";
}




function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
}

function toggle(el) {
  hasClass(el, 'is_hidden') ? removeClass(el, 'is_hidden') : addClass(el, 'is_hidden');
}

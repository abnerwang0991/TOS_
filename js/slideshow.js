var container = document.querySelector("#leading-role"),
    counter = 0,
    items = document.querySelectorAll(".slide"),
    dot = document.querySelectorAll("[data-i]"),
    len = items.length,
    timer = 5000,
    interval = setInterval(showNext, timer);
function currentShow() {
  if(counter > len - 1) {counter = 0;}
  if(counter < 0) {counter = len -1;}
  items.forEach(function(elm) {
    elm.classList.remove("show");
  });
  dot.forEach(function(elm,index) {
  elm.classList.remove("active");
});
  items[counter].classList.add("show");
  dot[counter].classList.add("active");
}
function showPrev() {
  counter--;
  currentShow();
}
function showNext() {
  counter++;
  currentShow();
}
dot.forEach(function(elm,index) {
  elm.onclick = function() {
    counter = index;
    currentShow();
  }
  elm.classList.remove("active");
});
container.onmouseover = function() {
  interval = clearInterval(interval);
}
container.onmouseout = function() {
  interval = setInterval(showNext, timer);
}
document.querySelector(".prev").onclick = function() {
  showPrev();
}
document.querySelector(".next").onclick = function() {
  showNext();
}
items[0].classList.add("show");
dot[0].classList.add("active");
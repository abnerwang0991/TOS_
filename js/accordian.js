var btn = document.querySelectorAll(".generation-title");
btn.forEach(function(elm) {
  elm.onclick = function() {
    var panel = elm.nextElementSibling,
    		arrow = elm.children;
    		arrow[0].classList.toggle("fa-caret-up");
    if(panel.style.height) {
      panel.style.height = null;
    } else {
      panel.style.height = panel.scrollHeight + "px";
    }
  }
});
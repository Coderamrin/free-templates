window.myFunction = function(event) {
  // reset all menu items
  document.querySelectorAll('ul li a.active').forEach(function(item) {
  item.classList.remove('active');
})
  // mark as active selected menu item
  event.target.classList.add("active");
};

// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";

    console.log("first")
  });
}
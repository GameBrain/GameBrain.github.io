var button = document.getElementsByClassName('navbar-toggle')[0];
var menu = document.getElementsByClassName('navbar-collapse')[0];

button.onclick = function() {
  var classes = menu.className;
  if (classes.indexOf(' in') > 0) {
    menu.className = classes.replace(' in', '')
  } else {
    menu.className = classes + ' in';
  }
}

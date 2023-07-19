var teacher1_window = document.getElementById("teacher1-window");
var teacher1_card = document.getElementById("teacher1-card");
var teacher1_close = document.getElementById("teacher1-close");
var body_html = document.getElementById("body");
teacher1_card.onclick = function() {
  teacher1_window.classList.add('teachers-modal__open')
  body_html.classList.add('body__open')
}
teacher1_close.onclick = function() {
  teacher1_window.classList.remove('teachers-modal__open')
  body_html.classList.remove('body__open')
}

var teacher2_window = document.getElementById("teacher2-window");
var teacher2_card = document.getElementById("teacher2-card");
var teacher2_close = document.getElementById("teacher2-close");
teacher2_card.onclick = function() {
  teacher2_window.classList.add('teachers-modal__open')
  body_html.classList.add('body__open')
}
teacher2_close.onclick = function() {
  teacher2_window.classList.remove('teachers-modal__open')
  body_html.classList.remove('body__open')
}


var teacher3_window = document.getElementById("teacher3-window");
var teacher3_card = document.getElementById("teacher3-card");
var teacher3_close = document.getElementById("teacher3-close");
teacher3_card.onclick = function() {
  teacher3_window.classList.add('teachers-modal__open')
  body_html.classList.add('body__open')
}
teacher3_close.onclick = function() {
  teacher3_window.classList.remove('teachers-modal__open')
  body_html.classList.remove('body__open')
}

var teacher4_window = document.getElementById("teacher4-window");
var teacher4_card = document.getElementById("teacher4-card");
var teacher4_close = document.getElementById("teacher4-close");
teacher4_card.onclick = function() {
  teacher4_window.classList.add('teachers-modal__open')
  body_html.classList.add('body__open')
}
teacher4_close.onclick = function() {
  teacher4_window.classList.remove('teachers-modal__open')
  body_html.classList.remove('body__open')
}

window.onclick = function(event) {
  if (event.target == modal_calc) {
    modal_calc.classList.remove('modal-calc__open')
    body_html.classList.remove('body__open')
  }
  if (event.target == modal_rules) {
    modal_rules.classList.remove('modal-rules__open')
    body_html.classList.remove('body__open')
  }
}


window.onclick = function(event) {
  if (event.target == teacher1_window) {
    teacher1_window.classList.remove('teachers-modal__open')
    body_html.classList.remove('body__open')
  }
  if (event.target == teacher2_window) {
    teacher2_window.classList.remove('teachers-modal__open')
    body_html.classList.remove('body__open')
  }
  if (event.target == teacher3_window) {
    teacher3_window.classList.remove('teachers-modal__open')
    body_html.classList.remove('body__open')
  }
  if (event.target == teacher4_window) {
    teacher4_window.classList.remove('teachers-modal__open')
    body_html.classList.remove('body__open')
  }
}

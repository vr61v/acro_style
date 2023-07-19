const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
const body = document.getElementById('body')

burger.addEventListener('click', function (event) {
	if(!menu.classList.contains('menu__open')){
		menu.classList.add('menu__open')
		burger.classList.add('burger__open')
		body.classList.add('body__open')
	}else{
		menu.classList.remove('menu__open')
		burger.classList.remove('burger__open')
		body.classList.remove('body__open')
	}
})
let start = document.querySelector('.start')
let first = document.querySelectorAll(".first");
let last = document.querySelectorAll('.first')[first.length - 1]
let submit = document.querySelector('.submit')
let result = document.querySelector('.result')
let finish = document.querySelector('.finish')
let questions = document.querySelectorAll('.first input')
let show = document.querySelector('.show')
let count = 0
let divIndex = 1;

function showDiv(n) {
	if (n == first.length) {
		submit.style.display = 'none'
		finish.style.display = 'block'
	}
	if (n < 1) {
		divIndex = first.length
	}
	for (let i = 0; i < first.length; i++) {
		first[i].classList.remove("active")
	}
	first[divIndex - 1].classList.add("active");


}
start.addEventListener('click', () => {
	start.style.display = 'none'
	submit.style.display = 'block'
	showDiv(divIndex);

})

submit.addEventListener('click', function nextSlide() {
	showDiv(divIndex += 1);

})
questions.forEach((event) => {
	event.addEventListener('click', e => {
		if (e.target.value == 'right') {
			count++
		}
	})
})
finish.addEventListener('click', () => {
	show.style.display = 'block'
	result.style.display = 'block'
	result.innerHTML = `your score is ${count}/10`
	finish.style.display = 'none'
	last.style.display = 'none'
})

show.addEventListener('click', () => {
	first.forEach((e) => {
		e.style.display = 'block'
		show.style.display = 'none'
		result.style.display = 'none'
	})
	questions.forEach((event) => {
		let li1 = event.parentElement
		if (event.value == 'right' && event.checked) {
			li1.style.background = 'green'
			li1.style.color = 'white'
		}
		else if (event.value == 'right' && !event.checked) {
			li1.style.background = 'green'
			li1.style.color = 'white'
		}
		else if (event.value == 'wrong' && event.checked) {
			li1.style.color = 'white'
			li1.style.background = 'red'
		}
	})
})
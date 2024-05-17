const slides = [
	{

	}
];

const prev = document.querySelector('.controlls__prev');
const next = document.querySelector('.controlls__next');
const img = document.querySelector('.slider-main__img');

const dottsArray = document.querySelectorAll('.controlls-dot');
console.log(dottsArray);

next.addEventListener('click', function() {
	dottsArray[1].classList.add('dot_active')
	img.src = 'img/patriotic.jpg';
});
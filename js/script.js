const slides = [
	{
		city: 'Rostov-on-Don<br>LCD admiral',
        area: '81 m<sup>2</sup>',
        time: '3.5 months',
        cost: 'Upon request',
        img: 'img/admiral.jpg',
	},
	{
		city: 'Sochi<br>Thieves',
        area: '105 m<sup>2</sup>',
        time: '4 months',
        cost: 'Upon request',
        img: 'img/sochi.jpg',
	},
	{
		city: 'Rostov-on-Don<br>Patriotic',
        area: '93 m<sup>2</sup>',
        time: '3 months',
        cost: 'Upon request',
        img: 'img/patriotic.jpg',
	},
];

const headCityName = document.querySelectorAll('.slider-head__item-link');

const cityElem = document.querySelector('.city-info');
const areaElem = document.querySelector('.area-info');
const timeElem = document.querySelector('.time-info');
const costElem = document.querySelector('.cost-info');

const imgElem = document.querySelector('.slider-main__img');

const dots = document.querySelectorAll('.controlls-dot');

const prev = document.querySelector('.controlls__prev');
const next = document.querySelector('.controlls__next');

let currentIndex = 0;
const changeSlide = (index) => {
	if (index >= 0 && index <= slides.length - 1) {
		cityElem.innerHTML = slides[index].city;
		areaElem.innerHTML = slides[index].area;
		timeElem.innerHTML = slides[index].time;
		costElem.innerHTML = slides[index].cost;
		imgElem.src = `${slides[index].img}`;
		
	} else if (index < 0) {
		currentIndex = slides.length - 1;
		changeSlide(currentIndex);
	} else if (index >= slides.length) {
		currentIndex = 0;
		changeSlide(currentIndex);
	}
};

prev.addEventListener('click', function () {
	currentIndex -= 1;
	changeSlide(currentIndex);
});
next.addEventListener('click', function () {
	currentIndex += 1;
	changeSlide(currentIndex);
});
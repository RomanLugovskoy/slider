const slides = [
	{
		city: 'Rostov-on-Don<br>LCD admiral',
        area: '81 m<sup>2</sup>',
        time: '3.5 months',
        cost: 'Upon request',
        img: 'img/admiral.jpg',
		alt: 'Rostov-on-Don LCD admiral',
	},
	{
		city: 'Sochi<br>Thieves',
        area: '105 m<sup>2</sup>',
        time: '4 months',
        cost: 'Upon request',
        img: 'img/sochi.jpg',
		alt: 'Sochi Thieves',
	},
	{
		city: 'Rostov-on-Don<br>Patriotic',
        area: '93 m<sup>2</sup>',
        time: '3 months',
        cost: 'Upon request',
        img: 'img/patriotic.jpg',
		alt: 'Rostov-on-Don Patriotic',
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
	headCityName.forEach(item => item.classList.remove('slider-head__item_active'));
	dots.forEach(item => item.classList.remove('dot_active'));
	if (index >= 0 && index <= slides.length - 1) {
		cityElem.innerHTML = slides[index].city;
		areaElem.innerHTML = slides[index].area;
		timeElem.innerHTML = slides[index].time;
		costElem.innerHTML = slides[index].cost;
		imgElem.src = `${slides[index].img}`;
		imgElem.alt = slides[index].alt;
		headCityName[index].classList.add('slider-head__item_active');
		dots[index].classList.add('dot_active');
	} else if (index < 0) {
		currentIndex = slides.length - 1;
		changeSlide(currentIndex);
	} else if (index >= slides.length) {
		currentIndex = 0;
		changeSlide(currentIndex);
	}
};

prev.addEventListener('click', () => {
	currentIndex -= 1;
	changeSlide(currentIndex);
});
next.addEventListener('click', () => {
	currentIndex += 1;
	changeSlide(currentIndex);
});
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index);
        currentIndex = index;
    });
});
headCityName.forEach((name, index) => {
	name.addEventListener('click', () => {
        changeSlide(index);
        currentIndex = index;
    });
});
const mainSlider = new Swiper(".mainSlider", {
	watchSlidesProgress: true,
	loop: false,
});

const thumbsSlider = new Swiper(".thumbsSlider", {
	direction: "vertical",
	slidesPerView: 3,
	centeredSlides: true,
	loop: false,
	rewind: true,
	navigation: {
		prevEl: ".swiper-button-prev",
		nextEl: ".swiper-button-next",
	},
	on: {
		slideChangeTransitionStart: function () {
			setBeforePrevAfterNext(this);
		},
	},
});

mainSlider.controller.control = thumbsSlider;
thumbsSlider.controller.control = mainSlider;

function setBeforePrevAfterNext($swiper) {
	const totalSlides = document.querySelectorAll(".mainSlider .swiper-slide");
	const currentSlideIndex = $swiper.realIndex + 1;

	console.log($swiper.realIndex + 1);
	console.log(totalSlides.length);
	let prev = $swiper.el.querySelector(".swiper-slide-prev");
	let next = $swiper.el.querySelector(".swiper-slide-next");
	// let before_prev = prev.previousElementSibling;
	// let after_next = next.nextElementSibling;

	$swiper.el.querySelectorAll(".swiper-slide-before-prev").forEach((element) => {
		element.classList.remove("swiper-slide-before-prev");
	});
	$swiper.el.querySelectorAll(".swiper-slide-after-next").forEach((element) => {
		element.classList.remove("swiper-slide-after-next");
	});

	if (prev.previousElementSibling) {
		prev.previousElementSibling.classList.add("swiper-slide-before-prev");
	}

	if (next.nextElementSibling) {
		next.nextElementSibling.classList.add("swiper-slide-after-next");
	}
}

const sliderImage = document.querySelectorAll(".mainSlider .swiper-slide");
const navigation = document.querySelector(".navigation");
const info = document.querySelector(".info");

sliderImage.forEach((image) => {
	image.addEventListener("mouseover", () => {
		navigation.style.transform = "translateX(-50%) rotate(-20deg)";
		info.style.transform = "translateY(50%)";
	});

	image.addEventListener("mouseout", () => {
		navigation.style.transform = "translateX(0) rotate(-20deg)";
		info.style.transform = "translateY(0)";
	});
});

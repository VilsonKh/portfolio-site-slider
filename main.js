const mainSlider = new Swiper(".swiper", {
	watchSlidesProgress: true,
});

const thumbsSlider = new Swiper(".thumbsSlider", {
	direction: "vertical",
	slidesPerView: 3,
	centeredSlides: true,
});

mainSlider[0].controller.control = thumbsSlider;

const sliderImage = document.querySelectorAll(".slider-image");
const navigation = document.querySelector(".navigation");
const info = document.querySelector(".info");

// sliderImage.forEach((image) => {
// 	image.addEventListener("mouseover", () => {
// 		navigation.style.transform = "translateX(-50%) rotate(-20deg)";
// 		info.style.transform = "translateY(50%)";
// 	});

// 	image.addEventListener("mouseout", () => {
// 		navigation.style.transform = "translateX(0) rotate(-20deg)";
// 		info.style.transform = "translateY(0)";
// 	});
// });

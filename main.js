const projectDescription = document.querySelectorAll(".description");
const githubLink = document.querySelector(".githubLink");
const mobileGithubLink = document.querySelector(".description__buttons .githubLink");
const mobileLayoutButton = document.querySelector(".layout__mobile");
const desktopLayoutButton = document.querySelector(".layout__desktop");

const projectsDescriptionData = [
	{
		title: "entertainment-app",
		description:
			"Entertainment App is a React-based project that serves as a convenient application for browsing and tracking movies and TV shows. The app features a content library that allows users to discover their favorite films and series, add bookmarks, and navigate between different tabs and content cards.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/entertainment-app",
		desktopLayout: "./media/entertainment-app-min.webp",
		mobileLayout: "./media/entertainment-app__mobile-min.webp",
	},
	{
		title: "invoice-app",
		description:
			"The Invoice App simplifies the process of creating invoices through a user-friendly form. Users can input necessary details, such as client information, itemized charges, and due dates. The app employs the React Hook Form library for form validation, ensuring that all information entered is accurate and complete. If an invoice becomes irrelevant or is no longer needed, the app offers a deletion process. The app covered with tests.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/invoice-app",
		desktopLayout: "./media/invoices-app-min.webp",
		mobileLayout: "./media/invoice-app__mobile-min.webp",
	},
	{
		title: "audiophile",
		description:
			"The Audiophile project features user-friendly checkouts form with validation. Users have the convenience of adding products to their shopping cart as they browse. The website is responsive, and the shopping cart persists across pages using localStorage. An integrated order form simplifies order creation.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/audiophile",
		desktopLayout: "./media/audiophile-min.webp",
		mobileLayout: "./media/audiophile__mobile-min.webp",
	},
	{
		title: "photo-studio",
		description:
			"The website offers information, highlighting the studio's portfolio, services, and expertise. It features a captivating collection of photographs, demonstrating the studio's artistic vision and technical skill. The website also includes detailed information about the studio's services, such as portrait, group or family fotography.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/photo-studio",
		desktopLayout: "./media/photo-studio-min.webp",
		mobileLayout: "./media/photo-studio__mobile-min.webp",
	},
	{
		title: "mesto",
		description:
			"The website allows users to add, delete, and like images, as well as edit their profile and change avatar. The user's photos are stored in a Firestore database. Also it includes form validation to ensure user input is correct and checks for the presence of images at the specified user-provided addresses.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/mesto",
		desktopLayout: "./media/mesto-min.webp",
		mobileLayout: "./media/mesto__mobile-min.webp",
	},
	{
		title: "planet-facts",
		description: "Planets Facts project dedicated to fascinating facts about the planets of our solar system. Here, you can discover captivating details about each planet, their unique features.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/planet-facts",
		desktopLayout: "./media/planets-fact-min.webp",
		mobileLayout: "./media/planet-facts__mobile-min.webp",
	},
	{
		title: "russian-travel",
		description:
			"The website offers a wide range of features and resources to enhance your travel experience in Russia. It provides users with access to comprehensive and well-researched textual articles that cover various aspects of Russian travel, such as popular destinations, historical landmarks, cultural experiences, and outdoor adventures.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/russian-travel",
		desktopLayout: "./media/russian-travel-min.webp",
		mobileLayout: "./media/russian-travel__mobile-min.webp",
	},
	{
		title: "theater",
		description:
			"The website offers visitors an opportunity to explore the theater's diverse productions.	The website features a captivating slider showcasing images from past performances, providing visitors with a glimpse into the visually stunning and emotive world of theater. Furthermore, the website offers a convenient callback form allowing visitors to easily get in touch with the theater.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/theatre",
		desktopLayout: "./media/theater-min.webp",
		mobileLayout: "./media/theater__mobile-min.webp",
	},
	{
		title: "singer-landing",
		description: "This website allows visitors to explore the singer's discography, biography, upcoming events, and latest news. Also video and music were implemented.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/singer-landing",
		desktopLayout: "./media/singer-landing-min.webp",
		mobileLayout: "none",
	},
	{
		title: "tribe",
		description:
			"The website provides information about the agency's services, musicians, and upcoming events. It uses animations and sliders to create an engaging experience.	The sliders display musician profiles and past performances. The website is responsive, ensuring a seamless experience across devices.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/tribe",
		desktopLayout: "./media/tribe-min.webp",
		mobileLayout: "none",
	},
	{
		title: "how-to-learn",
		description:
			"The project provides users with access to various types of information aimed at enhancing learning effectiveness, including textual articles, infographics, video materials, and links to useful resources.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/how-to-learn",
		desktopLayout: "./media/how-to-learn-min.webp",
		mobileLayout: "none",
	},
];

const thumbsSlider = new Swiper(".thumbsSlider", {
	initialSlide: 2,
	direction: "vertical",
	slidesPerView: 3,
	centeredSlides: true,
	loop: false,
	// navigation: {
	// 	prevEl: ".swiper-button-prev",
	// 	nextEl: ".swiper-button-next",
	// },
	on: {
		slideChangeTransitionStart: function () {
			setBeforePrevAfterNext(this);
		},
	},
});

if (window.screen.width < 768) {
	thumbsSlider.disable();
}

const mainSlider = new Swiper(".mainSlider", {
	initialSlide: 2,
	watchSlidesProgress: true,
	loop: false,
	allowTouchMove: false,
	pagination: {
		// el: ".swiper-pagination",
		clickable: true,
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + "</span>";
		// },
	},
	on: {
		slideChange: function () {
			projectDescription.forEach((elem) => {
				elem.textContent = projectsDescriptionData[this.realIndex].description;
			});
			githubLink.setAttribute("href", projectsDescriptionData[this.realIndex].githubLink);
			mobileGithubLink.setAttribute("href", projectsDescriptionData[this.realIndex].githubLink);
		},
		slideChangeTransitionStart: function () {
			setBeforePrevAfterNext(thumbsSlider);
		},
	},
});

if (window.screen.width > 767) {
	mainSlider.allowTouchMove = true;
}

// const mobileMainSlider = new Swiper(".mainSlider", {
// 	// allowSlideNext: false,
// 	// allowSlidePrev: false,
// 	// loop: true,
// 	allowTouchMove: false,
// 	edgeSwipeDetection: false,
// 	navigation: {
// 		prevEl: ".swiper-button-prev",
// 		nextEl: ".swiper-button-next",
// 	},
// 	on: {
// 		slideChange: function () {
// 			projectDescription.textContent = projectsDescriptionData[this.realIndex].description;
// 			githubLink.setAttribute("href", projectsDescriptionData[this.realIndex].githubLink);

// 			if (projectsDescriptionData[this.realIndex].mobileLayout === "none") {
// 				mobileLayoutButton.classList.add("hide");
// 				desktopLayoutButton.classList.add("active");
// 			} else {
// 				mobileLayoutButton.classList.remove("hide");
// 				if (currentLayout.getLayout === "mobile") {
// 					desktopLayoutButton.classList.remove("active");
// 				}
// 			}
// 			window.scrollTo(1000, 0);
// 		},
// 	},
// });

// if (window.screen.width < 768) {
// 	mainSlider.enabled = false;
// 	mobileMainSlider.enabled = true;
// } else {
// 	mainSlider.enabled = true;
// 	mobileMainSlider.enabled = false;
// }

const mobileThumbsSlider = new Swiper(".mobileThumbsSlider", {
	initialSlide: 2,
	slidesPerView: "auto",
	spaceBetween: 0,
	centeredSlides: true,
	effect: "coverflow",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 2,
		slideShadows: true,
	},
});

(mainSlider.controller.control = thumbsSlider), mobileThumbsSlider;
thumbsSlider.controller.control = mainSlider;
mobileThumbsSlider.controller.control = mainSlider;

function setBeforePrevAfterNext(swiper) {
	if (window.screen.width > 810) {
		const totalSlidesNumber = document.querySelectorAll(".mainSlider .swiper-slide").length;
		const currentSlideIndex = swiper.realIndex + 1;

		if (currentSlideIndex === 1) {
			let next = swiper.el.querySelector(".swiper-slide-next");

			swiper.el.querySelectorAll(".swiper-slide-after-next").forEach((element) => {
				element.classList.remove("swiper-slide-after-next");
				if (next.nextElementSibling) {
					next.nextElementSibling.classList.add("swiper-slide-after-next");
				}
			});
		} else if (currentSlideIndex === totalSlidesNumber) {
			let prev = swiper.el.querySelector(".swiper-slide-prev");

			swiper.el.querySelectorAll(".swiper-slide-before-prev").forEach((element) => {
				element.classList.remove("swiper-slide-before-prev");

				if (prev.previousElementSibling) {
					prev.previousElementSibling.classList.add("swiper-slide-before-prev");
				}
			});
		} else {
			let prev = swiper.el.querySelector(".swiper-slide-prev");
			let next = swiper.el.querySelector(".swiper-slide-next");

			swiper.el.querySelectorAll(".swiper-slide-before-prev").forEach((element) => {
				element.classList.remove("swiper-slide-before-prev");
			});
			swiper.el.querySelectorAll(".swiper-slide-after-next").forEach((element) => {
				element.classList.remove("swiper-slide-after-next");
			});

			if (prev.previousElementSibling) {
				prev.previousElementSibling.classList.add("swiper-slide-before-prev");
			}

			if (next.nextElementSibling) {
				next.nextElementSibling.classList.add("swiper-slide-after-next");
			}
		}
	}
}

const sliderImage = document.querySelectorAll(".mainSlider .swiper-slide");
const navigation = document.querySelector(".navigation");
const info = document.querySelector(".info");

// sliderImage.forEach((image) => {
// 	image.addEventListener("mouseover", () => {
// 		navigation.classList.add("hide");
// 		info.classList.add("hide");
// 	});

// 	image.addEventListener("mouseout", () => {
// 		navigation.classList.remove("hide");
// 		info.classList.remove("hide");
// 	});
// });

const panelToggler = document.querySelector(".navigationPanelToggler");
const panelTogglerImg = panelToggler.querySelector("img");
const showPanelImg = "./media/show_sidebar.svg";
const hidePanelImg = "./media/hide_sidebar.svg";

panelToggler.addEventListener("click", () => {
	navigation.classList.toggle("hide");
	info.classList.toggle("hide");
	if (panelTogglerImg.src.indexOf("show") != -1) {
		panelTogglerImg.setAttribute("src", hidePanelImg);
	} else {
		panelTogglerImg.setAttribute("src", showPanelImg);
	}
});

const mobileThumbsHide = document.querySelector(".mobileThumbs-toggler");
const mobileThumbsShow = document.querySelector(".mobileThumbsOpener");
const mobileThumbsPanel = document.querySelector(".mobileThumbs");
mobileThumbsHide.addEventListener("click", () => {
	mobileThumbsPanel.classList.add("hide");
});

mobileThumbsShow.addEventListener("click", () => {
	mobileThumbsPanel.classList.remove("hide");
});

const descriptionOpener = document.querySelector(".descriptionOpener");
const descriptionPopup = document.querySelector(".description__popup");
descriptionOpener.addEventListener("click", () => {
	descriptionPopup.classList.toggle("active");
});

const slideImages = document.querySelectorAll(".mainSlider img");
if (window.screen.width < 1439) {
	slideImages.forEach((img) => {
		//  pinchAndPan - panning during pinch zoom
		const panzoom = Panzoom(img, { canvas: true, startScale: 6, startX: 100, startY: 70, pinchAndPan: true });
	});
}

const touchMovePopup = document.querySelector(".touchMoveIconPopup");

if (window.screen.width <= 768) {
	if (localStorage.getItem("isFirstEnter") === null) {
		touchMovePopup.classList.add("active");
		localStorage.setItem("isFirstEnter", false);
	}
}

touchMovePopup.addEventListener("click", () => {
	touchMovePopup.classList.remove("active");
});

localStorage.clear();

const portrait = window.matchMedia("(orientation: portrait)");

if (screen.orientation.type === "portrait-primary" && window.screen.width > 768) {
	alert("rotate your device");
}
// portrait.addEventListener("change", function (e) {
// 	if (e.matches) {
// 		alert("переверни, лох");
// 	} else {
// 		alert("нормальная ориентация, лох");
// 	}
// });

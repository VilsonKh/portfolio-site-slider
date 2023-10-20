const projectDescription = document.querySelector(".description");
const githubLink = document.querySelector(".githubLink");

const projectsDescriptionData = [
	{
		title: "entertainment-app",
		description:
			"Entertainment App is a React-based project that serves as a convenient application for browsing and tracking movies and TV shows. The app features a content library that allows users to discover their favorite films and series, add bookmarks, and navigate between different tabs and content cards.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/entertainment-app",
	},
	{
		title: "invoice-app",
		description:
			"The Invoice App simplifies the process of creating invoices through a user-friendly form. Users can input necessary details, such as client information, itemized charges, and due dates. The app employs the React Hook Form library for form validation, ensuring that all information entered is accurate and complete. If an invoice becomes irrelevant or is no longer needed, the app offers a deletion process. The app covered with tests.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/invoice-app",
	},
	{
		title: "audiophile",
		description:
			"The Audiophile project features user-friendly checkouts form with validation. Users have the convenience of adding products to their shopping cart as they browse. The website is responsive, and the shopping cart persists across pages using localStorage. An integrated order form simplifies order creation.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/audiophile",
	},
	{
		title: "photo-studio",
		description:
			"The website offers information, highlighting the studio's portfolio, services, and expertise. It features a captivating collection of photographs, demonstrating the studio's artistic vision and technical skill. The website also includes detailed information about the studio's services, such as portrait, group or family fotography.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/photo-studio",
	},
	{
		title: "mesto",
		description:
			"The website allows users to add, delete, and like images, as well as edit their profile and change avatar. The user's photos are stored in a Firestore database. Also it includes form validation to ensure user input is correct and checks for the presence of images at the specified user-provided addresses.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/mesto",
	},
	{
		title: "planet-facts",
		description: "Planets Facts project dedicated to fascinating facts about the planets of our solar system. Here, you can discover captivating details about each planet, their unique features.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/planet-facts",
	},
	{
		title: "russian-travel",
		description:
			"The website offers a wide range of features and resources to enhance your travel experience in Russia. It provides users with access to comprehensive and well-researched textual articles that cover various aspects of Russian travel, such as popular destinations, historical landmarks, cultural experiences, and outdoor adventures.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/russian-travel",
	},
	{
		title: "theater",
		description:
			"The website offers visitors an opportunity to explore the theater's diverse productions.	The website features a captivating slider showcasing images from past performances, providing visitors with a glimpse into the visually stunning and emotive world of theater. Furthermore, the website offers a convenient callback form allowing visitors to easily get in touch with the theater.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/theatre",
	},
	{
		title: "singer-landing",
		description: "This website allows visitors to explore the singer's discography, biography, upcoming events, and latest news. Also video and music were implemented.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/singer-landing",
	},
	{
		title: "tribe",
		description:
			"The website provides information about the agency's services, musicians, and upcoming events. It uses animations and sliders to create an engaging experience.	The sliders display musician profiles and past performances. The website is responsive, ensuring a seamless experience across devices.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/tribe",
	},
	{
		title: "how-to-learn",
		description:
			"The project provides users with access to various types of information aimed at enhancing learning effectiveness, including textual articles, infographics, video materials, and links to useful resources.",
		mainLink: "",
		githubLink: "https://github.com/VilsonKh/how-to-learn",
	},
];

const mainSlider = new Swiper(".mainSlider", {
	watchSlidesProgress: true,
	loop: false,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + "</span>";
		// },
	},
	on: {
		slideChange: function () {
			projectDescription.textContent = projectsDescriptionData[this.realIndex].description;
			githubLink.setAttribute("href", projectsDescriptionData[this.realIndex].githubLink);
		},
	},
});

const thumbsSlider = new Swiper(".thumbsSlider", {
	direction: "vertical",
	slidesPerView: 3,
	centeredSlides: true,
	loop: false,
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

const mobileThumbsSlider = new Swiper(".mobileThumbsSlider", {
	direction: "vertical",
});

mainSlider.controller.control = thumbsSlider;
thumbsSlider.controller.control = mainSlider;

function setBeforePrevAfterNext($swiper) {
	const totalSlidesNumber = document.querySelectorAll(".mainSlider .swiper-slide").length;
	const currentSlideIndex = $swiper.realIndex + 1;
	console.log(currentSlideIndex + "/" + totalSlidesNumber);

	if (currentSlideIndex === 1) {
		let next = $swiper.el.querySelector(".swiper-slide-next");

		$swiper.el.querySelectorAll(".swiper-slide-after-next").forEach((element) => {
			element.classList.remove("swiper-slide-after-next");

			if (next.nextElementSibling) {
				next.nextElementSibling.classList.add("swiper-slide-after-next");
			}
		});
	} else if (currentSlideIndex === totalSlidesNumber) {
		let prev = $swiper.el.querySelector(".swiper-slide-prev");

		$swiper.el.querySelectorAll(".swiper-slide-before-prev").forEach((element) => {
			element.classList.remove("swiper-slide-before-prev");

			if (prev.previousElementSibling) {
				prev.previousElementSibling.classList.add("swiper-slide-before-prev");
			}
		});
	} else {
		let prev = $swiper.el.querySelector(".swiper-slide-prev");
		let next = $swiper.el.querySelector(".swiper-slide-next");

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

	// let before_prev = prev.previousElementSibling;
	// let after_next = next.nextElementSibling;
}

const sliderImage = document.querySelectorAll(".mainSlider .swiper-slide");
const navigation = document.querySelector(".navigation");
const info = document.querySelector(".info");

sliderImage.forEach((image) => {
	image.addEventListener("mouseover", () => {
		navigation.classList.add("hide");
		info.classList.add("hide");
	});

	image.addEventListener("mouseout", () => {
		navigation.classList.remove("hide");
		info.classList.remove("hide");
	});
});

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

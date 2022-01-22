export default (req, res) => {
	const data = {
		headerData: {
			visible: true,
			content: {
				title: "Portfolio",
			},
		},
		heroData: {
			visible: true,
			content: {
				title: "Build as per Your Demand",
				description: "We Provide One-Stop Software Solution For All Your Web Development Needs",
			},
		},
		servicesData: {
			visible: true,
			content: [
				{
					key: 0,
					image: "web-development.svg",
					title: "Full Stack Development",
					description: "Full Stack Web Application Development using latest javascript framework React with backend Rest Apis on Node.js and SQL/No-SQL Database",
				},
				{
					key: 1,
					image: "web-development.svg",
					title: "Front End Development",
					description: `Front End Development with the technologies HTML5, CSS3, SCSS, JAVASCRIPT, REACTJS, BOOTSTRAP, MATERIAL-UI, ANTD.`,
				},
				{
					key: 2,
					image: "web-development.svg",
					title: "Backend Development",
					description: "Backend Development using latest javascript framework Node.js and MySQL and MongoDB Database",
				},
			],
		},
		featuresData: {
			visible: true,
			content: [
				{
					key: 0,
					icon: "bi bi-lightbulb-fill",
					title: "Creative",
					description:
						"We think differently, to make connections between the real and digital worlds. Through our distinct ideas, we enable you to build sustainable and extensible products/solutions for the digital age.",
				},
				{
					key: 1,
					icon: "bi bi-headset",
					title: "24 X 7 Support",
					description: "We are here to provide support anytime you need one. No questions asked",
				},
				{
					key: 2,
					icon: "bi bi-shield-fill-check",
					title: "Finest Quality",
					description:
						"The road to successfully achieving goals in IT is littered with risks. Our insights help you make the most informed decision possible. Let us bring you peace of mind!",
				},
				{
					key: 3,
					icon: "bi bi-check2",
					title: "Simplification",
					description: "We endeavour to focus on specific business needs while keeping the highly complex, simple.",
				},
			],
		},
		teamData: {
			visible: true,
			content: [
				{
					key: 0,
					image: "tirth.jpg",
					name: "Tirth Radadiya",
					area: "Full Stack Developer",
					technologies: "React JS, Node JS, Express JS, MongoDB, MySQL",
					experience: "1+ Years",
				},
				{
					key: 1,
					image: "neh.jpg",
					name: "Neh Jain",
					area: "Full Stack Developer",
					technologies: "React JS, Node JS, Express JS, MongoDB, MySQL",
					experience: "2+ Years",
				},
			],
		},
		footerData: {
			visible: true,
			content: {
				aboutUs: {
					title: "We Provide Thorough Solution for your all web Development needs",
					socialMedia: [
						{ link: "", logo: "bi-facebook" },
						{ link: "", logo: "bi-twitter" },
						{ link: "", logo: "bi-linkedin" },
						{ link: "", logo: "bi-instagram" },
					],
				},
				services: [
					{ title: "Full Stack Development", to: "" },
					{ title: "Front End Development", to: "" },
					{ title: "Back End Development", to: "" },
				],
				contact: {
					phone: ["+91 123456789", "+91 123456789"],
					email: ["info@email.com"],
					address: "Currently Work From Home",
				},
			},
		},
	};

	res.statusCode = 200;
	res.send(data);
};

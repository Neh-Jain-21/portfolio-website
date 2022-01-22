import { useEffect, useState } from "react";
// COMPONENTS
import Header from "src/components/Header/Header";
import Hero from "src/components/Hero/Hero";
import Services from "src/components/Services/Services";
import ScrollTop from "src/components/ScrollTop/ScrollTop";
import Features from "src/components/Features/Features";
import Portfolio from "src/components/Portfolio/Portfolio";
import Footer from "src/components/Footer/Footer";
import Team from "src/components/Team/Team";
// API
import axios from "axios";

const MainPage = () => {
	const [data, setData] = useState({
		headerData: { visible: false },
		heroData: { visible: false },
		servicesData: { visible: false },
		featuresData: { visible: false },
		teamData: { visible: false },
		footerData: { visible: false },
	});

	useEffect(() => {
		axios
			.get("/api/getWebsiteData")
			.then((value) => {
				if (value.status === 200) {
					setData(value.data);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{data.headerData.visible && <Header data={data.headerData.content} />}
			{data.heroData.visible && <Hero data={data.heroData.content} />}
			{data.servicesData.visible && <Services data={data.servicesData.content} />}
			{data.featuresData.visible && <Features data={data.featuresData.content} />}
			{/* <Portfolio /> */}
			{data.teamData.visible && <Team data={data.teamData.content} />}
			{data.footerData.visible && <Footer data={data.footerData.content} />}
			<ScrollTop />
		</>
	);
};

export default MainPage;

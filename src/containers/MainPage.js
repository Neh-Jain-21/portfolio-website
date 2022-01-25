// COMPONENTS
import Header from "src/components/Header/Header";
import Hero from "src/components/Hero/Hero";
import Services from "src/components/Services/Services";
import ScrollTop from "src/components/ScrollTop/ScrollTop";
import Features from "src/components/Features/Features";
import Portfolio from "src/components/Portfolio/Portfolio";
import Footer from "src/components/Footer/Footer";
import Team from "src/components/Team/Team";
// CONSTANTS
import { data } from "src/utils/Constants";

const MainPage = () => {
	return (
		<>
			{data.headerData.visible && <Header data={data.headerData.content} />}
			{data.heroData.visible && <Hero data={data.heroData.content} />}
			{data.servicesData.visible && <Services data={data.servicesData.content} />}
			{data.featuresData.visible && <Features data={data.featuresData.content} />}
			{data.portfolioData.visible && <Portfolio data={data.portfolioData.content} />}
			{data.teamData.visible && <Team data={data.teamData.content} />}
			{data.footerData.visible && <Footer data={data.footerData.content} />}
			<ScrollTop />
		</>
	);
};

export default MainPage;

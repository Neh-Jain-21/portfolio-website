// IMAGES
import BannerImage from "src/Assets/hero-banner.png";
// UTILS
import { heroData } from "src/utils/Constants";

const Hero = () => {
	return (
		<>
			<div data-aos="zoom-in" className="hero-container">
				<div className="container">
					<div className="row">
						<div data-aos="fade-right" data-aos-duration="2000" className="col-md-6">
							<div className="hero-content-container ms-auto d-flex flex-column justify-content-center">
								<h1 className="hero-tagline">{heroData.title}</h1>
								<p className="hero-description mb-4">{heroData.description}</p>
								<button className="btn btn-primary btn-lg">Contact Us</button>
							</div>
						</div>
						<div data-aos="fade-left" data-aos-duration="2000" className="col-md-6">
							<img src={BannerImage} className="hero-banner-img" alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

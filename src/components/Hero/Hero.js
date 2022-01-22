// IMAGES
import BannerImage from "src/Assets/hero-banner.png";

const Hero = ({ data }) => {
	return (
		<>
			<div data-aos="zoom-in" className="hero-container">
				<div className="container">
					<div className="row">
						<div data-aos="fade-right" data-aos-duration="2000" className="col-12 col-md-6">
							<div className="hero-content-container ms-auto d-flex flex-column justify-content-center align-items-center align-items-md-start">
								<h1 className="hero-tagline text-align-md-left text-center text-md-start">{data.title}</h1>
								<p className="hero-description mb-4 text-center text-md-start">{data.description}</p>
								<button className="btn btn-primary btn-md">Contact Us</button>
							</div>
						</div>
						<div data-aos="fade-left" data-aos-duration="2000" className="d-none d-md-flex col-md-6">
							<img src={BannerImage} className="hero-banner-img" alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

// IMAGES
import BannerImage from "src/Assets/hero-banner.png";

const Hero = () => {
	return (
		<>
			<div className="hero-container">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="hero-content-container ms-auto d-flex flex-column justify-content-center">
								<h1 className="hero-tagline">Our Portfolio main Tagline</h1>
								<p className="hero-description">We Provide One-Stop Software Solution For All Your Web Development Needs</p>
								<button className="btn btn-primary btn-lg">Contact Us</button>
							</div>
						</div>
						<div className="col-md-6">
							<img src={BannerImage} className="hero-banner-img" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

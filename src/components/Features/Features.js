// UTILS
import { featuresData } from "src/utils/Constants";

const Features = () => {
	return (
		<>
			<div className="container d-flex flex-column align-items-center my-5">
				<p className="text-center services-title mb-1" data-aos="fade-left">
					Features
				</p>
				<div className="progress mb-5" data-aos="fade-right">
					<span className="progress-bar"></span>
				</div>
				<div className="row">
					{featuresData.map((value) => {
						return (
							<div key={value.key} className="col-md-3 mb-4 d-flex flex-column align-items-center" data-aos="zoom-out-down">
								{/* <img
                  src={value.icon}
                  alt={value.title}
                  className="features-img"
                /> */}
								<div className="img-container">
									<i className={`${value.icon} features-img`}></i>
								</div>
								<h3 className="mt-3">{value.title}</h3>
								<p className="text-center">{value.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Features;

// UTILS
import { servicesData } from "src/utils/Constants";

const Services = () => {
	return (
		<>
			<div data-aos="zoom-in" className="services-container">
				<div className="container d-flex flex-column align-items-center">
					<p className="text-center services-title mb-1">Our Services</p>
					<div className="progress mb-5">
						<span className="progress-bar"></span>
					</div>

					<div className="row">
						{servicesData.map((value) => {
							return (
								<div key={value.key} data-aos="flip-left" className="col-md-4 mb-4">
									<div className="card">
										<div className="card-body d-flex flex-column align-items-center">
											<img src={value.image} className="services-card-img" alt="" />
											<h4 className="mt-4">{value.title}</h4>
											<p className="text-center services-card-description">{value.description}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;

// UTILS
import { featuresData } from "src/utils/Constants";

const Features = () => {
	return (
		<>
			<div className="container d-flex flex-column align-items-center my-5">
				<p className="text-center services-title mb-1">Features</p>
				<div className="progress mb-5">
					<span className="progress-bar"></span>
				</div>
				<div className="row">
					{featuresData.map((value) => {
						return (
							<div key={value.key} className="col-md-3 mb-4 d-flex flex-column align-items-center">
								<img src={value.image} alt="" />
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

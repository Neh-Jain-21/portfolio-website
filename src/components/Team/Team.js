// IMAGES
import teamBg from "src/Assets/teams-bg.png";
// UTILS
import { teamData } from "src/utils/Constants";

const Team = () => {
	return (
		<>
			<div data-aos="fade-down" className="container d-flex flex-column align-items-center my-5">
				<p className="text-center services-title mb-1">Our Team</p>
				<div className="progress mb-5">
					<span className="progress-bar"></span>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div data-aos="fade-up-right" className="col-md-6 d-flex flex-column justify-content-center">
							{teamData.map((value) => {
								return (
									<div key={value.key} className="containers-row mb-4">
										<div className="cards-row">
											<div className="box-row">
												<div className="layer-row"></div>
												<div className="card-body content-row d-flex">
													<img src={value.image} className="team-image" alt={value.name} />
													<div className="ms-4 d-flex flex-column justify-content-center">
														<h3>{value.name}</h3>
														<p>{value.area}</p>
														<p>{value.technologies}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div data-aos="fade-up-left" className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
							<img src={teamBg} className="img-fluid" alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Team;

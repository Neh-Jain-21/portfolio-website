const Footer = ({ data }) => {
	return (
		<>
			<div className="container-fluid footer-container mt-5 py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6 col-md-4 mt-5">
							<div className="d-flex flex-column">
								<h3>About Us</h3>
								<p>{data.aboutUs.title}</p>
								<div className="d-flex mt-3">
									<h2>
										{data.aboutUs.socialMedia.map((value) => {
											return <i key={value.logo} style={{ cursor: "pointer" }} onClick={() => window.open(value.link, "_blank")} className={`me-3 bi ${value.logo}`}></i>;
										})}
									</h2>
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 mt-5">
							<div className="d-flex flex-column">
								<h3>Featured Service</h3>
								{data.services.map((value) => (
									<p key={value.title} className="mb-1">
										{value.title}
									</p>
								))}
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 mt-5">
							<div className="d-flex flex-column">
								<h3>Contact</h3>
								<div className="d-flex">
									<h4 className="me-3">
										<i className="bi bi-telephone-fill"></i>
									</h4>
									<div className="d-flex flex-column">
										<p>Phone</p>
										{data.contact.phone.map((value, index) => (
											<p key={index}>{value}</p>
										))}
									</div>
								</div>
								<div className="d-flex mt-3">
									<h4 className="me-3">
										<i className="bi bi-envelope-fill"></i>
									</h4>
									<div className="d-flex flex-column">
										<p>Email</p>
										{data.contact.email.map((value) => (
											<p key={value}>{value}</p>
										))}
									</div>
								</div>
								<div className="d-flex mt-3">
									<h4 className="me-3">
										<i className="bi bi-telephone-fill"></i>
									</h4>
									<div className="d-flex flex-column">
										<p>Address</p>
										<p>{data.contact.address}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;

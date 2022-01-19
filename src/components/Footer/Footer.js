const Footer = () => {
	return (
		<>
			<div className="container-fluid footer-container mt-5 py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6 col-md-4 mt-5">
							<div className="d-flex flex-column">
								<h3>About Us</h3>
								<p>We Provide Thorough Solution for your all web Development needs</p>
								<div className="d-flex mt-3">
									<h2>
										<i className="bi bi-facebook"></i>
										<i className="ms-3 bi bi-twitter"></i>
										<i className="ms-3 bi bi-linkedin"></i>
										<i className="ms-3 bi bi-instagram"></i>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-md-4 mt-5">
							<div className="d-flex flex-column">
								<h3>Featured Service</h3>
								<p className="mb-1">App Development</p>
								<p className="mb-1">Web Development</p>
								<p className="mb-1">Backend Development</p>
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
										<p>+91 123456789</p>
										<p>+91 123456789</p>
									</div>
								</div>
								<div className="d-flex mt-3">
									<h4 className="me-3">
										<i className="bi bi-envelope-fill"></i>
									</h4>
									<div className="d-flex flex-column">
										<p>Email</p>
										<p>info@email.com</p>
									</div>
								</div>
								<div className="d-flex mt-3">
									<h4 className="me-3">
										<i className="bi bi-telephone-fill"></i>
									</h4>
									<div className="d-flex flex-column">
										<p>Address</p>
										<p>Currently Work From Home</p>
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

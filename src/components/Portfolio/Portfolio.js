import { useEffect, useState } from "react";
// UTILS
import { portfolioData } from "src/utils/Constants";

const Portfolio = () => {
	const [activeTab, setActiveTab] = useState({ key: 0, type: "All" });
	const [categories, setCategories] = useState([{ key: 0, type: "All" }]);

	useEffect(() => {
		const categoryData = [...new Set(portfolioData.map((data) => data.category))].map((value, index) => {
			return { key: index + 1, type: value };
		});

		setCategories([...categories, ...categoryData]);
	}, []);

	return (
		<>
			<div className="container d-flex flex-column align-items-center my-5">
				<p className="text-center services-title mb-1" data-aos="fade-left">
					Portfolio
				</p>
				<div className="progress mb-5" data-aos="fade-right">
					<span className="progress-bar"></span>
				</div>

				<ul className="d-flex flex-wrap justify-content-center portfolio-tabs">
					{categories.map((category) => {
						return (
							<li className={category.key === activeTab.key ? "active" : ""} key={category.key} onClick={() => setActiveTab(category)}>
								{category.type}
							</li>
						);
					})}
				</ul>

				<div className="row">
					{portfolioData.map((data) => {
						if (activeTab.type === data.category) {
							return (
								<div key={data.id} className="col-lg-4 col-md-6 mb-5 portfolio-item" data-aos="fade-left" data-aos-duration="2000">
									<img src={data.image} className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>{data.name}</h4>
										<p>{data.category}</p>
										<a href={data.link} className="preview-link" target="_blank">
											<i className="bi bi-link"></i>
										</a>
									</div>
								</div>
							);
						} else if (activeTab.type === "All") {
							return (
								<div key={data.id} className="col-lg-4 col-md-6 mb-5 portfolio-item" data-aos="fade-left" data-aos-duration="2000">
									<img src={data.image} className="img-fluid" alt="" />
									<div className="portfolio-info">
										<h4>{data.name}</h4>
										<p>{data.category}</p>
										<a href={data.link} className="preview-link" target="_blank">
											<i className="bi bi-link"></i>
										</a>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		</>
	);
};

export default Portfolio;

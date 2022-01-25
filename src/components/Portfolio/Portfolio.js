import { useEffect, useState } from "react";

const Portfolio = ({ data }) => {
	const [portfolioData, setPortfolioData] = useState([]);
	const [activeTab, setActiveTab] = useState({ key: 0, type: "All" });
	const [categories, setCategories] = useState([{ key: 0, type: "All" }]);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		const categoryData = [...new Set(data.map((data) => data.category))].map((value, index) => {
			return { key: index + 1, type: value };
		});

		setCategories([...categories, ...categoryData]);
		setPortfolioData(data.slice(0, 6));
	}, []);

	useEffect(() => {
		const tempData = [];

		data.map((d) => {
			if (activeTab.type === "All") {
				tempData.push(d);
			} else if (activeTab.type === d.category) {
				tempData.push(d);
			}
		});

		if (showMore) {
			setPortfolioData(tempData);
		} else {
			setPortfolioData(tempData.slice(0, 6));
		}
	}, [activeTab, showMore]);

	const Card = ({ data }) => {
		return (
			<div className="col-lg-4 col-md-6 mb-5 portfolio-item" data-aos="fade-left" data-aos-duration="2000">
				<img src={require(`src/Assets/${data.image}`)} className="img-fluid" alt="" />
				<div className="portfolio-info">
					<h4>{data.name}</h4>
					<p>{data.category}</p>
					<a href={data.link} className="preview-link" target="_blank">
						<i className="bi bi-link"></i>
					</a>
				</div>
			</div>
		);
	};

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
						return <Card key={data.id} data={data} />;
					})}
				</div>

				<button
					className="btn btn-primary"
					onClick={() => {
						setShowMore(!showMore);
					}}
				>
					{showMore ? "Show Less" : "Show More"}
				</button>
			</div>
		</>
	);
};

export default Portfolio;

// IMAGES
import WebDevImage from "../../Assets/web-development.svg";

const Services = () => {
    const serviceData = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <div className="services-container">
                <div className="container d-flex flex-column align-items-center">
                    <p className="text-center services-title mb-1">Our Services</p>
                    <div className="progress mb-5">
                        <span className="progress-bar"></span>
                    </div>
                    <div className="row">
                        {serviceData.map((value) => {
                            return (
                                <div key={value} className="col-md-4 mb-4">
                                    <div className="card">
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <img src={WebDevImage} className="services-card-img" />
                                            <h4 className="mt-4">Web Development</h4>
                                            <p className="text-center services-card-description">
                                                Web Application Development using latest javascript
                                                frameworks, Angular, React, Vue with backend Rest,Soap,GraphQL
                                                Apis on Node.js, python, php and SQL/No-SQL Database
                                            </p>
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

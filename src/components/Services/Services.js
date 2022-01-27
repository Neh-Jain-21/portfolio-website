
const Services = (props) => {
  return (
    <>
      <div data-aos="zoom-in" className="services-container">
        <div className="d-flex flex-column align-items-center">
          <p className="text-center services-title mb-1">Our Services</p>
          <div className="progress mb-5">
            <span className="progress-bar"></span>
          </div>

          <div className="container-fluid">
            <div className="row">
              {props.data.map((value) => {
                return (
                  <div key={value.key} className="containers col-md-4 mb-5">
                    <div className="cards">
                      <div className="rise"></div>
                      <div
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        className="content"
                      >
                        <img
                          className="services-card-img"
                          src={require(`../../Assets/${value.image}`)}
                          alt=""
                        />
                        <h4 className="mt-4">{value.title}</h4>
                        <p className="text-center">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

const Vision = () => {
  return (
    <section className="tf__mission mt_100 xs_mt_70" style={{ backgroundImage: "url(" + "/images/mission_bg.png" + ")" }} >
      <div className="tf__mission_overlay pt_70 xs_pt_40 pb_100 xs_pb_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-10 col-lg-7">
              <div className="tf__mission_text">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="far fa-bullseye-arrow"></i>
                    </div>
                    <div className="text">
                      <h4>vision</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
                        perspiciatis voluptatum odit.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-lightbulb-on"></i>
                    </div>
                    <div className="text">
                      <h4>mission</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
                        perspiciatis voluptatum odit.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="far fa-gem"></i>
                    </div>
                    <div className="text">
                      <h4>goals</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
                        perspiciatis voluptatum odit.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
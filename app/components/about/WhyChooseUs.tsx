'use client'
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="tf__about_choose mt_100 xs_mt_70" style={{ marginBottom: "50px", padding: '0 20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7 wow fadeInLeft" data-wow-duration="1s">
            <div className="tf__section_heading mb_25">
              <h4>Why choose us</h4>
              <h2>Why we are the best</h2>
            </div>
            <div className="tf__about_choose_text">
              <p>
                At Kansha Hibachi Express, we're committed to serving you more than just exceptional food. Our friendly and attentive staff are here to make your visit an enjoyable one, providing prompt service and answering any questions you may have. We take pride in creating a dining experience that not only tantalizes your taste buds but also leaves you with a smile
              </p>
              <div className="row">
                <div className="col-xl-6">
                  <div className="tf__about_choose_text_box">
                    <span><i className="fas fa-users"></i></span>
                    <h4>Community Engagemen</h4>
                    <p>We cherish our bond with the community and actively participate in local events and initiatives. We believe in giving back to the people who have supported us on this journey.</p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tf__about_choose_text_box">
                    <span><i className="fas fa-chess-rook"></i></span>
                    <h4>Commitment to Quality</h4>
                    <p>From the ingredients we select to the presentation on your plate, we are committed to delivering the highest quality in every aspect of your dining experience.</p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tf__about_choose_text_box">
                    <span><i className="fas fa-book"></i></span>
                    <h4>Exquisite Menu Selection</h4>
                    <p>Our thoughtfully crafted menu offers a wide selection of hibachi delights, including mouthwatering entrees, flavorful sushi rolls, and savory appetizers. There's something for every palate to enjoy.</p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tf__about_choose_text_box">
                    <span><i className="fas fa-headset"></i></span>
                    <h4>Continuous Improvement</h4>
                    <p>We constantly strive to enhance our menu, service, and overall experience to ensure that your next visit is even better than the last.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5 wow fadeInRight" data-wow-duration="1s">
            <div className="tf__about_choose_img">
              <Image height={100} width={100} src="/images/about_2.jpg" alt="about kansha hibachi express" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
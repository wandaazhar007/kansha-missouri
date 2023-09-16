import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './whyChooseUs2.scss';
import Image from "next/image";
import { faBook, faChessRook, faHeadset, faUser } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUs2 = () => {
  return (
    <section className="whyChooseUs2">
      <div className="container">
        <div className="boxContainer">
          <div className="col-left">
            <h3>Why Choose Us</h3>
            <h1>Why We Are The Best</h1>
            <p>At Kansha Hibachi Express, we're committed to serving you more than just exceptional food. Our friendly and attentive staff are here to make your visit an enjoyable one, providing prompt service and answering any questions you may have. We take pride in creating a dining experience that not only tantalizes your taste buds but also leaves you with a smile</p>
            <div className="point">
              <div className="box">
                <span>
                  <FontAwesomeIcon icon={faUser} className='icons' />
                </span>
                <h1>Community Engagemen</h1>
                <p>We cherish our bond with the community and actively participate in local events and initiatives. We believe in giving back to the people who have supported us on this journey.</p>
              </div>
              <div className="box">
                <span>
                  <FontAwesomeIcon icon={faChessRook} className='icons' />
                </span>
                <h1>Commitment to Quality</h1>
                <p>From the ingredients we select to the presentation on your plate, we are committed to delivering the highest quality in every aspect of your dining experience.</p>
              </div>
              <div className="box">
                <span>
                  <FontAwesomeIcon icon={faBook} className='icons' />
                </span>
                <h1>Exquisite Menu Selection</h1>
                <p>Our thoughtfully crafted menu offers a wide selection of hibachi delights, including mouthwatering entrees, flavorful sushi rolls, and savory appetizers. There's something for every palate to enjoy.</p>
              </div>
              <div className="box">
                <span>
                  <FontAwesomeIcon icon={faHeadset} className='icons' />
                </span>
                <h1>Continuous Improvement</h1>
                <p>We constantly strive to enhance our menu, service, and overall experience to ensure that your next visit is even better than the last.</p>
              </div>
            </div>
          </div>
          <div className="col-right">
            <div className="image">
              <Image height={100} width={100} src="/images/about_2.jpg" alt="about kansha hibachi express" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs2;
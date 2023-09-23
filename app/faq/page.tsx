import './faq.scss';

export const metadata = {
  title: 'We Answer some of your questions here',
  description: 'Find answers to your questions at Kansha Hibachi Express FAQ. Get insights on reservations, menu items, hibachi experience, and more. Your dining experience matters to us, and we are here to provide you with the information you need.',
}

const FaqPage: React.FC = () => {
  return (
    <section className="faq faq-page">
      <div className="container">
        <div className="box-container">
          <div className="header">
            <h1>Frequently Asked Questions</h1>
            <p>Let&apos;s answer some of your questions.</p>
          </div>
          <ul className="accordion">
            <li>
              <input type="radio" name='accordion' id="first" />
              <label htmlFor="first">What are your operating hours?</label>
              <div className="content">
                <p>
                  Our operating hours are (<b>Monday to Saturday 11:00AM - 2:30PM, and 04:00PM - 09:00PM</b>). (<b>Sunday 04:00PM - 09:00PM</b>). We're open 7 days of the week for lunch and dinner, so you can satisfy your hibachi cravings at your convenience.
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="second" />
              <label htmlFor="second">Do you offer delivery?</label>
              <div className="content">
                <p>Unfortunately, We don't offer delivery.</p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="thrid" />
              <label htmlFor="thrid">Is the food cooked in front of the guests?</label>
              <div className="content">
                <p>Unfortunately, We don't cook in front of guests</p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="four" />
              <label htmlFor="four">Are vegetarian options available?</label>
              <div className="content">
                <p>Yes, we have vegetarian options available, including a variety of fresh vegetables and tofu. our chefs will do their best to accommodate you.</p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="five" />
              <label htmlFor="five">Can I customize my meal?</label>
              <div className="content">
                <p>Absolutely! At Kansha Hibachi Express, we offer a wide selection of fresh ingredients, including proteins, vegetables, and sauces. You can customize your meal by choosing your preferred combination of ingredients to create a delicious and personalized hibachi dish.</p>
              </div>
            </li>
            <li>
              <input type="radio" name='accordion' id="six" />
              <label htmlFor="six">What is hibachi cooking?</label>
              <div className="content">
                <p>Hibachi cooking is a traditional Japanese grilling technique where skilled chefs cook a variety of meats, seafood, and vegetables on a flat iron grill.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FaqPage;
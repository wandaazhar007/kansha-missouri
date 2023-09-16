'use client'
import './formContact.scss';
import { faArrowUpRightFromSquare, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const FormContact: React.FC = () => {
  return (
    <>
      <div className="container">
        <section className="formContact">
          <div className=" box box1">
            <h1>We Are Here...</h1>
            <p>We'd love to hear from you! Whether you have a question, <br /> want to book a table, or simply crave a sizzling hibachi experience</p>
          </div>
          <div className=" box box2">
            <h1>Let's Talk.</h1>
            <p>Have a question or want to make a reservation? Give us a call and our friendly staff will be delighted to assist you.</p>
            <Link href="tel:+16604299074" target="_blank" rel="noreferrer">
              <button><FontAwesomeIcon icon={faPhone} /> Call Us</button>
            </Link>
          </div>
          <div className="box box3">
            <div className="title">
              <div className="boxImage">
                <Image width={500} height={500} src="/images/logo-kansha-header.png" alt="RegFood" className="logoImage" />
              </div>
            </div>
            <div className="address">
              <h3>Address:</h3>
              <p>303 Cooper Blvd Suite I, Warrensburg, MO 64093, United States</p>
            </div>
            <div className="hours">
              <h3>Hours:</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="days">Sun:</td>
                    <td className="clock">04:00 - 09:00</td>
                  </tr>
                  <tr>
                    <td className="days">Mon:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Tue:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Wed:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Thu:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Fri:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                  <tr>
                    <td className="days">Sat:</td>
                    <td className="clock">11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <table>
                <tbody>
                  <tr>
                    <td className='titleContact'>Phone:</td>
                    <td className="detailContact"><Link href="tel:+16604299074" target="_blank" rel="noreferrer">(660) 429-9074 <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></Link> </td>
                  </tr>
                  <tr>
                    <td className="titleContact">E-mail:</td>
                    <td className="detailContact"><Link href="mailto:ss.kansha@gmail.com" target="_blank" rel="noreferrer">ss.kansha@gmail.com <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" box box4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12442.744552741196!2d-93.7368245!3d38.7709022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c3e304e1e59d4d%3A0xd91636cc2fb9e159!2sKansha%20Hibachi%20Express!5e0!3m2!1sen!2sus!4v1685732677839!5m2!1sen!2sus"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className=" box box5">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <ul>
              <li>Posts: 40</li>
              <li>Followers: 179</li>
              <li>Following: 97</li>
            </ul>
            <Link href="https://www.instagram.com/kansha_express/" target="_blank" rel="noreferrer"><span>Follow Us <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /> </span></Link>
          </div>
          <div className=" box box6">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <Link href="https://www.facebook.com/kanshahibachiexpress/" target="_blank" rel="noreferrer">
              <button>Join Us</button>
            </Link>
          </div>
          <div className=" box box7">
            <h1>Stay Connected...</h1>
            <p>Stay connected with us on social media to get the latest updates, exclusive offers, and behind-the-scenes peeks into the hibachi magic happening at Kansha Hibachi Express. </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default FormContact;
import Link from "next/link";

const Topbar: React.FC = () => {
  return (
    <section className="tf__topbar">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-sm-6 col-md-8">
            <ul className="tf__topbar_info d-flex flex-wrap d-none d-sm-flex">
              <li><Link href="mailto:ss.kansha@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i> ss.kansha@gmail.com</Link>
              </li>
              <li className="d-none d-md-block"><Link href="tel:+16604299074" target="_blank" rel="noreferrer"><i className="fas fa-phone-alt"></i>
                (660) 429-9074</Link></li>
            </ul>
          </div>
          <div className="col-xl-6 col-sm-6 col-md-4">
            <ul className="topbar_icon d-flex flex-wrap">
              <li><Link href="https://www.facebook.com/kanshahibachiexpress/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></Link> </li>
              <li><Link href="https://www.instagram.com/kansha_express/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></Link> </li>
              <li><Link href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank" rel="noreferrer"><i className="fab fa-google"></i></Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topbar;
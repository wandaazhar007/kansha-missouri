import Link from "next/link";

const BreadcrumbGalery: React.FC = () => {
  return (
    <section className="tf__breadcrumb" style={{ backgroundImage: "url(" + "/images/breadcrumb_bg.jpg" + ")" }}>
      <div className="tf__breadcrumb_overlay">
        <div className="container">
          <div className="tf__breadcrumb_text">
            <h1>Our Galery</h1>
            <ul>
              <li><Link href="/">home</Link></li>
              <li><Link href="/galery">our galery</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreadcrumbGalery;
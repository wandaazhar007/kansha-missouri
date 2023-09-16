import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './goToMenu.scss';
import Link from 'next/link';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const GoToMenu = () => {
  return (
    <section className="goToMenu">
      <div className="container">

        <div className="boxContainer">
          <div className="bgImage image1">
            <Image src="/images/tree_2.png" width={200} height={200} alt="Kansha Hibachi Express" className="bgImage" />
          </div>
          <div className="bgImage image2">
            <Image src="/images/tree_4.png" width={200} height={200} alt="Kansha Hibachi Express" className="bgImage" />
          </div>
          <div className="bgImage image3">
            <Image src="/images/tree_3.png" width={200} height={200} alt="Kansha Hibachi Express" className="bgImage" />
          </div>
          <div className="bgImage image4">
            <Image src="/images/tree_5.png" width={200} height={200} alt="Kansha Hibachi Express" className="bgImage" />
          </div>
          <Link href="/menu">
            <button>Go To Our Menu <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GoToMenu;
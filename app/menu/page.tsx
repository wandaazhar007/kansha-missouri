import './menu.scss';
import BoxMenu from '../components/menu/boxMenu/BoxMenu';
import SearchMenu from '../components/menu/searchMenu/SearchMenu';

export const metadata = {
  title: 'Kansha Hibachi Express Menu',
  description: 'Explore the exquisite menu of Kansha Hibachi Express. Indulge in a diverse selection of authentic hibachi dishes, flavorful sushi rolls, and savory appetizers. Immerse yourself in a culinary journey that celebrates taste, artistry, and the joy of savoring every bite.',
}

const MenuPage: React.FC = () => {
  return (
    <section className="menuPage">
      <div className="container">
        <SearchMenu />
        <h1 className="header">Kansha Hibachi Express Menu</h1>
        <BoxMenu />
      </div>
    </section>
  );
}

export default MenuPage;
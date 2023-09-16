'use client'
import './searchMenu.scss';
import Image from "next/image";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import axios from "axios";
import ModalProduct from '../modalProduct/ModalProduct';
import { SearchContext } from '@/app/context/SearchContext';

const SearchMenu: React.FC = () => {
  const searchContext: any = useContext(SearchContext);
  const setQuerySearch = searchContext.setQuerySearch;
  const querySearch = searchContext.querySearch;
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [propId, setPropId] = useState('');
  const [propName, setPropName] = useState('');
  const [propPrice, setPropPrice] = useState(0);
  const [msg, setMsg] = useState("");
  const [menus, setMenus] = useState([]);

  const getSearch = async () => {
    const responseSearch = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_SEARCH}search_query=${querySearch}`);
    setTimeout(() => {
      setMenus(responseSearch.data.result);
      setIsLoading(false)
    }, 1000)
  }

  const handleSearch = (e: any) => {
    setQuerySearch(e.target.value);
    setIsLoading(true);
    getSearch();

  }

  const handleModal = (id: any, name: string, price: any) => {
    setOpenModal(true);
    setPropId(id);
    setPropName(name);
    setPropPrice(price);
  }

  const handleReset = () => {
    setQuerySearch('');
  }

  return (
    <>
      <section className="products">
        <div className="container">
          <div className="boxContainer">

            <div className="search-menu">
              <input type="text" name='message' className="search" placeholder="Search Menu Here..." onChange={handleSearch} value={querySearch} />
            </div>
            {querySearch ?
              (<>
                {isLoading &&
                  <div className="content">
                    {menus.map((menu: any, index) => (
                      <div className="box" key={menu.id}>
                        <div className="skeleton box-images-skeleton">
                        </div>
                        <div className="box-contents">
                          <h1 className="title skeleton skeleton-text-title"></h1>
                          <p className="price skeleton skeleton-text-price"></p>
                          <div className="footer-products">
                            <div className="desc skeleton skeleton-text-desc"></div>
                            <div className="desc skeleton skeleton-text-desc"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                }

                {!isLoading &&
                  <>
                    <div className="reset">
                      <button onClick={handleReset}>{querySearch} <FontAwesomeIcon icon={faClose} className='icon' /> </button>
                    </div>
                    <div className="content">
                      {menus.map((menu: any, index) => (
                        <>
                          <div className="box" key={menu.id} onClick={() => handleModal(menu.id, menu.name, parseFloat(menu.price))}>
                            <div className="box-images">
                              <Image height={300} width={300} src={menu.urlImage} alt={menu.name} />
                            </div>
                            <div className="box-contents">
                              <h1 className="title" >{menu.name}</h1>
                              {/* <p className="price">${menu.price}</p> */}
                              {/* `$${menu.price}` */}
                              <p className="price">{menu.name == 'Lobster' ? 'Market Price' : menu.name == 'Hibachi Lobster' ? 'Market Price' : menu.name == 'Lobster Roll' ? 'Market Price' : `$${menu.price}`}</p>
                              <div className="footer-products">
                                <div className="desc">
                                  <p>{menu.desc.substring(0, 40)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                }
              </>)
              : ''

            }

          </div>
        </div>
      </section>

      <ModalProduct openModal={openModal} closeModal={() => setOpenModal(false)} propId={propId} propName={propName} propPrice={propPrice} />
    </>
  );
}

export default SearchMenu;
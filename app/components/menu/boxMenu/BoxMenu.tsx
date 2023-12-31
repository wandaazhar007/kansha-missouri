'use client'
import './boxMenu.scss';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState, useContext } from "react";
import ModalProduct from '../modalProduct/ModalProduct';
import { SearchContext } from '../../../context/SearchContext'
import { getMenuProps } from '../../types/types';

const BoxMenu: React.FC = () => {
  const searchContext: any = useContext(SearchContext);
  const querySearch = searchContext.querySearch;
  const [openModal, setOpenModal] = useState<any>(false);
  const [propId, setPropId] = useState(0);
  const [limit, setLimit] = useState("");
  const [hibachi, setHibachi] = useState([]);
  const [sushi, setSushi] = useState([]);
  const [sideOrder, setSideOrder] = useState([]);
  const [appetizer, setAppetizer] = useState([]);
  const [addOns, setAddOns] = useState([]);
  const [bentoBox, setBentoBox] = useState([]);
  const [page, setPage] = useState(0);

  const getMenuHibachi = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_PER_CATEGORY}search_query=2&page=${page}&limit=${limit}`)
    setHibachi(response.data.result);
    // console.log('first', page)
  }

  const getMenuSushi = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_PER_CATEGORY}search_query=6&page=${page}&limit=${limit}`)
    setSushi(response.data.result);
  }

  const getMenuSideOrder = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_PER_CATEGORY}search_query=5&page=${page}&limit=${limit}`)
    setSideOrder(response.data.result);
  }

  const getMenuAppetizer = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_PER_CATEGORY}search_query=1&page=${page}&limit=${limit}`)
    setAppetizer(response.data.result);
  }

  const getMenuAddOns = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_PER_CATEGORY}search_query=4&page=${page}&limit=${limit}`)
    setAddOns(response.data.result);
  }

  const getMenuBentoBox = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_PER_CATEGORY}search_query=3&page=${page}&limit=${limit}`)
    setBentoBox(response.data.result);
  }

  useEffect(() => {
    getMenuHibachi();
    getMenuSushi();
    getMenuSideOrder();
    getMenuAppetizer();
    getMenuAddOns();
    getMenuBentoBox();
  }, []);

  const handleModal = (id: number) => {
    // const handleModal = ({ slug, id, name, price }: ModalType) => {
    setOpenModal(true);
    setPropId(id);
  }

  return (
    <>
      <div className="boxContainerMenu">
        {!querySearch ? (
          <>
            <div className="category">
              <h1 className="title">HIBACHI</h1>
              {hibachi.map((menu: getMenuProps) => (
                <>
                  <div className="box" key={menu.id} onClick={() => handleModal(menu.id)}>
                    <div className="boxImage" key={menu.id}>
                      <Image className='imm' src={menu.urlImage} width={100} height={100} alt='kansha hibachi' />
                    </div>
                    <div className="col-right">
                      <div className="top">
                        <h1 className="title">{menu.name}</h1>
                        <h3 className='price'>{menu.name === 'Hibachi Lobster' ? 'Market Price' : menu.price}</h3>
                      </div>
                      <p className='desc'>{menu.desc.substring(0, 80)}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="category">
              <h1 className="title">SIDE ORDER</h1>
              {sideOrder.map((menu: getMenuProps) => (
                <>
                  <div className="box" key={menu.id} onClick={() => handleModal(menu.id)}>
                    <div className="boxImage">
                      <Image className='imm' src={menu.urlImage} width={100} height={100} alt='kansha hibachi' />
                    </div>
                    <div className="col-right">
                      <div className="top">
                        <h1 className="title">{menu.name}</h1>
                        <h3 className='price'>{menu.price}</h3>
                      </div>
                      <p className='desc'>{menu.desc.substring(0, 80)}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="category">
              <h1 className="title">APPETIZER</h1>
              {appetizer.map((menu: getMenuProps) => (
                <>
                  <div className="box" key={menu.id} onClick={() => handleModal(menu.id)}>
                    <div className="boxImage">
                      <Image className='imm' src={menu.urlImage} width={100} height={100} alt='kansha hibachi' />
                    </div>
                    <div className="col-right">
                      <div className="top">
                        <h1 className="title">{menu.name}</h1>
                        <h3 className='price'>{menu.price}</h3>
                      </div>
                      <p className='desc'>{menu.desc.substring(0, 80)}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="category">
              <h1 className="title">ADD ONS</h1>
              {addOns.map((menu: getMenuProps) => (
                <>
                  <div className="box" key={menu.id} onClick={() => handleModal(menu.id)}>
                    <div className="boxImage">
                      <Image className='imm' src={menu.urlImage} width={100} height={100} alt='kansha hibachi' />
                    </div>
                    <div className="col-right">
                      <div className="top">
                        <h1 className="title">{menu.name}</h1>
                        <h3 className='price'>{menu.name === 'Lobster' ? 'Market Price' : menu.price}</h3>
                      </div>
                      <p className='desc'>{menu.desc.substring(0, 80)}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="category">
              <h1 className="title">BENTO BOX</h1>
              {bentoBox.map((menu: getMenuProps) => (
                <>
                  <div className="box" key={menu.id} onClick={() => handleModal(menu.id)}>
                    <div className="boxImage">
                      <Image className='imm' src={menu.urlImage} width={100} height={100} alt='kansha hibachi' />
                    </div>
                    <div className="col-right">
                      <div className="top">
                        <h1 className="title">{menu.name}</h1>
                        <h3 className='price'>{menu.price}</h3>
                      </div>
                      <p className='desc'>{menu.desc.substring(0, 80)}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="category">
              <h1 className="title">SUSHI ROLL</h1>
              {sushi.map((menu: getMenuProps) => (
                <>
                  <div className="box" key={menu.id} onClick={() => handleModal(menu.id)}>
                    <div className="boxImage">
                      <Image className='imm' src={menu.urlImage} width={100} height={100} alt='kansha hibachi' />
                    </div>
                    <div className="col-right">
                      <div className="top">
                        <h1 className="title">{menu.name}</h1>
                        <h3 className='price'>{menu.name === 'Lobster Roll' ? 'Market Price' : menu.price}</h3>
                      </div>
                      <p className='desc'>{menu.desc.substring(0, 80)}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        ) : ''}

      </div>
      {/* {openModal ? (
        <ModalProduct openModal={openModal} closeModal={() => setOpenModal(false)} propId={propId} />
      ) : (<></>)} */}
      {openModal && <ModalProduct openModal={openModal} closeModal={() => setOpenModal(false)} propId={propId} />}
    </>
  );
}

export default BoxMenu;
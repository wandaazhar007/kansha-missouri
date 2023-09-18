import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from '../../context/CartContext'

const CartComponent = ({ id, quantity }: any) => {
  const cart = useContext(CartContext);
  // const id = id;
  // const quantity = quantity;
  const [name, setname] = useState("");
  const [price, setPrice] = useState(0);
  const [urlImage, setUrlImage] = useState("");

  const getProductData = async (id: number) => {
    // const response = await fetch('https://kanshaapi.birojasa-sahabat.com/all-products');
    const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_ALL}`);
    const data = await response.json();
    console.log('data', data)
    const productData = data.find((product: any) => product.id === id);
    return productData;
  }
  getProductData(id).then((result: any) => {
    setname(result.name);
    setPrice(result.price);
    setUrlImage(result.urlImage)
  })

  return (
    <div className="box">
      <div className="image">
        <Image src={urlImage} width={100} height={100} alt="images" />
      </div>
      <div className="title">
        <div className="detail">
          <p className="name-product">{name}</p>
          <p className="price-product">${price}</p>
        </div>
        <div className="button">
          <span onClick={() => cart.removeOneFromCart(id)}>-</span>
          <span>{quantity}</span>
          <span onClick={() => cart.addOneToCart(id, name, price)}>+</span>
        </div>
      </div>
      <div className="delete">
        <span>${(quantity * price).toFixed(2)}</span>
        <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => cart.deleteFromCart(id)} />
      </div>
    </div>
  );
}

export default CartComponent;
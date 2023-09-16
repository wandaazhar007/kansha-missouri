import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "@/app/context/cartContext";

const CartComponent = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const [name, setname] = useState("");
  const [price, setPrice] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const getProductData = async (id) => {
    const response = await fetch('https://kanshaapi.birojasa-sahabat.com/all-products');
    const data = await response.json();
    const productData = data.find(product => product.id === id);
    return productData;
  }
  getProductData(id).then((result) => {
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
          <span onClick={() => cart.addOneToCart(id)}>+</span>
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
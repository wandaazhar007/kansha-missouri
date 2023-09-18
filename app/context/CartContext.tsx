'use client'
import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext({items: []});
export const CartContext = createContext({
  items: [],
  getProductQuantity: () => { },
  addOneToCart: () => { },
  removeOneFromCart: () => { },
  deleteFromCart: () => { },
  getTotalCost: () => { }
});


export function CartProvider({ children }: any) {


  // const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart_kansha' || '[]'));

  let cartFromLocalStorage = [];
  // useEffect(() => {
  if (typeof window !== 'undefined') {
    cartFromLocalStorage = JSON.parse(localStorage.getItem('cart_kansha' || '[]'));
    // console.log(cartFromLocalStorage);

  }
  // }, []);
  const [cartProducts, setCartProducts] = useState(cartFromLocalStorage || []);



  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart_kansha', JSON.stringify(cartProducts));
      // const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart_kansha' || '[]'));
      // console.log(storedData);
    }
    // localStorage.setItem('cart_kansha', JSON.stringify(cartProducts));
  }, [cartProducts]);

  function getProductQuantity(id: number) {
    const quantity = cartProducts.find((product: any) => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id: number, name: string, price: number) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, name: name, price: price, quantity: 1 }]);
    } else {
      setCartProducts(cartProducts.map((product: any) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product));
    }
  }

  function removeOneFromCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product: any) =>
          product.id === id                                // if condition
            ? { ...product, quantity: product.quantity - 1 } // if statement is true
            : product                                        // if statement is false
        )
      )
    }
  }

  function deleteFromCart(id: any) {
    setCartProducts((cartProducts: any) => cartProducts.filter((currentProduct: any) => {
      return currentProduct.id != id;
    }))
  }

  function getTotalCost() {
    let totalCost = 0;
    const amount = cartProducts.reduce((sum: any, product: any) => sum + (product.price * product.quantity), 0)

    totalCost += amount
    return totalCost;
  }

  const contextValue: any = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )

}

export default CartProvider;
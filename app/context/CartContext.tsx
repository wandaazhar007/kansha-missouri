// 'use client'
// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext({
//   items: [],
//   getProductQuantity: () => { },
//   addOneToCart: (id: number, name: string, price: number) => { },
//   removeOneFromCart: (id: number) => { },
//   deleteFromCart: (id: number) => { },
//   getTotalCost: (): any => { return 0 }
// });


// export function CartProvider({ children }: any) {
//   let cartFromLocalStorage = [];
//   if (typeof window !== 'undefined') {
//     cartFromLocalStorage = JSON.parse(localStorage.getItem('cart_kansha' || []));

//   }
//   const [cartProducts, setCartProducts] = useState(cartFromLocalStorage || []);



//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('cart_kansha', JSON.stringify(cartProducts));
//     }
//   }, [cartProducts]);

//   function getProductQuantity(id: number) {
//     const quantity = cartProducts.find((product: any) => product.id === id)?.quantity
//     if (quantity === undefined) {
//       return 0;
//     }
//     return quantity;
//   }

//   function addOneToCart(id: number, productName: string, price: number) {
//     const quantity = getProductQuantity(id);
//     if (quantity === 0) {
//       setCartProducts([...cartProducts, { id: id, productName: productName, price: price, quantity: 1 }]);
//     } else {
//       setCartProducts(cartProducts.map((product: any) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product));
//     }
//   }

//   function removeOneFromCart(id: number) {
//     const quantity = getProductQuantity(id);

//     if (quantity == 1) {
//       deleteFromCart(id);
//     } else {
//       setCartProducts(
//         cartProducts.map((product: any) =>
//           product.id === id                                
//             ? { ...product, quantity: product.quantity - 1 } 
//             : product                                        
//         )
//       )
//     }
//   }

//   function deleteFromCart(id: any) {
//     setCartProducts((cartProducts: any) => cartProducts.filter((currentProduct: any) => {
//       return currentProduct.id != id;
//     }))
//   }

//   function getTotalCost() {
//     let totalCost = 0;
//     const amount = cartProducts.reduce((sum: any, product: any) => sum + (product.price * product.quantity), 0)

//     totalCost += amount
//     return totalCost;
//   }

//   const contextValue: any = {
//     items: cartProducts,
//     getProductQuantity,
//     addOneToCart,
//     removeOneFromCart,
//     deleteFromCart,
//     getTotalCost
//   }

//   return (
//     <CartContext.Provider value={contextValue}>
//       {children}
//     </CartContext.Provider>
//   )

// }

// export default CartProvider;
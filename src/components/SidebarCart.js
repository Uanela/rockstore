import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";

export default function SidebarCart({
  setShowSidebarCart,
  showSidebarCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
  addToCartTotal,
}) {
  return (
    <aside className={`sidebar-cart ${showSidebarCart && "show"}`}>
      <div className="top">
        <h3>Seu carrinho</h3>
        <button onClick={() => setShowSidebarCart(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className="sidebar-products-list">
        {selectedProducts.map((product) => (
          <SidebarProduct
            key={product.id}
            {...product}
            removeProductFromCart={removeProductFromCart}
            addToCartTotal={addToCartTotal}
          />
        ))}
      </div>

      {cartTotal === 0 ? (
        <i>Seu carrinho está vazio</i>
      ) : (
        <>
          <div className="total-container">
            <b>Total: </b> {cartTotal} Mzn
          </div>

          <Link to="/cart/checkout" className="btn-icon">
            <span>Pagar Agora</span>
            <FontAwesomeIcon icon={faMoneyBill} />
          </Link>
        </>
      )}
    </aside>
  );
}

import React from "react";

import "./Checkout.css";

export default function CheckoutCard(props) {
  const { product } = props;
  return (
    <div style={{ backgroundColor: "#D3D3D3", padding: "20px" }}>
      <div
        className="CheckoutCardProducts"
        // style={{
        //   padding: "20px",
        //   border: "2px solid ",
        //   borderRadius: "20px",
        //   backgroundColor: "white",
        //   display: "flex",
        //   justifyContent: "space-around",
        //   maxHeight: "200px",
        //   alignItems: "center",
        // }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "10%", height: "100px" }}
        />
        <div style={{ width: "140px", wordBreak: "break-word" }}>
          {product.title}
        </div>
        <div>RS.{product.price}</div>
        <div
          className="checkout-Bar-section"
          // style={{
          //   padding: "5px",
          //   border: "2px solid ",
          //   borderRadius: "5px",
          //   backgroundColor: "#D3D3D3",
          //   display: "flex",
          //   justifyContent: "space-between",
          //   maxHeight: "40px",
          // }}
        >
          <p style={{ marginRight: "10px" }}>selected:{product.quantity}</p>
          <p style={{ marginRight: "10px" }}>
            total amount: {product.price * product.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}

import { getByPlaceholderText } from "@testing-library/react";
import React from "react";

export default function OrderPage() {
  return (
    <>
      <div className="orderPageHeader">
        <h1>Teknolojik Yemekler</h1>
        <div>
          Anasayfa -{" "}
          <span style={{ color: "white", fontWeight: "bold" }}>
            Sipariş Oluştur
          </span>
        </div>
      </div>
      <div className="container">
        <div>
        <div>
          <h2>Position Absolute Acı Pizza</h2>
        </div>
    
        <div className="headerPrice">
           
               <div>85.50₺</div>
               <div>
                <span>4.9</span>
                <span>{"(200)"}</span>
               </div>
               
           
        </div>
        </div>
      </div>
    </>
  );
}

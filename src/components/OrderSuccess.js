import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const location = useLocation();
  const formData = location.state.formData;
  console.log(formData);

  return (
    <div className="maindivcenter">
      <h1>Teknolojik Yemekler</h1>
      <div className="containerAlign">
        <div>TEBRİKLER! </div>
        <div>SİPARİŞİNİZ ALINDI!</div>
        </div> 
        <div style={{color: "white", marginBottom:"20px"}}>
          <p>Siparişinizin detayları aşağıdan görüntülenebilir.</p>
        <hr/>
        </div>
        <div className="success-context">
        <p style={{fontWeight: "900"}}>{formData.pizzaSelectionName}</p>
        <p>Sipariş Tutarı: {formData.total}₺</p>
        <p>Seçimler Tutarı: {formData.selectionPrice}₺</p>
        <p>Pizza Tutarı: {formData.quantityPizzaPrice}₺</p>
        <p>Adet: {formData.quantity}</p>
        <p>Boyut Seçimi: {formData.sizeSelection}</p>
        <p>Hamur Seçimi: {formData.doughSelection}</p>
        <p>Sipariş Notu:
          {formData.pizzaOrderNote}
          {formData.pizzaOrderNote === "" ? "(Not Yok)" : ""} 
        </p>
      </div>  
      <Link to="/" >
        <button className="order-button">Ana Sayfaya Dön</button>
      </Link>
    </div>
  );
}

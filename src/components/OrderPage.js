import { getByPlaceholderText } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';


export default function OrderPage() {

  const [quantity, setQuantity] = useState(1);
  const [sizeSelection, setSizeSelection] = useState("Küçük (Standart)");
  const [doughSelection, setDoughSelection] = useState("Standart");
  const [quantityPizzaPrice, setQuantityPizzaPrice] = useState(85.5);
  const [total, setTotal] = useState(quantityPizzaPrice);
  const [selectionPrice, setSelectionPrice] = useState(0);
  const [extrasData, setextrasData] = useState({
    Pepperoni: false,
    Tavuk: false,
    Misir: false,
    Sarimsak: false,
    Ananas: false,
    Sosis: false,
    Sogan: false,
    Salam: false,
    Biber: false,
    Kabak: false,
    Jambon: false,
    Domates: false,
    Jalepeno: false,
    Sucuk: false,
  });
  const [extrasCount, setExtrasCount] = useState(0);
  const [pizzaSelectionName, setPizzaSelectionName] = useState("Position Absolute Acı Pizza")
  const [pizzaOrderNote, setPizzaOrderNote] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (sizeSelection.includes("Küçük (Standart)")) {
      setQuantityPizzaPrice(85.5 * quantity);
    } else if (sizeSelection.includes("Orta (+10TL)")) {
      setQuantityPizzaPrice(95.5 * quantity);
    } else if (sizeSelection.includes("Büyük (+20 TL)")) {
      setQuantityPizzaPrice(105.5 * quantity);
    } else {
      setQuantityPizzaPrice(quantityPizzaPrice);
    }}, [sizeSelection, quantity]);

    const handleNoteChange = (e) => {
      setPizzaOrderNote(e.target.value);
    }

  const handleChangeSizeSelection = (e) => {
    setSizeSelection(e.target.value);
  };

  const handleDoughSelection = (e) => {
    setDoughSelection(e.target.value);
  };

  const handleExtraChange = (e) => {
    let { name, type, checked } = e.target;
    if (Object.values(extrasData).filter((e) => e === true).length <= 9) {
      setextrasData({
        ...extrasData,
        [name]: type === "checkbox" ? checked : true,
      });
    } else {
      setextrasData({
        ...extrasData,
        [name]: type === "checkbox" ? false : true,
      });
    }
  };

  //Extra Selectionların datalarının tutulması
  useEffect(() => {
    setextrasData(extrasData);
    setExtrasCount(Object.values(extrasData).filter((e) => e === true).length);
    console.log(extrasData);
  }, [extrasData, quantity]);

  //Adetlerin 1'den az olmasını engelleyen fonksiyon
  const increment = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };
  //
  const decrement = (e) => {
    e.preventDefault();
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity);
  };

  useEffect(() => {
    let selected = Object.values(extrasData).filter((e) => e === true).length;
    if (selected <= 10) {
      setSelectionPrice(selected * 5 * quantity);
    }
  }, [extrasData, quantity]);

  useEffect(() => {
    setTotal(quantityPizzaPrice + selectionPrice);
  }, [quantityPizzaPrice, selectionPrice]);

  const [formData, setFormData] = useState({
    quantity: "",
    sizeSelection: "",
    doughSelection: "",
    extrasData: "",
    quantityPizzaPrice: "",
    total: "",
    selectionPrice: "",
    pizzaSelectionName: "",
    pizzaOrderNote: "",
  });

  useEffect(() => {
    setFormData((e) => ({ ...e, quantity: quantity }));
    setFormData((e) => ({ ...e, sizeSelection: sizeSelection }));
    setFormData((e) => ({ ...e, doughSelection: doughSelection }));
    setFormData((e) => ({ ...e, extrasData: extrasData }));
    setFormData((e) => ({ ...e, quantityPizzaPrice: quantityPizzaPrice }));
    setFormData((e) => ({ ...e, total: total }));
    setFormData((e) => ({ ...e, selectionPrice: selectionPrice }));
    setFormData((e) => ({ ...e, pizzaSelectionName: pizzaSelectionName}));
    setFormData((e) => ({ ...e, pizzaOrderNote: pizzaOrderNote}));
  }, [
    quantity,
    sizeSelection,
    doughSelection,
    extrasData,
    quantityPizzaPrice,
    total,
    selectionPrice,
    pizzaSelectionName,
    pizzaOrderNote,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "https://reqres.in/api/users";

    axios
      .post(apiUrl, formData)
      .then((response) => {
        history.push({
          pathname: "/success",
          state: { formData: formData },
        });
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  return (
    <div>
      <div className="orderPageHeader">
        <h1>Teknolojik Yemekler</h1>
        <div style={{marginRight:"33%"}}>
          Anasayfa -{" "}
          <span style={{ color: "white", fontWeight: "bold" }}>
            Sipariş Oluştur
          </span>
        </div>
      </div>

      <div className="form-container">
        <div className="form-wrapper">
          <h2>{pizzaSelectionName}</h2>
          <div className="price-rating-container">
            <h2>{quantityPizzaPrice}₺</h2>
            <div className="rating-wrapper">
              <span style={{ color: "gray" }}>4.9</span>
              <span style={{ color: "gray" }}>(200)</span>
            </div>
          </div>
          <p style={{ color: "gray" }}>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="size-dough-selection">
              <div className="size-selection">
                <h3>
                  Boyut Seç <span style={{ color: "red" }}>*</span>
                </h3>

                <div className="radio-size-selection">
                  <label>
                    <input
                      type="radio"
                      name="size"
                      checked={sizeSelection === "Küçük (Standart)"}
                      value="Küçük (Standart)"
                      onChange={handleChangeSizeSelection}
                    ></input>
                    Küçük {"(Standart)"}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      checked={sizeSelection === "Orta (+10TL)"}
                      value="Orta (+10TL)"
                      onChange={handleChangeSizeSelection}
                    ></input>
                    Orta {"(+10TL)"}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      checked={sizeSelection === "Büyük (+20 TL)"}
                      value="Büyük (+20 TL)"
                      onChange={handleChangeSizeSelection}
                    ></input>
                    Büyük {"(+20TL)"}
                  </label>
                </div>
              </div>
              <div className="dough-selection">
                <h3>
                  Hamur Seç <span style={{ color: "red" }}>*</span>
                </h3>
                <label>
                  <select onChange={handleDoughSelection}>
                    <option>Hamur Kalınlığı</option>
                    <option value="İnce">İnce</option>
                    <option value="Standart">Standart</option>
                    <option value="Kalın">Kalın</option>
                  </select>
                </label>
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <h3>Ek Malzemeler</h3>
              <span style={{ color: "gray", fontSize: "small" }}>
                {" "}
                · En fazla 10 malzeme seçebilirsiniz.5₺
              </span>
              <span style={{ color: "gray", fontSize: "small" }}>
                {" "}
                · Seçilen {extrasCount}/10
              </span>
            </div>
            <div className="extra-checkbox-selection">
              <label>
                <input
                  name="Pepperoni"
                  type="checkbox"
                  checked={extrasData.Pepperoni}
                  onChange={handleExtraChange}
                />{" "}
                Pepperoni
              </label>
              <label>
                <input
                  name="Tavuk"
                  type="checkbox"
                  checked={extrasData.Tavuk}
                  onChange={handleExtraChange}
                />{" "}
                Tavuk Izgara
              </label>
              <label>
                <input
                  name="Misir"
                  type="checkbox"
                  checked={extrasData.Misir}
                  onChange={handleExtraChange}
                />{" "}
                Mısır
              </label>
              <label>
                <input
                  name="Sarimsak"
                  type="checkbox"
                  checked={extrasData.Sarimsak}
                  onChange={handleExtraChange}
                />{" "}
                Sarımsak
              </label>
              <label>
                <input
                  name="Ananas"
                  type="checkbox"
                  checked={extrasData.Ananas}
                  onChange={handleExtraChange}
                />{" "}
                Ananas
              </label>
              <label>
                <input
                  name="Sosis"
                  type="checkbox"
                  checked={extrasData.Sosis}
                  onChange={handleExtraChange}
                />{" "}
                Sosis
              </label>
              <label>
                <input
                  name="Sogan"
                  type="checkbox"
                  checked={extrasData.Sogan}
                  onChange={handleExtraChange}
                />{" "}
                Soğan
              </label>
              <label>
                <input
                  name="Salam"
                  type="checkbox"
                  checked={extrasData.Salam}
                  onChange={handleExtraChange}
                />{" "}
                Salam
              </label>
              <label>
                <input
                  name="Biber"
                  type="checkbox"
                  checked={extrasData.Biber}
                  onChange={handleExtraChange}
                />{" "}
                Biber
              </label>
              <label>
                <input
                  name="Kabak"
                  type="checkbox"
                  checked={extrasData.Kabak}
                  onChange={handleExtraChange}
                />{" "}
                Kabak
              </label>
              <label>
                <input
                  name="Jambon"
                  type="checkbox"
                  checked={extrasData.Jambon}
                  onChange={handleExtraChange}
                />{" "}
                Kanada Jambonu
              </label>
              <label>
                <input
                  name="Domates"
                  type="checkbox"
                  checked={extrasData.Domates}
                  onChange={handleExtraChange}
                />{" "}
                Domates
              </label>
              <label>
                <input
                  name="Jalepeno"
                  type="checkbox"
                  checked={extrasData.Jalepeno}
                  onChange={handleExtraChange}
                />{" "}
                Jalepeno
              </label>
              <label>
                <input
                  name="Sucuk"
                  type="checkbox"
                  checked={extrasData.Sucuk}
                  onChange={handleExtraChange}
                />{" "}
                Sucuk
              </label>
            </div>
            <div>
              <h3>Sipariş Notu</h3>
              <label>
                <input
                  type="text"
                  placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
                  className="order-note"
                  onChange={handleNoteChange}
                ></input>
              </label>
            </div>
            <div>
            </div>
            <div className="hr-style">
              <hr></hr>
            </div>
            <div className="result">
              <div className="quantify">
                <button className="order-button" onClick={decrement}>
                  -
                </button>
                <span style={{margin: "10px",fontSize: "large",fontWeight: "600",}}>
                  {quantity}
                </span>
                <button className="order-button" onClick={increment}>
                  +
                </button>
              </div>

              <div className="totalPrice">
                <h3>Sipariş Toplamı</h3>

                <div className="price-area">
                  <div className="price-wrapper">
                    Pizza Toplamı <span>{quantityPizzaPrice}₺</span>
                  </div>
                  <div className="price-wrapper">
                    Seçimler <span>{selectionPrice}₺</span>
                  </div>
                  <div className="price-total-wrapper">
                    Toplam <span>{total}₺</span>
                  </div>
                </div>
                <button className="order-button" type="submit">
                  Sipariş Ver
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

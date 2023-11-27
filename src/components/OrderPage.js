import { getByPlaceholderText } from "@testing-library/react";
import React from "react";

export default function OrderPage() {
  return (
    <div>
      <div className="orderPageHeader">
        <h1>Teknolojik Yemekler</h1>
        <div>
          Anasayfa -{" "}
          <span style={{ color: "white", fontWeight: "bold" }}>
            Sipariş Oluştur
          </span>
        </div>
      </div>

      <div className="form-container">
        <div className="form-wrapper">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="price-rating-container">
            <h2>85.50₺</h2>
            <div className="rating-wrapper">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
          <form>
            <div className="size-dough-selection">
              <div className="size-selection">
                <h3>
                  Boyut Seç <span style={{ color: "red" }}>*</span>
                </h3>

                <div className="radio-size-selection">
                  <label>
                    <input type="radio" name="size"></input>
                    Küçük
                  </label>
                  <label>
                    <input type="radio" name="size"></input>
                    Orta
                  </label>
                  <label>
                    <input type="radio" name="size"></input>
                    Büyük
                  </label>
                </div>
              </div>
              <div className="dough-selection">
                <h3>
                  Hamur Seç <span style={{ color: "red" }}>*</span>
                </h3>
                <label>
                  <select>
                    <option>State oluşturulacak</option>
                    <option>İnce</option>
                    <option>Standart</option>
                    <option>Kalın</option>
                  </select>
                </label>
              </div>
            </div>
            <div>
              <h3>Ek Malzemeler</h3>
              <p>En fazla 10 malzeme seçebilirsiniz.</p>
            </div>
            <div className="extra-checkbox-selection">
              <label>
                <input type="checkbox" /> Pepperoni{" "}
              </label>
              <label>
                <input type="checkbox" /> Tavuk Izgara
              </label>
              <label>
                <input type="checkbox" /> Mısır
              </label>
              <label>
                <input type="checkbox" /> Sarımsak{" "}
              </label>
              <label>
                <input type="checkbox" /> Ananas
              </label>
              <label>
                <input type="checkbox" /> Sosis
              </label>
              <label>
                <input type="checkbox" /> Soğan
              </label>
              <label>
                <input type="checkbox" /> Sucuk
              </label>
              <label>
                <input type="checkbox" /> Biber{" "}
              </label>
              <label>
                <input type="checkbox" /> Kabak
              </label>
              <label>
                <input type="checkbox" /> Kanada Jambonu
              </label>
              <label>
                <input type="checkbox" /> Domates{" "}
              </label>
              <label>
                <input type="checkbox" /> Jalepeno
              </label>
              <label>
                <input type="checkbox" /> Sucuk
              </label>
            </div>
            <div>
              <h3>Sipariş Notu</h3>
              <label>
                <input
                  type="text"
                  placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
                  className="order-note"
                ></input>
              </label>
            </div>
            <div className="hr-style">
              <hr></hr>
            </div>
            <div className="result">
              <div className="quantify">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              
              <div className="totalPrice">
                <h3>Sipariş Toplamı</h3>

                <div className="price-area">
                  <div>
                    Seçimler <span>25.50Tl</span>
                  </div>
                  <div>
                    Toplam <span>125.50Tl</span>
                  </div>
                </div>

                <button>SİPARİŞ VER</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { getByPlaceholderText } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

export default function OrderPage() {
  
  const [quantity, setQuantity] = useState(1);
  
  const decrement = (e) => {
    e.preventDefault();
    ((quantity > 1)? setQuantity(quantity-1): setQuantity(quantity));
    // if(quantity > 1){
    //   setQuantity(quantity-1)
    // }
    // else{
    //   setQuantity(quantity);
    // }
    
  }
   
const [sizeSelection, setSizeSelection]=useState("Küçük (Standart)")

useEffect(
  ()=>{
    if (sizeSelection.includes("Küçük (Standart)")){
      setQuantityPizzaPrice(85.50*quantity)
    }
    else if (sizeSelection.includes("Orta (+10TL)"))
    {
      setQuantityPizzaPrice(95.50*quantity)
    }
    else if (sizeSelection.includes("Büyük (+20 TL)"))
    {
      setQuantityPizzaPrice(105.50*quantity)
    }
    else {
      setQuantityPizzaPrice(quantityPizzaPrice)
    }
  },[sizeSelection,quantity]
)

const handleChangeSizeSelection=(e) => {
  setSizeSelection(e.target.value)
}

const [doughSelection, setDoughSelection]=useState("Standart")

const handleDoughSelection=(e) => {
  setDoughSelection(e.target.value)
}




  const [extrasData, setextrasData] = useState({
    Pepperoni: false,
    Tavuk:false,
    Misir: false,
    Sarimsak: false,
    Ananas:false,
    Sosis:false,
    Sogan:false,
    Salam:false,
    Biber:false,
    Kabak:false,
    Jambon:false,
    Domates:false,
    Jalepeno:false,
    Sucuk:false, 
  });

//  console.log( Object.keys(extrasData).length)

  const handleChange = (e) => {
    // let name = e.target.name;
    // let value = e.target.value;
    let { name, type, checked } = e.target;
 
  
     // const selectedExtrasCount = newExtras.filter((item) => item.check).length;
  // if (selectedExtrasCount <= 10) {
  //   setFormData({
  //     ...formData,
  //     extras: newExtras,
  //   });
    if(Object.values(extrasData).filter( e => e=== true).length  <= 9 ){
      setextrasData({
        ...extrasData,
        [name]: type === "checkbox" 
         ? checked
         : true,
      });
    }else{
      setextrasData({
        ...extrasData,
        [name]: type === "checkbox" ? false : true,
      });
    }
  };
 
  useEffect(
    () => {
      setextrasData(extrasData);
      console.log(extrasData)
    },[extrasData,quantity]
  )

    const increment = (e) => {
      e.preventDefault();
      setQuantity(quantity+1)}
  
  const [quantityPizzaPrice, setQuantityPizzaPrice] = useState(85.50);

  useEffect(
    () => {
      setQuantityPizzaPrice(quantity * 85.50)
    },[quantity]
  )

  const [total, setTotal] = useState(quantityPizzaPrice);

  const [selectionPrice,setSelectionPrice] = useState(0);
  
  useEffect(
    () => {
      let selected= Object.values(extrasData).filter( e => e=== true).length 
      if(selected <= 10){
      setSelectionPrice(selected*5*quantity)}
  },[extrasData, quantity])




  useEffect(
    () => {
      setTotal(quantityPizzaPrice + selectionPrice)  
  },[quantityPizzaPrice, selectionPrice])

const [formData,setFormData]=useState({
  quantity:"",
  sizeSelection:"",
  doughSelection:"",
  extrasData:"",
  quantityPizzaPrice:"",
  total:"",
  selectionPrice:"",
})

useEffect(
  () => {
    setFormData((e)=>({...e,quantity:quantity}))
    setFormData((e)=>({...e,sizeSelection:sizeSelection}))
    setFormData((e)=>({...e,doughSelection:doughSelection}))
    setFormData((e)=>({...e,extrasData:extrasData}))
    setFormData((e)=>({...e,quantityPizzaPrice:quantityPizzaPrice}))
    setFormData((e)=>({...e,total:total}))
    setFormData((e)=>({...e,selectionPrice:selectionPrice}))
  },

  [quantity,sizeSelection,doughSelection,extrasData,quantityPizzaPrice,total,selectionPrice]
)
const apiUrl = "https://reqres.in/api/users";

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(formData)
  axios.post(apiUrl,formData)
  .then((response) =>{
    console.log(response.data);
  })
  .catch((error)=>{
    console.log(error)
  })
}

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
          <form onSubmit={handleSubmit}>
            <div className="size-dough-selection">
              <div className="size-selection">
                <h3>
                  Boyut Seç <span style={{ color: "red" }}>*</span>
                </h3>

                <div className="radio-size-selection">
                  <label>
                    <input type="radio" name="size" checked={sizeSelection==="Küçük (Standart)" } value="Küçük (Standart)" onChange={handleChangeSizeSelection}></input>
                    Küçük {"(Standart)"}
                  </label>
                  <label>
                    <input type="radio" name="size"checked={sizeSelection==="Orta (+10TL)"} value="Orta (+10TL)" onChange={handleChangeSizeSelection}></input>
                    Orta {"(+10TL)"}
                  </label>
                  <label>
                    <input type="radio" name="size"checked={sizeSelection==="Büyük (+20 TL)"} value="Büyük (+20 TL)" onChange={handleChangeSizeSelection}></input>
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
                    <option value="İnce" >İnce</option>
                    <option value="Standart">Standart</option>
                    <option value="Kalın">Kalın</option>
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
                <input name="Pepperoni" type="checkbox" checked={extrasData.Pepperoni} onChange={handleChange}/> Pepperoni
              </label>
              <label>
                <input name="Tavuk" type="checkbox" checked={extrasData.Tavuk} onChange={handleChange} /> Tavuk Izgara
              </label>
              <label>
                <input name="Misir" type="checkbox" checked={extrasData.Misir} onChange={handleChange}/> Mısır
              </label>
              <label>
                <input name="Sarimsak"  type="checkbox" checked={extrasData.Sarimsak} onChange={handleChange}/> Sarımsak
              </label>
              <label>
                <input name="Ananas" type="checkbox" checked={extrasData.Ananas} onChange={handleChange}/> Ananas
              </label>
              <label>
                <input name="Sosis" type="checkbox" checked={extrasData.Sosis} onChange={handleChange}/> Sosis
              </label>
              <label>
                <input name="Sogan" type="checkbox" checked={extrasData.Sogan} onChange={handleChange}/> Soğan
              </label>
              <label>
                <input name="Salam" type="checkbox" checked={extrasData.Salam} onChange={handleChange}/> Salam
              </label>
              <label>
                <input name="Biber" type="checkbox" checked={extrasData.Biber} onChange={handleChange}/> Biber
              </label>
              <label>
                <input name="Kabak" type="checkbox" checked={extrasData.Kabak} onChange={handleChange}/> Kabak
              </label>
              <label>
                <input name="Jambon" type="checkbox" checked={extrasData.Jambon} onChange={handleChange}/> Kanada Jambonu
              </label>
              <label>
                <input name="Domates" type="checkbox" checked={extrasData.Domates} onChange={handleChange} /> Domates
              </label>
              <label>
                <input name="Jalepeno" type="checkbox" checked={extrasData.Jalepeno} onChange={handleChange}/> Jalepeno
              </label>
              <label>
                <input name="Sucuk" type="checkbox" checked={extrasData.Sucuk} onChange={handleChange}/> Sucuk
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
                <button  onClick={
                    decrement
                }>-</button>
                <span style={{margin:"10px"}}>{quantity}</span>
                <button onClick={increment}>+</button>
              </div>
              
              <div className="totalPrice">
                <h3>Sipariş Toplamı</h3>

                <div className="price-area">
                <div className="price-wrapper">
                    Pizza Adet Toplamı : <span>{quantityPizzaPrice}₺</span>
                  </div>
                  <div className="price-wrapper">
                    Seçimler <span>{selectionPrice}₺</span>
                  </div>
                  <div className="price-wrapper">
                    Toplam <span>{total}₺</span>
                  </div>
                </div>
                {/* <Link to="/success"> */}
                <button type ="submit" >SİPARİŞ VER</button>
                {/* </Link> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

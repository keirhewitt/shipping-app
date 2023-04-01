import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const App = () => {

  const [locale, setLocale] = useState("")
  const [deliveryCost, setDeliveryCost] = useState(0)

  // Get the current locale from params
  useEffect(() => {
    let url = new URL(window.location.href);
    let paramLocale = url.searchParams.get('locale');
    setLocale(paramLocale);
  }, [])

  // Re-calculate delivery cost when locale changes
  useEffect(() => {
    axios.get(`http://localhost:5000/shippingCost/${locale}`)
    .then(cost => setDeliveryCost(cost.data))
  }, [locale])

  return (
    <div className="App">

      <div className="outer__wrapper">
        <p className="country">Country: {locale || "N/A"}</p>
        <div className="main__container__wrapper">
          <div className="user__hero">
            <h1 className="username">John Deere 6510</h1>
            <div className="hero__image">
              <img src={require('./images/thecar.jpg')} alt="heroimg" id="hero__img__main"/>
            </div>
          </div>

          <div className="bid__details">
            
            <div className="bid__price">
              <h4 className="bid__price__text">Bid Price: £24,000</h4>
            </div>
            <div className="place__bid__wrapper">
              <button type="button" class="bid__btn">Place Bid</button>
            </div>
            <div className="bid__shipping">
              <div className="shipping__details">
                <p className="shipping__option">Shipping Option</p>
                <p className="delivery__text">Delivery to your yard</p>
              </div>
              <div className="shipping__cost">
                <p className="shipping__cost__text">£{deliveryCost || "N/A"}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

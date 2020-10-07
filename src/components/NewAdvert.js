import React, { useState } from "react";
import {addOffer} from "./Operations";

function NewAdvert({ onNewAdvert }) {
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [offer, setOffer] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleAddAdvert = (e) => {
    e.preventDefault();
    const _errors = [];
    if (person.length < 2) {
      _errors.push("Name should be at least 2 characters long.");
    }
  
    if (email.length < 3 || email.indexOf("@") === -1) {
      _errors.push("Email should shoud have '@' to be valid.");
    }
  
    if (offer.length < 10) {
      _errors.push("Message should be at least 10 characters long.");
    }
    if (isNaN(price)) {
      _errors.push("price should be a number")
    }
    
    setErrors(_errors);
    setSuccess(false);
    if (_errors.length > 0) {
      return false;
    } 

    const advert = {
      person: `${person}`,
      email: `${email}`,
      offer: `${offer}`,
      date: `${date}`,
      price: `${price}`
    };

     addOffer(advert, onNewAdvert) 
    .then(data => {
        
        setPerson("");
        setPrice("");
        setEmail("");
        setOffer("");
        setDate("");
        setSuccess(true);
    })
  };



  return (
    <div className="main_container form_main_container">
        <h1 className={"new_offer"}>New Offer</h1>
        <form className={"form_container"} onSubmit={handleAddAdvert}>
          <div className="newAdvert_form">
            <input className={"form_box"}type="text" name="person" placeholder="person" value={person} onChange={(e) => setPerson(e.target.value)}/>
            <input className={"form_box"}type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea className={"form_box textarea"}type="textarea" name="offer"placeholder="here write your offer" value={offer} onChange={(e) => setOffer(e.target.value)}/>
            <input className={"form_box"}type="date" name="date"placeholder="choose the date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <input className={"form_box"}type="text" name="price"placeholder="price in zł" value={price} onChange={(e) => setPrice(e.target.value)}/>
          <button className={"form_btn"} type="submit">add new offer!</button>
          </div>
        </form>

    {success && <h2 className={"form_confirmation"}>Form sent succesfully!</h2>}
    {errors.map(error => <p key={error}>{error}</p>)}
    </div>
  );
}

export default NewAdvert;

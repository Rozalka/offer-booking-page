import React, { useState } from 'react';
import {addOffer} from './operations/offers_operations';

function NewAdvert({ onNewAdvert }) {
  const [offer, setOffer] = useState("");
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setTelNum] = useState("");
  const [details, setDetails] = useState(""); 
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
  
    if (offer.length < 3) {
      _errors.push("Offer title should be at least 3 characters long.");
    }
    if (isNaN(price)) {
      _errors.push("price should be a number")
    }
    if (isNaN(phone) || phone.length < 9) {
      _errors.push("phone should be a number and have 9 characters long.")
    }
    
    setErrors(_errors);
    setSuccess(false);
    if (_errors.length > 0) {
      return false;
    } 

    const advert = {
      title: `${offer}`,
      person: `${person}`,
      email: `${email}`,
      phone:`${phone}`,
      details: `${details}`,
      date: `${date}`,
      price: `${price}`
    };

     addOffer(advert, onNewAdvert) 
    .then(data => {
        setOffer("");
        setPerson("");
        setPrice("");
        setEmail("");
        setOffer("");
        setDate("");
        setTelNum("");

        setSuccess(true);
    })
  };

  return (
    <div className="main_container form_main_container">
        <h1 className={"new_offer"}>New Offer</h1>
        <form className={"form_container"} onSubmit={handleAddAdvert}>
          <div className="newAdvert_form">
            <input className={"form_box"}type="text" name="title" placeholder="what is your offer" value={offer} onChange={(e) => setOffer(e.target.value)}/>
            <input className={"form_box"}type="text" name="person" placeholder="person" value={person} onChange={(e) => setPerson(e.target.value)}/>
            <input className={"form_box"}type="text" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className={"form_box"}type="text" name="number" placeholder="tel.num" value={phone} onChange={(e) => setTelNum(e.target.value)}/>
            <textarea className={"form_box textarea"}type="textarea" name="offer"placeholder="here write details" value={details} onChange={(e) => setDetails(e.target.value)}/>
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

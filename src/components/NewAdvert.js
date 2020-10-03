import React, { useState } from "react";
import {addOffer} from "./Operations";

function NewAdvert({ onNewAdvert }) {
  const [person, setPerson] = useState("");
  const [email, setEmail] = useState("");
  const [offer, setOffer] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const handleAddAdvert = (e) => {
    e.preventDefault();

    const advert = {
      person: `${person}`,
      email: `${email}`,
      offer: `${offer}`,
      date: `${date}`,
      price: `${price}`,
      status: "open",
    };

    addOffer(advert, onNewAdvert);
  };



  return (
    <div className="newAdvert_container">
        <h1 >Nowe ogłoszenie</h1>
        <form onSubmit={handleAddAdvert}>
          <div className="newAdvert_form">
            <input type="text" name="person" placeholder="person" value={person} onChange={(e) => setPerson(e.target.value)}/>
            <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" name="offer"placeholder="offer" value={offer} onChange={(e) => setOffer(e.target.value)}/>
            <input type="date" name="date"placeholder="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            <input type="text" name="price"placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          <button type="submit">zadwierdź!</button>
          </div>
      
        </form>
    </div>
  );
}

export default NewAdvert;

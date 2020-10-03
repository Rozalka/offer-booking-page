import React, { useState, useEffect } from "react";
import Advert from "./Advert";
import Buttons from "./Buttons";
import NewAdvert from "./NewAdvert";

export const addReservation = (reservation, callback) => {
  let body = JSON.stringify(reservation);
  console.log(reservation);
  fetch(`http://localhost:3000/reservations/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: body,
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.error === false && typeof callback === "function") {
        callback(data.data);
      }
    })
    .catch((err) => console.log(err));
};

export const addOffer = (newOffer, callback) => {
  let body = JSON.stringify(newOffer);
  console.log(body);
  fetch(`http://localhost:3000/offers/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: body,
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.error === false && typeof callback === "function") {
        callback(data.data);
      }
    })
    .catch((err) => console.log(err));
};

export const updateOffer = (id, newOffer, successCallback) => {
  fetch(`http://localhost:3000/offers/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(newOffer),
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.error === false && typeof successCallback === "function") {
        successCallback(data.data);
      }
    })
    .catch((err) => console.log(err));
};

export const removeOffer = (id, successCallback) => {
  fetch(`http://localhost:3000/offers/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.error === false && typeof successCallback === "function") {
        successCallback();
      }
    })
    .catch((err) => console.log(err));
};

const allReservations = () => {
  return fetch(`http://localhost:3000/reservations/`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .catch((err) => console.log(err));
};

function MyReservations() {
  allReservations().then(reservations => reservations.map((reservation) => reservation.offerId))
  .then(offersIds => "id=" + offersIds.join("&id="))
  .then(parsedrOfferIds => getOffers(parsedrOfferIds))
  .then(reservedOffers => console.log(reservedOffers))

 
  return <>
      
      </>;
}
const getOffers = (condition='') => {

  return fetch(`http://localhost:3000/offers?${condition}`)
  .then((resp) => resp.json())
}

function Operations() {
  const [offers, setOffer] = useState([]);

  useEffect(() => {
    fetchAllOffers();
  }, []);

  const fetchAllOffers = () => {
      getOffers()
      .then((allOffers) => setOffer(allOffers));
  };
  return (
    <>
      {/* <NewAdvert addOffer={addOffer}/> */}
      {offers.map((offer) => (
        <Advert key={offer.id} {...offer} />
      ))}
    </>
  );
}

export { Operations, MyReservations };

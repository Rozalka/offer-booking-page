import React, { useState, useEffect } from "react";
import Advert from "./Advert";
import Buttons from "./Buttons";
import NewAdvert from "./NewAdvert";
import Reservation from "./Reservation"

export const addReservation = (reservation, callback) => {
  let body = JSON.stringify(reservation);
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

export const updateOffers = (id, newOffer, successCallback) => {
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


// export const removeOffer = (id, successCallback) => {
//   fetch(`http://localhost:3000/offers/${id}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "DELETE"
//   })
//     .then(r => r.json())
//     .then(data => {
//       if (data.error === false && typeof successCallback === "function") {
//         successCallback();
//       }
//     })
//     .catch(err => console.log(err));
// };



const findReservation = (condition='') => {
  return fetch (`http://localhost:3000/reservations?${condition}`)
  .then((resp) => resp.json())
}

export const removeReservation = (offerId, successCallback) => {
  findReservation(`offerId=${offerId}`)
  .then(reservations => reservations.map((reservation) => reservation.id))
  .then(reservationId => fetch(`http://localhost:3000/reservations/${reservationId}`, {
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
    }))
    .catch((err) => console.log(err))
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
  
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchAllReservations();
  }, []);

 const fetchAllReservations = () => {
   allReservations()
    .then(reservations => reservations.map((reservation) => reservation.offerId))
    .then(offersIds => "id=" + offersIds.join("&id="))
    .then(parsedOfferIds => getOffers(parsedOfferIds))
    .then((reservedOffers) => setReservations(reservedOffers))
    
   
 }
  return <>
      {reservations.map((reservation) => (
        <Reservation key={reservation.id} {...reservation} />))}
    
      </>;
}


const getOffers = (condition='') => {
  return fetch(`http://localhost:3000/offers?${condition}`)
  .then((resp) => resp.json())
}

function Offers() {
  const [offers, setOffer] = useState([]);

  useEffect(() => {
    fetchAllOffers();
  }, []);

  const fetchAllOffers = () => {
    availableOffers()
      .then((availableOffers) => setOffer(availableOffers));
  };


  return (
    <>
      {offers.map((offer) => (
        <Advert key={offer.id} {...offer} />
      ))}
    </>
  );
}

async function  availableOffers() {
 let offers = await getOffers()
 let reservations = await allReservations()
 let reservedOffersIds = reservations.map((reservation) => reservation.offerId);
 return offers.filter((offer) => !reservedOffersIds.includes(offer.id))
 }

//  console.log(freeOffers)
// }


export { Offers, MyReservations };

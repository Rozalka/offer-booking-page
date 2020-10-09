import React, { useState, useEffect } from 'react';
import { getOffers } from './offers_operations';
import Reservation from '../Reservation';


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

export const findReservation = (condition='') => {
    return fetch (`http://localhost:3000/reservations?${condition}`)
    .then((resp) => resp.json())
  }
  
export const removeReservation = (offerId, successCallback) => {
    findReservation(`offerId=${offerId}`)
    .then(reservations => reservations.map((reservation) => reservation.id))
    .then(reservationIds => reservationIds.forEach(reservationId =>
      fetch(`http://localhost:3000/reservations/${reservationId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }))
      .then((r) => r.json())
      .then((data) => {
        if (data.error === false && typeof successCallback === "function") {
          successCallback();
        }
      }))
      .catch((err) => console.log(err))
  };  

function NewReservation(id) {
    hideOffer(id);
    addReservation({offerId: id});
}

function hideOffer(id) {
    document.getElementById(`${id}`).innerHTML= "";
}

function hideReservation(reservationId) {
  document.getElementById(`${reservationId}`).innerHTML= "";
}

  function RemoveReservation(reservationId) {
    hideReservation(reservationId)
    removeReservation(reservationId);
}

  export const allReservations = () => {
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
    return (
        <div className={"offers_container"}>
          {reservations.map((reservation) => (
          <Reservation key={reservation.id} {...reservation} />
          ))}
        </div>
    );
  }
  
  export { MyReservations, RemoveReservation, NewReservation };
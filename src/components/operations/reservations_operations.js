import React, { useState, useEffect } from 'react';


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

  export const allReservations = () => {
    return fetch(`http://localhost:3000/reservations/`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .catch((err) => console.log(err));
  };  
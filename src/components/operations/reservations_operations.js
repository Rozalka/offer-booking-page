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
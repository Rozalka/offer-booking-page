import React, { useState } from 'react';
import {addReservation, SingleOffer} from "./Operations";
// import ShowOfferDetails from './ShowOfferDetails';

function hideOffer(id) {
    console.log(id)
    document.getElementById(`${id}`).innerHTML= "";
}

function NewReservation(id) {
    hideOffer(id);
    addReservation({offerId: id});
}
export default NewReservation

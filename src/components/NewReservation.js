import React, { useState } from 'react';
import {addReservation} from "./Operations";

function hideOffer(id) {
    document.getElementById(`${id}`).innerHTML= "";
}

function NewReservation(id) {
    hideOffer(id);
    addReservation({offerId: id});
}
export default NewReservation

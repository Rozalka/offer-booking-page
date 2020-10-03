import React, { useState } from 'react';
import {addReservation} from "./Operations";

function NewReservation(id) {
    console.log(id)
    addReservation({offerId: id});
  
}
export default NewReservation

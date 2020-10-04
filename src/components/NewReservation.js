import React, { useState } from 'react';
import {addReservation} from "./Operations";

function NewReservation(id) {

    addReservation({offerId: id});
  
}
export default NewReservation

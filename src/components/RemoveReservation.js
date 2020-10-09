// import React from 'react'
import { removeReservation } from './operations/reservations_operations';

function hideReservation(reservationId) {
    document.getElementById(`${reservationId}`).innerHTML= "";
}
function RemoveReservation(reservationId) {
    hideReservation(reservationId)
    removeReservation(reservationId);
}

export default RemoveReservation

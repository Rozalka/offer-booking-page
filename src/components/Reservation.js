import React from 'react';
import Operations from "./Operations"
import RemoveReservation from './RemoveReservation';

function Reservation({id, person, email, date, offer, price}) {

    
    return (
            <li id={id}>
             <div className="offer_box">
            <p><span>Kto?</span> {person}</p>
            <p><span>e-mail</span> {email}</p>
            <p><span>usługa</span> {offer} <span>kiedy ją wykonam</span> {date} </p>
            <p><span>koszt</span> {price} </p>
            <p><span>status oferty:</span>zarezerwowana</p>

            <button onClick={() => RemoveReservation(id)}>usuń z moich rezerwacji</button>
            </div>

            </li>
           
    
    )
}
    
export default Reservation

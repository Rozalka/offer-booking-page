
import React from 'react';
import NewReservation from './NewReservation';
import Operations from './Operations';

function Advert({ id, person, email, offer, date, price}) {


    return (
        <li id={id}>
            <div className="offer_box">
            <p><span>Kto?</span> {person}</p>
            <p><span>e-mail</span> {email}</p>
            <p><span>usługa</span> {offer} <span>kiedy ją wykonam</span> {date} </p>
            <p><span>koszt</span> {price} </p>
            <p><span>status oferty:</span> wolna</p>

            <button onClick = {() => NewReservation(id)}>dodaj do moich rezerwacji</button>
            </div>
        </li>
    )
}

export default Advert
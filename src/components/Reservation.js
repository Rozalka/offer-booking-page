import React from 'react';
import Operations from "./Operations"
import RemoveReservation from './RemoveReservation';
import dog1 from '../assets/dog (1).png';
import crossedOutTrack from '../assets/pets.png';
function Reservation({id, person, email, date, offer, price}) {

    
    return (
        <li className={"list"} id={id}>
            <div className="offer_box">
                <div>
                    <img className={"offer_img"} src={dog1}></img>
                </div> 
                <div className={"offer_info"}>
                    <h3> {offer} </h3>
                    <p> {person}</p>
                    <p> {email}</p>
                    <p>{price} </p>
                    <p>{date}</p>
                    <p><span>offer status:</span> reserved</p>
                </div>  
                <div className={"btns"}>
                <img onClick={() => RemoveReservation(id)} className={"btn_img"} src={crossedOutTrack}></img>
                </div>
            </div>    
        </li>
           
    
    )
}
    
export default Reservation

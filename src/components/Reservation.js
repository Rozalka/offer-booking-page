import React from 'react';
import Operations from "./Operations"
import RemoveReservation from './RemoveReservation';
import dog1 from '../assets/dog (1).png';
import crossedOutTrack from '../assets/pets.png';
import { Link } from 'react-router-dom';

function Reservation({id, person, date, offer, price}) {

    return (
        <li className={"list"} id={id}>
        <div className="offer_box">
            <div>
                <img className={"offer_img"} src={dog1}></img>
            </div> 
            <div className={"offer_single"}>
                <div className={"offer_header"}>
                    {/* <h3> {offer} </h3> */}
                    <Link to={`details/${id}`}><h3> {offer} </h3></Link>
                    <p className={"price"}>{price} zł</p>
                </div>
                <div className={"offer_info"}>
                    <div className={"who_and_when"}>
                        <p className={"person"}> {person}</p>
                        <p>{date}</p>
                    </div>     
                    <div className={"res_box"}>                            
                        <img onClick = {() => RemoveReservation(id)}className={"btn_img"}src={crossedOutTrack}></img>
                    </div>                        
                </div>
            </div>     
        </div>
    </li>
           
    
    )
}
    
export default Reservation

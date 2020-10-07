import React from 'react';
import NewReservation from './NewReservation';
import Operations from './Operations';
import dog1 from '../assets/dog (1).png';
import checkTrack from '../assets/footprint.png';

function Offer({ id, person, email, offer, date, price}) {


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
                        <p><span>offer status:</span> free</p>
                    </div>  
                    <div className={"btns"}>
                        <img onClick = {() => NewReservation(id)}className={"btn_img"}src={checkTrack}></img>
                        {/* <button className={"btn_details"}>details</button> */}
                    </div>

                </div>
            </li>
    )
}

export default Offer
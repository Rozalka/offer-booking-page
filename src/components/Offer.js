import React from 'react';
import NewReservation from './NewReservation';
import ShowOfferDetails from './ShowOfferDetails';
import dog1 from '../assets/dog (1).png';
import checkTrack from '../assets/footprint.png';
import { Link } from 'react-router-dom';
import { getOffers, SingleOffer,MyReservations } from './Operations';

function Offer({ id, person, offer, date, price}) {
    return (
            <li className={"list"} id={id}>
                <div className="offer_box">
                    <div>
                        <img className={"offer_img"} src={dog1}></img>
                    </div> 
                    <div className={"offer_single"}>
                        <div className={"offer_header"}>
                            <Link to={`details/${id}`}><h3> {offer} </h3></Link>
                            <p className={"price"}>{price} zł</p>
                        </div>
                        <div className={"offer_info"}>
                            <div className={"who_and_when"}>
                                <p className={"person"}> {person}</p>
                                <p>{date}</p>
                            </div>     
                            <div className={"res_box"}>                            
                                <img onClick = {() => NewReservation(id)}className={"btn_img"}src={checkTrack}></img>
                            </div>                        
                        </div>
                    </div>     
                </div>
            </li>
    )
}

export default Offer
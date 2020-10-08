import React from 'react';
import dog1 from '../assets/dog (1).png';
import crossedOutTrack from '../assets/pets.png';
import checkTrack from '../assets/footprint.png';
import NewReservation from './NewReservation';
import RemoveReservation from './RemoveReservation';
import { useLocation } from "react-router-dom";

function ShowOfferDetails({ id, person, offer, date, price, details, email, phone}) {

    let parameters =  new URLSearchParams(useLocation().search);
    console.log(parameters)
    console.log(parameters.get('removable'))
    let removable = parameters.get('removable') === "1"
    console.log(removable)
    return (
     <div className={"offers_container"} id={id}>
         <div className="offer_box">
                    <div>
                        <img className={"offer_img offer_details_img"} alt={"dog"} src={dog1}></img>
                    </div> 
                    <div className={"offer_single"}>
                        <div className={"offer_header"}>
                            <h3>{offer}</h3>
                            <p className={"price"}>{price} zł</p>
                        </div>
                        <div className={"offer_details"}>
                            <h4>{details}</h4>
                            <span>Contact:</span>
                            <p>e-mail: {email}</p>
                            <p>tel.num: {phone}</p>
                        </div>
                        <div className={"offer_info"}>
                            <div className={"who_and_when"}>
                                <p className={"person"}> {person}</p>
                                <p>{date}</p>
                            </div>     
                            <div className={"res_box"}>  
                            { removable ? (
                                <img alt={"crossedOutTrack"}onClick = {() => RemoveReservation(id)}className={"btn_img"}src={crossedOutTrack}></img>
                            )
                            :
                            (
                                <img alt={"track"} onClick = {() => NewReservation(id)}className={"btn_img"}src={checkTrack}></img>   
                            )

                            }                          
                                
                            </div>                        
                        </div>
                    </div>     
                </div>
     </div>
    )
}

export default ShowOfferDetails
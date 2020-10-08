import React from 'react';
import dog1 from '../assets/dog (1).png';
import checkTrack from '../assets/footprint.png';
import NewReservation from './NewReservation';
import Operation from './Operations';

function ShowOfferDetails({ id, person, offer, date, price, details, email, phone}) {
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
                                <img alt={"track"} onClick = {() => NewReservation(id)}className={"btn_img"}src={checkTrack}></img>
                            </div>                        
                        </div>
                    </div>     
                </div>
     </div>
    )
}

export default ShowOfferDetails
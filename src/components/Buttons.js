import React from 'react';
import {Link} from 'react-router-dom';
import dog from '../assets/dog-outline-chasing-balloons.png';

function Buttons() {
    return (
        
        <div className={"nav_container"}>
            <div className={"home_page_link"}>
                <Link to="/">
                    <div className={"nav_logo"}>
                        <img alt={"dog"}src={dog}></img>
                    </div>               
                </Link>
           </div>
           <div className={"nav_links"}>
                <Link to="/offer">
                    <button className={"main_btn"}>Offers</button> 
                </Link>
                <Link to="/newAdvert">
                    <button className={"main_btn"}>Add your offer</button>
                </Link>
                <Link to="/myReservations">
                    <button className={"main_btn"}>My reservations</button>
                </Link>
           </div>
        </div>
    )
}

export default Buttons;



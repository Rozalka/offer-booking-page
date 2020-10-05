import React from 'react';
import {Link} from 'react-router-dom';
function Buttons() {
    return (
        <div className={"nav_container"}>
            <Link to="/offer">
                <button className={"main_btn"}>Ogloszenia</button> 
            </Link>
            <Link to="/newAdvert">
                <button className={"main_btn"}>Dodaj ogłoszenie</button>
            </Link>
           <Link to="/myReservations">
                <button className={"main_btn"}>Moje rezerwacje</button>
           </Link>
           <Link to="/">
                <button className={"main_btn"}>Home</button>
           </Link>
           
        </div>
    )
}

export default Buttons

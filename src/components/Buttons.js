import React from 'react';
import {Link} from 'react-router-dom';
function Buttons() {
    return (
        <div>
            <Link to="/advert">
                <button>Ogloszenia</button> 
            </Link>
            <Link to="/newAdvert">
                <button>Dodaj ogłoszenie</button>
            </Link>
           <Link to="/myReservations">
                <button>Moje rezerwacje</button>
           </Link>
           <Link to="/">
                <button>Home</button>
           </Link>
           
        </div>
    )
}

export default Buttons

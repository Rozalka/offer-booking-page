import React from 'react'
import MyReservations from './MyReservations';

function Reservations() {


    const [reservations, setReservation] =useState([]);

    useEffect(() => {
        fetchAllReservations()
    }, [])

    const fetchAllReservations = () => {
        fetch('http://localhost:3000/reservations')
            .then(resp => resp.json())
            .then(allReservations => setReservation(allReservations))
    };
    return (
        <>
        
            {/* <NewAdvert addOffer={addOffer}/> */}
          {reservations.map(reservation => <MyReservations key={reservation.id} {...reservation} />)}  
        
        </>
    )


}

export default Reservations

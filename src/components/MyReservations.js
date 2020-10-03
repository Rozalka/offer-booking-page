// import React, {useState, useEffect} from 'react'
// import {addReservation} from './Operations'
// import Advert from './Advert'



// function MyReservations() {
//     const [reservations, setReservation] =useState([]);
//     useEffect(() => {
//         fetchAllReservation()
//     }, [])


//     const fetchAllReservation = () => {
//         fetch('http://localhost:3000/reservations')
//             .then(resp => resp.json())
//             .then(allReservations => setReservation(allReservations))
//     };
//     return (
//         <>
        
//             {/* <NewAdvert addOffer={addOffer}/> */}
//           {/* {offers.filter(offer => <Advert key={offer.id} {...offer} />)}   */}
        
//         </>
//     )
    
// }

// export default MyReservations;
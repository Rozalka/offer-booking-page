import {addReservation} from './operations/reservations_operations';

function hideOffer(id) {
    console.log(id)
    document.getElementById(`${id}`).innerHTML= "";
}

function NewReservation(id) {
    hideOffer(id);
    addReservation({offerId: id});
}
export default NewReservation

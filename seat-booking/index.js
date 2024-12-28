const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const selectedSeatsElement = document.getElementById('selected-seats');
const totalPriceElement = document.getElementById('total-price');
const movieSelect = document.getElementById('movie');
const clearButton = document.getElementById('clear');

let ticketPrice = +movieSelect.value;

// Update total and selected seats
function updateSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    // Display selected seat IDs
    const seatNumbers = [...selectedSeats].map(seat => seat.dataset.seat).join(', ');
    selectedSeatsElement.textContent = seatNumbers || 'None';

    // Calculate and display total price
    const totalPrice = selectedSeatsCount * ticketPrice;
    totalPriceElement.textContent = `$${totalPrice}`;
}

// Movie selection event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedSeats();
});

// Seat click event
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
            updateSelectedSeats();
        }
    });
});

// Clear selection button
clearButton.addEventListener('click', () => {
    seats.forEach(seat => seat.classList.remove('selected'));
    updateSelectedSeats();
});

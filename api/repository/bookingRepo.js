export default (Booking) => {
    const bookings = [
        new Booking('1234569870', '2023-05-02', '2023-05-28', '9782744005084', '0123456789'),
        new Booking('0001112223', '1911-02-21', '1911-03-03', '9782746035966', '9876543210'),
        new Booking('9995551113', '2023-05-02', '2022-05-15', '1611213161161', '9876543210')
    ];

    const listBookings = () => {
        return bookings;
    };

    const createBooking = (booking) => {
        bookings.push(new Booking(
            booking.id,
            booking.rentDate,
            booking.returnDate,
            booking.book,
            booking.user
        ));
        return booking;
    }

    return {
        listBookings,
        createBooking
    };
}
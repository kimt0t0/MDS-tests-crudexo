export default (Booking) => {
    const bookings = [
        ('1234569870', '2023-05-02', '2023-05-28', 'Pets and Magic', '0123456789'),
        ('0001112223', '1911-02-21', '1911-03-03', 'Hidden Daggers and Great Misfits', '9876543210'),
        ('9995551113', '2023-05-02', '2022-05-15', 'A la recherche de la date perdue', '9876543210')
    ];

    const listBookings = () => {
        return bookings;
    };

    return {
        listBookings
    };
}
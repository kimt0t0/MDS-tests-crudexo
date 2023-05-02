export default (bookingRepo) => {

    const listBookings = (_, res) => {
        res.send({
            data: bookingRepo.listBookings()
        });
    };

    const createBooking = (req, res) => {
        const booking = bookingRepo.createBooking(req.body);
        res.status(201).send({
            data: booking
        });
    }

    return {
        listBookings,
        createBooking
    };
}
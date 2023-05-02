export default (bookingRepo) => {
    const listBookings = (_, res) => {
        res.send({
            data: bookingRepo.listBookings()
        });
    };

    return {
        listBookings
    };
}
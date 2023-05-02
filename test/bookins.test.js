import chai from 'chai';
import chaiHttp from 'chai-http';
import api from '../index.js';

chai.use(chaiHttp);

describe('Bookings', function() {
    it('Get /bookings should return a success response with all books', function (done) {
        chai.request(api)
        .get('/bookings')
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(200);
            chai.expect(res.body).to.deep.equal({
                data: [
                    {
                        id: '1234569870', 
                        rentDate: '2023-05-02', 
                        returnDate: '2023-05-28', 
                        book: 'Pets and Magic', 
                        user: '0123456789'
                    },
                    {
                        id: '0001112223', 
                        rentDate: '1911-02-21', 
                        returnDate: '1911-03-03',
                        book: 'Hidden Daggers and Great Misfits',
                        user: '9876543210'
                    },
                    {
                        id: '9995551113',
                        rentDate: '2023-05-02', 
                        returnDate: '2022-05-15', 
                        book: 'A la recherche de la date perdue', 
                        user: '9876543210'
                    }
                ]
            });
            done();
        });
    });

    it('POST /bookings should create the booking and return a success response', function (done) {
        const booking = {
            id: '2224446668',
            rentDate: '2023-05-05',
            returnDate: '2023-05-25',
            book: 'Coucou',
            user: '0123456789'
        };
        chai.request(api)
        .post('/bookings')
        .send(booking)
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(201);
            chai.expect(res.body).to.deep.equal({
                data: booking
            });
            done();
        });
    });
    it('POST /bookings should return a bad request if id is malformed');
    it ('POST /bookings should return a bad request if return date is before rent date');
    it ('POST /bookings should return a bad request if user does not exist');
    it ('POST /bookings should return a bad request if book is already rented');

    it('GET /bookings/:id should return a success response with found booking', function(done) {
        chai.request(api)
        .get('/order/1234569870')
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(200);
            chai.expect(res.body).to.deep.equal({
                data: {
                    id: '1234569870', 
                    rentDate: '2023-05-02', 
                    returnDate: '2023-05-28', 
                    book: 'Pets and Magic', 
                    user: '0123456789'
                }
            });
            done();
        });
    });
    it('GET /bookings/:id should return not found response if the booking does not exist', function (done) {
        chai.request(api)
        .get('order/000')
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(404);
            chai.expect(res.body).to.deep.equal({
                error: 'Booking 000 not found'
            });
            done();
        });
    });
    
    it ('PUT /bookings/:id should return a success respond with found booking', function (done) {
        const booking = {
            id: '0001112223', 
            rentDate: '1911-02-21', 
            returnDate: '1911-03-12',
            book: 'Hidden Daggers and Great Misfits',
            user: '9876543210'
        };
        chai.request(api)
        .put('/bookings/0001112223')
        .send(booking)
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(200);
            chai.expect(res.body).to.deep.equal({
                data: {
                    id: '0001112223', 
                    rentDate: '1911-02-21', 
                    returnDate: '1911-03-12',
                    book: 'Hidden Daggers and Great Misfits',
                    user: '9876543210'
                }
            });
            done();
        });
    });
})
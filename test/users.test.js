import chai from 'chai';
import chaiHttp from 'chai-http';
import api from '../index.js';

chai.use(chaiHttp);

describe('Users', function() {
    
    it('GET /users should return a success response with all users', function (done) {
        chai.request(api)
        .get('/users')
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(200);
            chai.expect(res.body).to.deep.equal({
                data: [
                    {
                        id: '0123456789', 
                        lastName: 'LapinSorcier', 
                        firstName: 'Kwain', 
                        birthDate: '12/04/2000', 
                        address: '5 rue Mtg', 
                        phone: '0011223344', 
                        email: 'kwain@lapinsorcier.mtg'
                    },
                    {
                        id: '9876543210', 
                        lastName: 'Le Gredin', 
                        firstName: 'Anowon', 
                        birthDate: '13/12/1883', 
                        address: '0 faubourg du marais', 
                        phone: '0908070605', 
                        email: 'anowon@meuletondeck.gre'
                    }
                ]
            });
            done();
        });
    });

    it('POST /users should create the user and return a success response with the user', function (done) {
        const user = {
            id: '0011223344',
            lastName: 'Starn',
            firstName: 'Ghyrson',
            birthDate: '05-06-2015',
            address: '13 rue flammeau',
            phone: '0755225522',
            email: 'ghyrson@burn.red'
        };
        chai.request(api)
        .post('/users')
        .send(user)
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(201);
            chai.expect(res.body).to.deep.equal({
                data: user
            });
            done();
        });
    });
    it('POST /users should return a bad request if ID is not a 10 digits string', function (done) {
        const user = {
            id: '1234567', // tester également avec des lettres / caractères
            lastName: 'Lerouge',
            firstName: 'Solphim',
            birthDate: '02/08/1987',
            phone: '0505050505',
            email: 'solphim@lerouge.burn'
        };
        chai.request(api)
        .post('/users')
        .send(user)
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(400);
            chai.expect(res.body).to.deep.equal({
                error: 'Id incorrect. User id must be 10 characters.'
            });
        });
        done();
    });
    it('POST /users should return a bad request if birth date is not of format dd/mm/yyyy', function (done) {
        const user = {
            id: '1112223334',
            lastName: 'SoldierQueen',
            firstName: 'Myrell',
            birthDate:'1214/02/12',
            phone: '0102030405',
            email: 'myrell@soldier.qg'
        };
        chai.request(api)
        .post('/users')
        .send(user)
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(400);
            chai.expect(res.body).to.deep.equal({
                error: 'Birth date incorrect. Must be of format dd/mm/yyyy'
            });
        });
        done();
    });
    it('POST /users should return a bad request if phone is not a 10 digits string', function (done) {
        const user = {
            id: '0011223344',
            lastName: 'Starn',
            firstName: 'Ghyrson',
            birthDate: '05-06-2015',
            address: '13 rue flammeau',
            phone: '1255225522',
            email: 'ghyrson@burn.red'
        };
        chai.request(api)
        .post('/users')
        .send(user)
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(400);
            chai.expect(res.body).to.deep.equal({
                error: 'Phone number incorrect. Must be of format 0x and 4 times two digits or 00x / +33x and 4 times two digits.'
            });
        });
        done();
    });
    it('GET /users/:id should return a success response with found user', function(done) {
        chai.request(api)
        .get('/users/0123456789')
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(200);
            chai.expect(res.body).to.deep.equal({
                data: {
                    id: '0123456789', 
                    lastName: 'LapinSorcier', 
                    firstName: 'Kwain', 
                    birthDate: '12/04/2000', 
                    address: '5 rue Mtg', 
                    phone: '0011223344', 
                    email: 'kwain@lapinsorcier.mtg'
                }
            });
            done();
        });
    });
    it('GET /users/:id should return not found response if the user does not exist', function (done) {
        chai.request(api)
        .get('/users/0000000000')
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(404);
            chai.expect(res.body).to.deep.equal({
                error: 'User 0000000000 not found'
            });
            done();
        });
    });

    it('PUT /users/:id should return a success response with found user', function (done) {
        const user = {
            id: '0123456789', 
            lastName: 'LapinSorcier', 
            firstName: 'Kwain', 
            birthDate: '12/04/2000', 
            address: '5 rue Magiiiic', 
            phone: '0011223344', 
            email: 'kwain@lapinsorcier.mtg'
        };
        chai.request(api)
        .put('/users/0123456789')
        .send(user)
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(200);
            chai.expect(res.body).to.deep.equal({
                data: {
                    id: '0123456789', 
                    lastName: 'LapinSorcier', 
                    firstName: 'Kwain', 
                    birthDate: '12/04/2000', 
                    address: '5 rue Magiiiic', 
                    phone: '0011223344', 
                    email: 'kwain@lapinsorcier.mtg'
                }
            });
            done();
        });
    });
    it('PUT /users/:id should return not found response if the user does not exist', function (done) {
        const user = {
            id: '0011223344',
            lastName: 'Starn',
            firstName: 'Ghyrson',
            birthDate: '05/06/2015',
            address: '13 rue flamBeau',
            phone: '0755225522',
            email: 'ghyrson@burn.red'
        };
        chai.request(api)
        .put('/users/0011223355')
        .send(user)
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(404);
            chai.expect(res.body).to.deep.equal({
                error: 'User 0011223355 not found'
            });
            done();
        });
    });
    it('PUT /users should return a bad request if ID is not a 10 digits string');
    it('PUT /users should return a bad request if birth date is not of format dd/mm/yyyy');
    it('PUT /users should return a bad request if phone is not a 10 digits string');

    it('DELETE /users/:id should return a success response', function (done) {
        chai.request(api)
        .delete('/users/9876543210')
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(200);
            chai.expect(res.body).to.deep.equal({
                meta: {
                    _deleted: {
                        id: '9876543210', 
                        lastName: 'Le Gredin', 
                        firstName: 'Anowon', 
                        birthDate: '13/12/1883', 
                        address: '0 faubourg du marais', 
                        phone: '0908070605', 
                        email: 'anowon@meuletondeck.gre'
                    }
                }
            });
            done();
        });
    });
    it('DELETE /users/:id should return not found response if the user does not exist', function(done) {
        chai.request(api)
        .delete('/users/00')
        .end((_, res) => {
            chai.expect(res.statusCode).to.equal(404);
            chai.expect(res.body).to.deep.equal({
                error: 'User 00 not found'
            });
            done();
        });
    });
});
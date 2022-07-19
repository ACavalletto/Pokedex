let chai = require('chai');
let chaiHttp = require('chai-http');
let Pokemon = require('../models/pokemon')
let server = require('../server');
let should = chai.should();
let expect = chai.expect();

chai.use(chaiHttp)

let pokemon = {
    'ID': 123,
    'name': '',
    'img': 'https://archives.bulbagarden.net/media/upload/thumb/b/ba/123Scyther.png/250px-123Scyther.png',
    'type': 'Bug',
    'type': 'Flying',
    'hp': 70,
    'attack': 110,
    'defense': 80,
    'spattack': 55,
    'spdefense': 80,
    'speed': 105,
}

describe('Pokedex', () => {

    describe('/GET pokemon', () => {
        it('it should GET all pokemon', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('/GET pokemon show page', () => {
        it('it should GET one pokemon', (done) => {
                chai.request(server)
                    .get('/1')
                    .end((err, res) => {
                        res.should.have.status(200);
                        done();
                    });
            });
        });
    describe('/GET new pokemon form page', () => {
        it('it should GET new pokemon form page', (done) => {
            chai.request(server)
                .get('/new')
                .end((err, res) => {
                    res.should.have.status(200);
                    console.log(res.body)
                    done();
                });
        });
    });
    });
    describe('/GET pokemon edit form page', () => {
        it('it should GET edit pokemon form page', (done) => {
            chai.request(server)
                .get('/1/edit')
                .end((err, res) => {
                    res.should.have.status(200);
                    console.log(res.body)
                    done();
                });
        });
    describe("/POST new", () => {
        it('it should POST a Pokemon', (done) => {

            chai.request(server)
                .post('/')
                .send(pokemon)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                    })
        })
    })
    describe('/PUT pokemon', () => {
        it('it should PUT pokemon and update it', (done) => {
            chai.request(server)
                .put('/1')
                .send(pokemon)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe('/DELETE pokemon', () => {
        it('it should DELETE pokemon', (done) => {
            chai.request(server)
                .put('/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
})
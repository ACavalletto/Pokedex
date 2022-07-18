let chai = require('chai');
let chaiHttp = require('chai-http');
let Pokemon = require('../models/pokemon')
let server = require('../server');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp)

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
//     describe("/POST new", () => {
//         it('it should not POST a Pokemon without name,imgs fields', (done) => {
//             let pokemon = {
//                 'ID': 123,
//                 'img': 'https://archives.bulbagarden.net/media/upload/thumb/b/ba/123Scyther.png/250px-123Scyther.png',
//                 'type': 'Bug',
//                 'type': 'Flying',
//                 'hp': 70,
//                 'attack': 110,
//                 'defense': 80,
//                 'spattack': 55,
//                 'spdefense': 80,
//                 'speed': 105,
//             }
//             chai.request(server)
//                 .post('/')
//                 .send(pokemon)
//                     .end((err, res) => { 
//                         res.should.have.status(200);
//                         res.body.should.be.a('object');
//                         res.body.should.have.property('name');
//                         res.body.errors.name.should.have.property('kind').eql('required');
//                         done();
//                     })
//         })
//     })
})
const request = require('supertest');
const should = require('should');
const app = require('./index');

describe('성공시', ()=> {
    it('id 숫자', (done) => {
        for (let index = 0; index < 10; index++) {
            request(app)
            .post('/users')
            .send({name: 'jack'})
            .set('Accept', 'application/json')
            .end((err, res) => {
                res.body.should.have.property('id',1); 
            });   
        }
    });
})
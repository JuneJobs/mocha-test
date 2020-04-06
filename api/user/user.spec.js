const request = require('supertest');
const should = require('should');
const app = require('./index');

describe('성공시', ()=> {
    it('id 숫자', (done) => {
        request(app)
            .get('/users')
            .end((err, res) => {
                res.body.should.have.property('id',1);
            });
        done();
    })
})
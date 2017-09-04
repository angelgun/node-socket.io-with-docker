const app = require('../index');
const request = require('supertest');

describe('라우터를 타고 왔을때', () => {
    it('POST /fisrt는 201을 보내주는가?', () => {
        request(app).
            post('/first').
            expect(201).
            end((err, res) => {
                if (err) throw err;
                done();
            });
    });
    it('POST /menu는 201을 보내주는가?', () => {
        request(app).
            post('/menu').
            expect(201).
            end((err, res) => {
                if (err) throw err;
                done();
            });
    });
    it('POST /callbell는 201을 보내주는가?', () => {
        request(app).
            post('/callbell').
            expect(201).
            end((err, res) => {
                if (err) throw err;
                done();
            });
    });
    it('POST /consultstart는 201을 보내주는가?', () => {
        request(app).
            post('/consultstart').
            expect(201).
            end((err, res) => {
                if (err) throw err;
                done();
            });
    });
    it('POST /consultend는 201을 보내주는가?', () => {
        request(app).
            post('/consultend').
            expect(201).
            end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});
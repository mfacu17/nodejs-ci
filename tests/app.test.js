const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

describe('GET /', () => {
    it('Should return a response', async () => {
        const response = await request.get('/');

        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello world');
    })
})
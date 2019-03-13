const request = require('supertest');
const app = require('express')();
const sinon = require('sinon');
const chai = require('chai');

const expect = chai.expect;

const { healthcheck } = require('../../../routes');

healthcheck.routes(app);

describe('User access health route to check health application', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should return health application when get route', async () => request(app)
    .get('/healthcheck')
    .set('Accept', 'application/json')
    .expect(200)
    .then((response) => {
      expect(response.body).to.deep.equal({ healthy: true });
    }));
});

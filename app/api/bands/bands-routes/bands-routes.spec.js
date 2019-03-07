const request = require('supertest');
const app = require('express')();
const sinon = require('sinon');
const chai = require('chai');

const expect = chai.expect;

const route = require('../../../routes');

route.routes(app);

const controller = require('../bands-controllers/bands-controller');

const bandsRepositoryResponse = [{
  _id: '5ae4ee0f66a91ad6dd98144e',
  name: 'Alcest',
  country: '5ae5e5ad66a91ad6dd9815be',
}];

describe('User access get route to list bands', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should return bands list when get route', async () => {
    sandbox.stub(controller, 'listBands').resolves(bandsRepositoryResponse);

    return request(app)
      .get('/bands')
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(response.body).to.deep.equal(bandsRepositoryResponse);
      });
  });

  it('should return error when function returns error', async () => {
    sandbox.stub(controller, 'listBands').rejects('Error');

    return request(app)
      .get('/bands')
      .set('Accept', 'application/json')
      .expect(500);
  });
});

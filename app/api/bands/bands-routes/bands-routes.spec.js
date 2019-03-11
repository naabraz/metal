const request = require('supertest');
const app = require('express')();
const sinon = require('sinon');
const chai = require('chai');

const expect = chai.expect;

const { bands } = require('../../../routes');

bands.routes(app);

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

  it('should add band error when post route is accessed', async () => {
    sandbox.stub(controller, 'addBand').resolves({ success: true });

    return request(app)
      .post('/bands')
      .send({ name: 'Opeth' })
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(response.body).to.deep.equal({ success: true });
      });
  });

  it('should return error when add band route returns error', async () => {
    sandbox.stub(controller, 'addBand').rejects('Error');

    return request(app)
      .post('/bands')
      .send({ name: 'Opeth' })
      .set('Accept', 'application/json')
      .expect(500);
  });
});
